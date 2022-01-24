import Head from "next/head";
import styles from "../styles/LoginPage.module.css";
import { useState, useRef } from "react";
import axios from "axios";
import { getSession, getCsrfToken, signIn } from "next-auth/react";

const LoginPage = ({ csrfToken }) => {
    const [isSuccessUser, setSuccessUser] = useState(false);
    const [isSuccessPass, setSuccessPass] = useState(false);
    const [hasFocussedUser, setHasFocussedUser] = useState(false);
    const [hasFocussedPass, setHasFocussedPass] = useState(false);
    const [emailValue, setEmail] = useState("");
    const [passwordValue, setPassword] = useState("");

    const userRef = useRef(null);
    const passRef = useRef(null);

    const signIn = async (data) => {
        const res = await axios.post("/api/auth/Credentials", {
            ...data,
        });

        return res.data;
    };

    const validateUser = (e) => {
        setEmail(userRef.current.value);

        if (emailValue === "") {
            setSuccessUser(false);
        } else {
            setSuccessUser(true);
        }
        console.log(hasFocussedUser, isSuccessUser);
    };

    const validatePass = (e) => {
        setPassword(passRef.current.value);

        if (passwordValue === "") {
            setSuccessPass(false);
        } else if (passwordValue.length < 7) {
            setSuccessPass(false);
        } else {
            setSuccessPass(true);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (isSuccessUser && isSuccessPass) {

            let email = emailValue;
            let password = passwordValue;
            const user = await signIn({
                email,
                password,
            });

            console.log(user);
        }
    };

    return (
        <>
            <Head>
                <script src="/formValidation.js" defer></script>
            </Head>

            <main className={styles.container}>
                <svg
                    width="60px"
                    height="60px"
                    className={styles.musicNote}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#8D74B1"
                >
                    <path
                        fill="#8D74B1"
                        d="M13 4h4v4h-4v9c0 1-.6 3-3 3s-3-2-3-3 .6-3 3-3 3 2 3 3V4z"
                    />
                    <path
                        stroke="#8D74B1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 17V8m0 9c0 1-.6 3-3 3s-3-2-3-3 .6-3 3-3 3 2 3 3zm0-9V4h4v4h-4z"
                    />
                </svg>

                <div
                    className={styles.background_imageLogin}
                    id="bgImage"
                ></div>

                <h1>The Game of Tones</h1>

                <p className={styles.para}>Creative Music Making</p>

                <form
                    className={styles.formContainer}
                    id="form"
                    name="myForm"
                    onSubmit={handleSubmit}
                >
                    <div className={styles.inputControl}>
                        <div
                            className={styles.inputContainer}
                            style={{
                                borderBottom: hasFocussedUser
                                    ? isSuccessUser
                                        ? "1px solid #09c372"
                                        : "1px solid #ff3860"
                                    : "1px solid #555555",
                            }}
                        >
                            <input
                                name="csrfToken"
                                type="hidden"
                                defaultValue={csrfToken}
                            />
                            <label
                                className={styles.labelStyle}
                                htmlFor="email"
                            >
                                Email:
                            </label>
                            <input
                                className={styles.inputStyle}
                                type="email"
                                id="email"
                                name="email"
                                onChange={(e) => {
                                    validateUser(e);
                                    setHasFocussedUser(true);
                                }}
                                ref={userRef}
                            />
                        </div>
                        <div className={`${styles.error} error`}></div>
                    </div>
                    <div className={styles.inputControl}>
                        <div
                            className={styles.inputContainer}
                            style={{
                                borderBottom: hasFocussedPass
                                    ? isSuccessPass
                                        ? "1px solid #09c372"
                                        : "1px solid #ff3860"
                                    : "1px solid #555555",
                            }}
                        >
                            <label
                                className={styles.labelStyle}
                                htmlFor="password"
                            >
                                Password:
                            </label>
                            <input
                                className={styles.inputStyle}
                                type="password"
                                name="password"
                                id="password"
                                onChange={(e) => {
                                    validatePass(e);
                                    setHasFocussedPass(true);
                                }}
                                ref={passRef}
                            />
                        </div>
                        <div className={`${styles.error} error`}></div>
                    </div>
                    <a id="accountCreation" href="/register">
                        Create account
                    </a>
                    <a id="ForgotInfo" href="#">
                        Forgot password or username?{" "}
                    </a>
                    <input
                        type="submit"
                        id="inlogButton"
                        value="SIGN IN"
                        onClick={() => {
                            setHasFocussedUser(true);
                            setHasFocussedPass(true);
                        }}
                    />
                </form>
            </main>
        </>
    );
};

LoginPage.getInitialProps = async (context) => {

    const { req, res } = context;
    const session = await getSession(req);

    if (session && res && session.accessToken) {
        res.writeHead(302, {
            Location: "/",
        });
        res.end();
        return;
    }

    return {
        session: undefined,
        csrfToken: await getCsrfToken(req),
    };
};

export default LoginPage;
