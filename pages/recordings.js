import Head from "next/head";
import styles from "../styles/RecordingsPage.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { getSanityContent } from "./api/sanity";
import { getSession, getCsrfToken } from "next-auth/react";
import { getToken } from "next-auth/jwt";
import { client } from "./api/sanity";
import { getUserByEmailQuery } from "./api/auth/queries";
import Les from "../components/layouts/Les";

const recordingsPage = (props) => {
    const { data: session, status } = useSession();
    const { recordings } = props;

    if (!session) {
        return (
            <section className="flex items-center justify-center w-full h-full absolute left-0 top-0 flex-col">
                <h1 className="p-10">Unauthorized</h1>
                <Link href="/login">
                    <a className="px-5 py-2 bg-black text-white rounded uppercase">
                        login
                    </a>
                </Link>
            </section>
        );
    }

    const togglePlay = (e) =>
        e.currentTarget.querySelector("audio").paused
            ? e.currentTarget.querySelector("audio").play()
            : e.currentTarget.querySelector("audio").pause();
    return (
        <>
            <Les sideBarTitle="Recordings" type="mixed">
                <main className={styles.main}>
                    <a href="#" className={styles.backContainer}>
                        <img
                            src={"/icons/arrow-left.svg"}
                            alt="arrow left"
                        ></img>
                        <p>Back</p>
                    </a>

                    <header>
                        <h1 className={styles.chapterHeader}>My Recordings</h1>
                    </header>

                    <ul className={styles.recordings}>
                        {recordings ? (
                            recordings.map((record, i) => {
                                let url = record.asset.url;

                                return (
                                    <li className={styles.recording} key={i}>
                                        <div
                                            className={
                                                styles.recordingGridItem1
                                            }
                                        >
                                            Chapter 1.1 <br />{" "}
                                            <span className={styles.spanItem}>
                                                Exercise 1
                                            </span>
                                        </div>
                                        <div
                                            className={
                                                styles.recordingGridItem2
                                            }
                                            onClick={(e) => togglePlay(e)}
                                        >
                                            <audio>
                                                <source src={url}></source>
                                            </audio>
                                            <img
                                                className={styles.recordingSVG}
                                                src={"/icons/play-button.svg"}
                                                alt="play button"
                                            ></img>
                                        </div>

                                        <div
                                            className={
                                                styles.recordingGridItem3
                                            }
                                        >
                                            <img
                                                className={styles.recordingSVG}
                                                src={"/icons/trash-can.svg"}
                                                alt="trashcan"
                                            ></img>
                                        </div>
                                        <div
                                            className={styles.recordingGridItem}
                                        ></div>
                                        <div
                                            className={
                                                styles.recordingGridItem4
                                            }
                                        >
                                            Go to exercise
                                        </div>
                                    </li>
                                );
                            })
                        ) : (
                            <li>You have no recordings</li>
                        )}
                    </ul>
                </main>
            </Les>
            {/* <nav className={styles.topBar}>
                <div className={styles.circleIcon}>
                    <img src={"./icons/music-note2.svg"} alt="music-note"></img>
                </div>

                <div className={styles.circleIcon}>
                    {" "}
                    <img src={"./icons/profile.svg"} alt="profile"></img>
                </div>
            </nav>

            <aside className={styles.sideBar}>
                <a href="/#">
                    <img
                        className={styles.sideBarItem}
                        src={"./icons/menu-button.svg"}
                        alt="menu-button"
                    ></img>
                </a>
                <p>Menu</p>

                <h2 className={styles.sideBarItem1}>My Recordings</h2>
            </aside> */}
        </>
    );
};

export async function getServerSideProps(ctx) {
    const { req, res } = ctx;

    const secret = process.env.SECRET;
    const token = await getToken({ req, secret });

    const email = token.email;

    const user = await client.fetch(getUserByEmailQuery, {
        email,
    });

    const data = await getSanityContent({
        query: `query {
            User(id: "${user._id}") {
              recordings{asset{url}}
            }
          }`,
    });

    return {
        props: { recordings: data.User.recordings }, // will be passed to the page component as props
    };
}

export default recordingsPage;
