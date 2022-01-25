import Head from "next/head";
import styles from "../styles/ProfilePage.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import { getToken } from "next-auth/jwt";
import { client } from "./api/sanity";
import { getUserByEmailQuery } from "./api/auth/queries";
import { getSanityContent } from "./api/sanity";
import Link from "next/link";
import Les from "../components/layouts/Les";

const profilePage = (props) => {
    const { data: session, status } = useSession();
    // console.log("proprpr", props);
    if (!session || status === "unauthenticated" || status === "loading") {
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
    const { name, email, password, recordings } = props.user;
    console.log(session.user);

    return (
        <>
            <Les sideBarTitle="Profile Page" type="mixed">
                <main className={styles.main}>
                    <a href="#" className={styles.backContainer}>
                        <img
                            src={"/icons/arrow-left.svg"}
                            alt="arrow left"
                        ></img>
                        <p>Back</p>
                    </a>

                    <header>
                        <h1 className={styles.chapterHeader}>My Profile</h1>
                    </header>

                    <div className={styles.profileContainer}>
                        <section className={styles.generalInfo}>
                            <h2 className={styles.generalInfoHeader}>
                                General Info
                            </h2>
                            <div className={styles.dataContainer}>
                                <p className={styles.userData}>Name: {name}</p>
                                <p className={styles.userData}>
                                    Email: {email}
                                </p>
                                <p className={styles.userData}>
                                    Password: {password}
                                </p>
                                <p className={styles.userData}>
                                    Total Recordings: {recordings.length}
                                </p>
                            </div>
                        </section>

                        <section className={styles.chapters}>
                            <h2 className={styles.generalInfoHeader}>
                                Chapters
                            </h2>
                            <div className={styles.dataContainer}>
                                <p className={styles.chapterData}>
                                    Current chapter:
                                </p>
                                <p className={styles.chapterData}>
                                    Chapter progression:
                                </p>
                            </div>
                            <h1>
                                <button onClick={() => signOut()}>
                                    {session.user.name}
                                </button>
                            </h1>
                        </section>
                    </div>
                </main>
            </Les>
            {/* <div className="background-imageIntro" id="bgImage"></div>

            <nav className={styles.topBar}>
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

                <h2 className={styles.sideBarItem1}>My Profile</h2>
            </aside>

            <main className={styles.main}>
                <a href="#" className={styles.backContainer}>
                    <img src={"/icons/arrow-left.svg"} alt="arrow left"></img>
                    <p>Back</p>
                </a>

                <header>
                    <h1 className={styles.chapterHeader}>My Profile</h1>
                </header>

                <div className={styles.profileContainer}>
                    <section className={styles.generalInfo}>
                        <h2 className={styles.generalInfoHeader}>
                            General Info
                        </h2>
                        <div className={styles.dataContainer}>
                            <p className={styles.userData}>Name: {name}</p>
                            <p className={styles.userData}>Email: {email}</p>
                            <p className={styles.userData}>
                                Password: {password}
                            </p>
                            <p className={styles.userData}>
                                Total Recordings: {recordings.length}
                            </p>
                        </div>
                    </section>

                    <section className={styles.chapters}>
                        <h2 className={styles.generalInfoHeader}>Chapters</h2>
                        <div className={styles.dataContainer}>
                            <p className={styles.chapterData}>
                                Current chapter:
                            </p>
                            <p className={styles.chapterData}>
                                Chapter progression:
                            </p>
                        </div>
                        <h1>
                            <button onClick={() => signOut()}>
                                {session.user.name}
                            </button>
                        </h1>
                    </section>
                </div>
            </main> */}
        </>
    );
};

export async function getServerSideProps(ctx) {
    const { req, res } = ctx;

    const secret = process.env.SECRET;

    const token = await getToken({ req, secret });
    if (!token) {
        return { props: {} };
    }
    const email = token.email;

    const user = await client.fetch(getUserByEmailQuery, {
        email,
    });

    const data = await getSanityContent({
        query: `query {
            User(id: "${user._id}") {
                name
                email
                password
                recordings{asset{url}}
            }
          }`,
    });

    return {
        props: { user: data.User }, // will be passed to the page component as props
    };
}

export default profilePage;
