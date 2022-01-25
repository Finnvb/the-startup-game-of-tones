import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const OnionCircle = ({ chapter = 1, volume = "volume_1" }) => {
    const navRef = useRef();
    useEffect(() => {
        const resizeHandler = () => {
            let height = navRef.current.offsetHeight;
            let items = navRef.current.querySelectorAll("ul li");
            let size = 360 / items.length;
            let offset = size / 2;

            items.forEach((i, idx) => {
                // console.log(i);
                let r = `rotate(${(idx + 1) * size - offset * 4}deg)`;
                let rn = `rotate(${-((idx + 1) * size - offset * 4)}deg)`;
                console.log(r, rn);
                let t = `translateY(-${height / 2 - i.offsetHeight}px)`;
                // console.log(r, t);
                i.style.transform = `${r} ${t}`;
                i.querySelector("span").style.transform = `${rn}`;
            });
            // console.log(navRef.current.querySelectorAll("ul li"));
        };
        resizeHandler();

        window.addEventListener("resize", resizeHandler);
        return () => window.removeEventListener("resize", resizeHandler);
    });

    return (
        <nav
            className="rounded-full w-[65vw] h-[65vw]  lg:w-[45vw] lg:h-[45vw] bg-white"
            ref={navRef}
        >
            <div className=""></div>
            {chapter == 1 && (
                <ul className="w-full h-full flex justify-center items-center flex-col">
                    {[...Array(5)].map((_, i) => {
                        if (i == 0) {
                            return (
                                <li className="absolute" key={i}>
                                    <Link
                                        href={`/${volume}/chapter_${chapter}/`}
                                    >
                                        <a className="w-24 h-24 flex items-center justify-center bg-neutral-400 rounded-full">
                                            <span className="text-xl">
                                                Intro
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                            );
                        } else {
                            return (
                                <li className="absolute" key={i}>
                                    <Link
                                        href={`/${volume}/chapter_${chapter}/subchapter_${i}`}
                                    >
                                        <a className="w-24 h-24 flex items-center justify-center bg-neutral-400 rounded-full">
                                            <span className="text-xl">
                                                {chapter}.{i}
                                            </span>
                                        </a>
                                    </Link>
                                </li>
                            );
                        }
                    })}
                </ul>
            )}
            {chapter == 2 && (
                <ul>
                    {[...Array(3)].map((_, i) => {
                        return (
                            <li>
                                <Link
                                    href={`/${volume}/chapter_${chapter}/subchapter_${
                                        i + 1
                                    }`}
                                >
                                    <a>
                                        {chapter}.{i + 1}
                                    </a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            )}
            {chapter == 3 && (
                <ul>
                    {[...Array(3)].map((_, i) => {
                        return (
                            <li>
                                <Link
                                    href={`/${volume}/chapter_${chapter}/subchapter_${
                                        i + 1
                                    }`}
                                >
                                    <a>
                                        {chapter}.{i + 1}
                                    </a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            )}
        </nav>
    );
};

export default OnionCircle;
