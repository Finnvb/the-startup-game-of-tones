import styles from "../styles/RegisterPage.module.css";
import { useSession } from "next-auth/react";
import { useState } from "react";
import validator from "validator";
import axios from "axios";

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const { data: session, status } = useSession();
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");
    const [name, setName] = useState("");
    const [disabled, setDisabled] = useState(true);

    const signUp = async (data) => {
        const res = await axios.post("/api/auth/signin/credentials", {
            ...data,
        });

        return res.data;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submitted");

        if (
            validator.isEmail(email) &&
            password.length >= 8 &&
            password == password1 &&
            name.length >= 3
        ) {
            const user = await signUp({
                email,
                password,
                name,
            });

  
        }
    };

    const validate = () => {
        if (
            validator.isEmail(email) &&
            password.length >= 8 &&
            password == password1 &&
            name.length >= 3
        ) {
            setDisabled(false);
            console.log("right");
        } else {
            setDisabled(true);
            console.log(
                "wrong: ",
                validator.isEmail(email),
                password >= 8,
                password == password1,
                name >= 3
            );
        }
    };

    return (
        <>
            <main className={styles.container}>
                <div
                    className={styles.background_imageLogin}
                    id="bgImage"
                ></div>

                <h1 id="signUpTitle">Create Account</h1>

                <form className={styles.formContainer} onSubmit={handleSubmit}>
                    <label className={styles.labelStyleSignup}>
                        Name:
                        <input
                            className={styles.inputStyle}
                            type="text"
                            name="name"
                            onChange={(e) => {
                                setName(e.target.value);
                                validate();
                            }}
                            required
                        />
                    </label>
                    <label className={styles.labelStyleSignup}>
                        Email:
                        <input
                            className={styles.inputStyle}
                            type="email"
                            name="email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                                validate();
                            }}
                            required
                        />
                    </label>
                    <label className={styles.labelStyleSignup}>
                        Password:
                        <input
                            className={styles.inputStyle}
                            type="password"
                            name="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                                validate();
                            }}
                            required
                        />
                    </label>
                    <label className={styles.labelStyleSignup}>
                        Repeat password:
                        <input
                            className={styles.inputStyle}
                            type="password"
                            name="password1"
                            onChange={(e) => {
                                setPassword1(e.target.value);
                                validate();
                            }}
                            required
                        />
                    </label>

                    <input
                        type="submit"
                        id={styles.inlogButton}
                        value="SIGN UP"
                        disabled={disabled}
                    />
                </form>
            </main>
        </>
    );
};

export default RegisterPage;
