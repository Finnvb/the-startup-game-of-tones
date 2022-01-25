import Head from "next/head";
import styles from "../styles/VideosPage.module.css";

const videosPage = () => {
    return (
        <>
            <Head>
                <script src="/icons/videoExampleScript.js" defer></script>
            </Head>

            <div className="background-imageIntro" id="bgImage"></div>

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

                <section className={styles.videoExampleSection}>
                    <h3 className={styles.videoExampleTitle} id="exampleHeader">
                        Example 1
                    </h3>
                    <div className={styles.videoControlContainer}>
                        <div className={styles.videoControl} id="playbtn">
                            <img
                                className={styles.videoControlIcon}
                                id="controlIcon"
                                src={"/icons/play-button-icon.svg"}
                                alt="play button"
                            ></img>
                        </div>
                        <div className={styles.videoControl} id="replaybtn">
                            <img
                                className={styles.videoControlIcon}
                                src={"/icons/reload-icon.svg"}
                                alt="play button"
                            ></img>
                        </div>
                        <div className={styles.videoControl} id="shufflebtn">
                            <img
                                className={styles.videoControlIcon}
                                src={"/icons/shuffle-icon.svg"}
                                alt="play button"
                            ></img>
                        </div>
                    </div>
                    <video className={styles.videoExample} id="exampleVideo">
                        <source src="Contour1.mp4" type="video/mp4" />
                    </video>
                </section>
            </main>
        </>
    );
};

export default videosPage;
