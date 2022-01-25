import * as React from "react";
import styles from "../styles/KleurenCirkel.module.css";
import Link from "next/link";

const defaultConfig = {
    index: 1,
    chapter: 1,
};

const SvgComponent = ({ config }) => {
    console.log(config);
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 154.57 706.28"
            width={"100px"}
        >
            <defs>
                <style>
                    {
                        ".cls-1,.cls-12,.cls-14,.cls-17{fill:none}.cls-1{stroke:#abafba;stroke-width:5px}.cls-11,.cls-2{fill:#fff}.cls-12,.cls-14,.cls-2{stroke:#fff}.cls-17,.cls-2{stroke-miterlimit:10}.cls-3{fill:#ff9400}.cls-4{fill:#e7ef37}.cls-5{fill:#f08a2a}.cls-6{fill:#5667c3}.cls-7{fill:#3f51b5}.cls-8{fill:#54ba54}.cls-9{fill:#edf465}.cls-10{fill:#62cc62}.cls-12,.cls-17{stroke-width:2px}.cls-13{fill:#ecda32}.cls-14{stroke-width:.5px}.cls-15{fill:#d3751f}.cls-16{fill:#010200}.cls-17{stroke:#000}"
                    }
                </style>
            </defs>
            <path
                className="cls-1"
                d="M103 196.07v146.84"
                id="verbindstreep_2"
                data-name="verbindstreep 2"
            />
            <path
                className="cls-1"
                d="M103 353.14v146.77"
                id="verbindstreep_3"
                data-name="verbindstreep 3"
            />
            <path
                className="cls-1"
                d="M103 510.21v172.51"
                id="verbindstreep_4"
                data-name="verbindstreep 4"
            />
            <path
                className="cls-1"
                d="M103 39v157.07"
                id="verbindstreep_1"
                data-name="verbindstreep 1"
            />

            <circle
                className="cls-2"
                cx={103}
                cy={667.28}
                r={38.5}
                id="witte_cirkel_4"
                data-name="witte cirkel 4"
            />

            <Link href={`/${config.path[0]}/${config.path[1]}/`}>
                <a className="cursor-pointer">
                    <circle
                        className="cls-2"
                        cx={103}
                        cy={39}
                        r={38.5}
                        id="witte_cirkel_1"
                        data-name="witte cirkel 1"
                    />
                    <text x="75" y="50" className={styles.kleurenCirkelText}>
                        Intro
                    </text>
                </a>
            </Link>

            <Link href={`/${config.path[0]}/${config.path[1]}/subchapter_1`}>
                <a className="cursor-pointer">
                    <circle
                        className="cls-2"
                        cx={103}
                        cy={196.07}
                        r={38.5}
                        id="witte_cirkel_kcirkel_1"
                        data-name="witte cirkel kcirkel 1"
                    />
                    <text x="95" y="210" className={styles.kleurenCirkelText}>
                        {config.chapter}.1
                    </text>
                </a>
            </Link>
            {config.index == 1 && (
                <g>
                    <Link
                        href={`/${config.path[0]}/${config.path[1]}/subchapter_1/exercise`}
                    >
                        <a className="cursor-pointer">
                            <g>
                                <path
                                    className="cls-3"
                                    d="M115.25 243.66a38.36 38.36 0 0 1-19.18-5.12l-28 48.51a94.59 94.59 0 0 0 94.34 0l-28-48.51a38.3 38.3 0 0 1-19.16 5.12Z"
                                    transform="translate(-12.25 -9.09)"
                                    id="oranje_binnenlaag_kcirkel_1"
                                    data-name="oranje binnenlaag kcirkel 1"
                                />
                                <path
                                    className="cls-5"
                                    d="M115.25 299.66a94.06 94.06 0 0 1-47.19-12.61l-4.25 7.36a103.1 103.1 0 0 0 102.85 0l-4.26-7.36a94 94 0 0 1-47.15 12.61Z"
                                    transform="translate(-12.25 -9.09)"
                                    id="oranje_buitenlaag_kcirkel_1"
                                    data-name="oranje buitenlaag kcirkel 1"
                                />
                            </g>
                        </a>
                    </Link>

                    <Link
                        href={`/${config.path[0]}/${config.path[1]}/subchapter_1/action`}
                    >
                        <a className="cursor-pointer">
                            <g>
                                <path
                                    className="cls-4"
                                    d="M76.76 205.36h-56a94.49 94.49 0 0 0 47.31 81.69l28-48.51a38.47 38.47 0 0 1-19.31-33.18Z"
                                    transform="translate(-12.25 -9.09)"
                                    id="geel_binnenlaag_kcirkel_1"
                                    data-name="geel binnenlaag kcirkel 1"
                                />
                                <path
                                    className="cls-9"
                                    d="M20.75 205.36h-8.5a103 103 0 0 0 51.56 89.05l4.25-7.36a94.49 94.49 0 0 1-47.31-81.69Z"
                                    transform="translate(-12.25 -9.09)"
                                    id="geel_buitenlaag_kcirkel_1"
                                    data-name="geel buitenlaag kcirkel 1"
                                />
                            </g>
                        </a>
                    </Link>

                    <Link
                        href={`/${config.path[0]}/${config.path[1]}/subchapter_1/theory`}
                    >
                        <a className="cursor-pointer">
                            <g>
                                <path
                                    className="cls-6"
                                    d="m63.64 116 4.25 7.36a94.58 94.58 0 0 1 94.68 0l4.26-7.36a103.09 103.09 0 0 0-103.19 0Z"
                                    transform="translate(-12.25 -9.09)"
                                    id="blauw_buitenlaag_kcirkel_1"
                                    data-name="blauw buitenlaag kcirkel 1"
                                />
                                <path
                                    className="cls-7"
                                    d="M115.25 166.66a38.35 38.35 0 0 1 19.32 5.2l28-48.51a94.58 94.58 0 0 0-94.68 0l28 48.51a38.34 38.34 0 0 1 19.36-5.2Z"
                                    transform="translate(-12.25 -9.09)"
                                    id="blauw_binnenlaag_kcirkel_1"
                                    data-name="blauw binnenlaag kcirkel 1"
                                />
                            </g>
                        </a>
                    </Link>

                    <Link
                        href={`/${config.path[0]}/${config.path[1]}/subchapter_1/practice`}
                    >
                        <a className="cursor-pointer">
                            <g>
                                <path
                                    className="cls-8"
                                    d="M20.75 205.16v.2h56v-.2a38.47 38.47 0 0 1 19.15-33.28l-28-48.51a94.48 94.48 0 0 0-47.15 81.79Z"
                                    transform="translate(-12.25 -9.09)"
                                    id="groen_binnenlaag_kcirkel_1"
                                    data-name="groen binnenlaag kcirkel 1"
                                />

                                <path
                                    className="cls-10"
                                    d="M20.75 205.16a94.48 94.48 0 0 1 47.14-81.79L63.64 116a103 103 0 0 0-51.39 89.15v.2h8.5Z"
                                    transform="translate(-12.25 -9.09)"
                                    id="groen_buitenlaag_kcirkel_1"
                                    data-name="groen buitenlaag kcirkel 1"
                                />
                            </g>
                        </a>
                    </Link>
                    <g
                        id="topic_icon_kcirkel_1"
                        data-name="topic icon kcirkel 1"
                        className="pointer-events-none"
                    >
                        <path
                            id="Path_309"
                            data-name="Path 309"
                            className="cls-11"
                            d="M119.57 147.24v1a1.59 1.59 0 0 1-1.35 1.57l-.24.91a1.13 1.13 0 0 1-1.09.83h-2.45a1.13 1.13 0 0 1-1.09-.83l-.24-.91a1.59 1.59 0 0 1-1.35-1.58v-1a1 1 0 0 1 1-1h5.88a1 1 0 0 1 1 1m4.52-13.47a8.36 8.36 0 0 1-2.36 5.85 7.71 7.71 0 0 0-2.07 4.2 1.4 1.4 0 0 1-1.38 1.17h-5.23a1.38 1.38 0 0 1-1.37-1.17 7.87 7.87 0 0 0-2.09-4.22 8.43 8.43 0 1 1 14.5-5.84Zm-7.47-5.1a1 1 0 0 0-1-1 6.1 6.1 0 0 0-6.08 6.08 1 1 0 0 0 1 .91 1 1 0 0 0 .91-.91 4.18 4.18 0 0 1 4.18-4.18 1 1 0 0 0 1-.94Z"
                            transform="translate(-12.25 -9.09)"
                        />
                    </g>
                    <g
                        id="inpractice_icon_kcirkel_1"
                        data-name="inpractice icon kcirkel 1"
                        className="pointer-events-none"
                    >
                        <path
                            id="Path_304"
                            data-name="Path 304"
                            className="cls-11"
                            d="m63 169.46-.62.38a1.09 1.09 0 0 1-1.3-.13 9.22 9.22 0 0 0-1.47-1.07 1.1 1.1 0 0 1-.5-1.21l.18-.72a1.12 1.12 0 0 0-.8-1.34l-1.22-.3a1.11 1.11 0 0 0-1.34.8l-.18.72a1.1 1.1 0 0 1-1 .84 8.41 8.41 0 0 0-1.8.26 1.1 1.1 0 0 1-1.2-.5l-.38-.63a1.1 1.1 0 0 0-1.51-.38l-1.08.65a1.1 1.1 0 0 0-.37 1.51l.35.59a1.1 1.1 0 0 1-.13 1.31 8.72 8.72 0 0 0-1.13 1.49 1.1 1.1 0 0 1-1.2.49l-.64-.16a1.1 1.1 0 0 0-1.34.8l-.3 1.21a1.1 1.1 0 0 0 .8 1.34l.58.14a1.11 1.11 0 0 1 .83 1 9.35 9.35 0 0 0 .26 1.9 1.1 1.1 0 0 1-.5 1.21l-.48.29a1.1 1.1 0 0 0-.38 1.51l.64 1.07a1.1 1.1 0 0 0 1.51.38l.45-.27a1.09 1.09 0 0 1 1.31.14 9.16 9.16 0 0 0 1.53 1.22 1.09 1.09 0 0 1 .51 1.21l-.13.5a1.1 1.1 0 0 0 .8 1.33l1.22.3a1.09 1.09 0 0 0 1.33-.8l.13-.5a1.1 1.1 0 0 1 1-.83 9.1 9.1 0 0 0 2-.3 1.12 1.12 0 0 1 1.23.5l.26.44a1.1 1.1 0 0 0 1.51.38l1.08-.65a1.08 1.08 0 0 0 .37-1.5l-.29-.49a1.1 1.1 0 0 1 .12-1.3 9.12 9.12 0 0 0 1.13-1.56 1.1 1.1 0 0 1 1.22-.51l.58.14a1.1 1.1 0 0 0 1.33-.8l.3-1.22a1.09 1.09 0 0 0-.8-1.33l-.64-.16a1.11 1.11 0 0 1-.84-1 8.82 8.82 0 0 0-.29-1.84 1.1 1.1 0 0 1 .5-1.22l.59-.35a1.11 1.11 0 0 0 .38-1.51l-.65-1.08a1.11 1.11 0 0 0-1.51-.38m-5.13 11.31a5.32 5.32 0 1 1 1.82-7.31 5.32 5.32 0 0 1-1.82 7.31"
                            transform="translate(-12.25 -9.09)"
                        />
                        <path
                            id="Path_305"
                            data-name="Path 305"
                            className="cls-11"
                            d="M72.05 161.74h-.4a.6.6 0 0 1-.57-.42 4.86 4.86 0 0 0-.38-.91.58.58 0 0 1 .1-.7l.28-.29a.6.6 0 0 0 0-.84l-.48-.48a.58.58 0 0 0-.84 0l-.29.28a.58.58 0 0 1-.7.1 5.15 5.15 0 0 0-.91-.38.6.6 0 0 1-.42-.57v-.4a.6.6 0 0 0-.6-.6h-.68a.6.6 0 0 0-.6.6v.37a.59.59 0 0 1-.43.57 5.44 5.44 0 0 0-.94.38.59.59 0 0 1-.7-.11l-.25-.25a.6.6 0 0 0-.84 0l-.49.48a.61.61 0 0 0 0 .85l.23.22a.59.59 0 0 1 .1.71 5 5 0 0 0-.41 1 .6.6 0 0 1-.57.42H61a.6.6 0 0 0-.6.6v.63a.6.6 0 0 0 .6.6h.29a.6.6 0 0 1 .57.43 4.77 4.77 0 0 0 .4 1 .61.61 0 0 1-.1.7l-.2.2a.61.61 0 0 0 0 .85l.48.48a.6.6 0 0 0 .84 0l.2-.2a.58.58 0 0 1 .7-.1 5.26 5.26 0 0 0 1 .4.58.58 0 0 1 .43.57v.28a.6.6 0 0 0 .6.6h.68a.6.6 0 0 0 .6-.6v-.3a.6.6 0 0 1 .42-.58 4.55 4.55 0 0 0 1-.41.62.62 0 0 1 .71.1l.23.23a.6.6 0 0 0 .84 0l.49-.48a.6.6 0 0 0 0-.84l-.26-.26a.61.61 0 0 1-.11-.7 4.66 4.66 0 0 0 .38-.93.6.6 0 0 1 .57-.43H72a.6.6 0 0 0 .6-.6v-.68a.62.62 0 0 0-.6-.6m-5.54 3.83a2.89 2.89 0 1 1 2.89-2.89 2.89 2.89 0 0 1-2.89 2.89"
                            transform="translate(-12.25 -9.09)"
                        />
                    </g>
                    <g
                        id="inaction_icon_kcirkel_1"
                        data-name="inaction icon kcirkel 1"
                        className="pointer-events-none"
                    >
                        <path
                            id="Path_306"
                            data-name="Path 306"
                            className="cls-11"
                            d="m47.18 233.29 4.51-3.72 6.31-1.43 3 1.43 3.21 3.72 1 4.57-3.11 8.42v5l-10.4 2-4.51-3.86-2.75-5.19Z"
                            transform="translate(-12.25 -9.09)"
                        />
                        <path
                            id="Path_307"
                            data-name="Path 307"
                            className="cls-12"
                            d="M55.9 227.88a9.73 9.73 0 0 0-9.71 9.72v1.4l-2.34 4.68a.81.81 0 0 0 .36 1.09.94.94 0 0 0 .36.08h1.62v3.9a1.61 1.61 0 0 0 1.62 1.62 1.14 1.14 0 0 0 .26 0l3-.5V253a.81.81 0 0 0 .81.81H52l9.71-1.62a.81.81 0 0 0 .68-.8v-5a4.14 4.14 0 0 1 1-2.59 9.71 9.71 0 0 0-7.5-15.9Z"
                            transform="translate(-12.25 -9.09)"
                        />
                        <path
                            id="Path_308"
                            data-name="Path 308"
                            className="cls-13"
                            d="M61.67 234.94h-.29a.44.44 0 0 1-.42-.3 3.81 3.81 0 0 0-.27-.66.44.44 0 0 1 .07-.52l.21-.2a.44.44 0 0 0 0-.62l-.35-.34a.43.43 0 0 0-.61 0l-.21.2a.42.42 0 0 1-.51.08 3.19 3.19 0 0 0-.66-.28.43.43 0 0 1-.3-.41v-.3a.44.44 0 0 0-.43-.43h-.5a.44.44 0 0 0-.44.43v.27a.42.42 0 0 1-.31.42 4.37 4.37 0 0 0-.68.27.42.42 0 0 1-.5-.07l-.19-.19a.43.43 0 0 0-.61 0l-.35.35a.43.43 0 0 0 0 .61l.17.17a.45.45 0 0 1 .07.52 2.9 2.9 0 0 0-.3.7.44.44 0 0 1-.42.3h-.22a.43.43 0 0 0-.43.43v.5a.43.43 0 0 0 .43.43h.2a.45.45 0 0 1 .42.31 3.74 3.74 0 0 0 .29.72.42.42 0 0 1-.08.51l-.14.14a.44.44 0 0 0 0 .62l.35.35a.45.45 0 0 0 .61 0l.15-.15a.44.44 0 0 1 .51-.07 3.5 3.5 0 0 0 .72.29.43.43 0 0 1 .31.42v.2a.43.43 0 0 0 .43.43h.49a.44.44 0 0 0 .44-.43v-.23a.43.43 0 0 1 .3-.41 4.34 4.34 0 0 0 .7-.3.44.44 0 0 1 .52.07l.16.17a.44.44 0 0 0 .62 0l.34-.35a.43.43 0 0 0 0-.61l-.18-.19a.44.44 0 0 1-.08-.51 3.14 3.14 0 0 0 .28-.68.43.43 0 0 1 .41-.31h.27a.44.44 0 0 0 .44-.43v-.49a.44.44 0 0 0-.44-.43m-4 2.77a2.1 2.1 0 1 1 2.1-2.1 2.1 2.1 0 0 1-2.1 2.1"
                            transform="translate(-12.25 -9.09)"
                        />
                    </g>
                    <g
                        id="exercises_icon_kcirkel_1"
                        data-name="exercises icon kcirkel 1"
                        className="pointer-events-none"
                    >
                        <path
                            id="Path_310"
                            data-name="Path 310"
                            className="cls-11"
                            d="M108.45 261.85h15a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3v-14a3 3 0 0 1 3-3"
                            transform="translate(-12.25 -9.09)"
                        />
                        <path
                            id="Path_311"
                            data-name="Path 311"
                            className="cls-11"
                            d="M125.74 273.59a.52.52 0 0 0-.53.53v4.77a1.61 1.61 0 0 1-1.61 1.61h-15.07a1.61 1.61 0 0 1-1.61-1.61v-14a1.61 1.61 0 0 1 1.61-1.61h4.77a.54.54 0 1 0 0-1.07h-4.77a2.69 2.69 0 0 0-2.69 2.69v14a2.7 2.7 0 0 0 2.69 2.68h15.07a2.68 2.68 0 0 0 2.68-2.68v-4.78a.52.52 0 0 0-.53-.53Z"
                            transform="translate(-12.25 -9.09)"
                        />
                        <path
                            id="Path_312"
                            data-name="Path 312"
                            className="cls-14"
                            d="M125.74 273.59a.52.52 0 0 0-.53.53v4.77a1.61 1.61 0 0 1-1.61 1.61h-15.07a1.61 1.61 0 0 1-1.61-1.61v-14a1.61 1.61 0 0 1 1.61-1.61h4.77a.54.54 0 1 0 0-1.07h-4.77a2.69 2.69 0 0 0-2.69 2.69v14a2.7 2.7 0 0 0 2.69 2.68h15.07a2.68 2.68 0 0 0 2.68-2.68v-4.78a.52.52 0 0 0-.53-.53Z"
                            transform="translate(-12.25 -9.09)"
                        />
                        <path
                            id="Path_313"
                            data-name="Path 313"
                            className="cls-15"
                            d="M120.68 267a1.73 1.73 0 0 0-2.41 0l-6.77 6.6a.44.44 0 0 0-.1.16l-.89 3.13a.39.39 0 0 0 .1.36.37.37 0 0 0 .37.1l3.21-.86a.4.4 0 0 0 .17-.1l6.77-6.6a1.64 1.64 0 0 0 0-2.32Zm-8.35 6.84 5.54-5.4 1.78 1.74-5.53 5.4Zm-.36.7 1.43 1.39-2 .53Zm8.62-5.28-.4.4-1.78-1.74.4-.39a1 1 0 0 1 1.34 0l.44.43a.91.91 0 0 1 0 1.29Z"
                            transform="translate(-12.25 -9.09)"
                        />
                        <path
                            id="Path_314"
                            data-name="Path 314"
                            className="cls-15"
                            d="m117.7 268 2.13-1.07 1.44 1.77-1.44 1.21-.25.47-1.88 2.13-4.48 3.86.67-.52-2.14-1.53Z"
                            transform="translate(-12.25 -9.09)"
                        />
                    </g>
                    <g
                        id="zwarte_pijl_kcirkel_1"
                        data-name="zwarte pijl kcirkel 1"
                        className="pointer-events-none"
                    >
                        <path
                            id="Path_316"
                            data-name="Path 316"
                            className="cls-16"
                            d="m76.25 185.5 9.64 3.72-8.07 6.57Z"
                            transform="translate(-12.25 -9.09)"
                        />
                        <path
                            id="Path_317"
                            data-name="Path 317"
                            className="cls-16"
                            d="m78.18 194.86 6.73-5.48-8-3.11Zm-.73 1.87-1.82-12 11.23 4.34Z"
                            transform="translate(-12.25 -9.09)"
                        />
                        <path
                            className="cls-17"
                            d="M134 238.81a38.5 38.5 0 1 1 .59-67"
                            transform="translate(-12.25 -9.09)"
                        />
                    </g>
                </g>
            )}

            <Link href={`/${config.path[0]}/${config.path[1]}/subchapter_2`}>
                <a className="cursor-pointer">
                    <circle
                        className="cls-2"
                        cx={103}
                        cy={353.14}
                        r={38.5}
                        id="witte_cirkel_kcirkel_2"
                        data-name="witte cirkel kcirkel 2"
                    />
                    <text x="90" y="360" className={styles.kleurenCirkelText}>
                        {config.chapter}.2
                    </text>
                </a>
            </Link>

            {config.index == 2 && (
                <g>
                    <Link
                        href={`/${config.path[0]}/${config.path[1]}/subchapter_2/exercise`}
                    >
                        <a className="cursor-pointer">
                            <g>
                                <path
                                    className="cls-3"
                                    d="M115.25 400.73a38.36 38.36 0 0 1-19.18-5.12l-28 48.51a94.59 94.59 0 0 0 94.34 0l-28-48.51a38.3 38.3 0 0 1-19.16 5.12Z"
                                    transform="translate(-12.25 -9.09)"
                                    id="oranje_binnenlaag_kcirkel_2"
                                    data-name="oranje binnenlaag kcirkel 2"
                                />
                                <path
                                    className="cls-5"
                                    d="M115.25 456.73a94.06 94.06 0 0 1-47.19-12.61l-4.25 7.36a103.14 103.14 0 0 0 102.85 0l-4.26-7.37a94 94 0 0 1-47.15 12.62Z"
                                    transform="translate(-12.25 -9.09)"
                                    id="oranje_buitenlaag_kcirkel_2"
                                    data-name="oranje buitenlaag kcirkel 2"
                                />
                            </g>
                        </a>
                    </Link>

                    <Link
                        href={`/${config.path[0]}/${config.path[1]}/subchapter_2/action`}
                    >
                        <a className="cursor-pointer">
                            <g>
                                <path
                                    className="cls-4"
                                    d="M76.76 362.43h-56a94.49 94.49 0 0 0 47.31 81.69l28-48.51a38.47 38.47 0 0 1-19.31-33.18Z"
                                    transform="translate(-12.25 -9.09)"
                                    id="geel_binnenlaag_kcirkel_2"
                                    data-name="geel binnenlaag kcirkel 2"
                                />
                                <path
                                    className="cls-9"
                                    d="M20.75 362.43h-8.5a103 103 0 0 0 51.56 89.05l4.25-7.36a94.49 94.49 0 0 1-47.31-81.69Z"
                                    transform="translate(-12.25 -9.09)"
                                    id="geel_buitenlaag_kcirkel_2"
                                    data-name="geel buitenlaag kcirkel 2"
                                />
                            </g>
                        </a>
                    </Link>

                    <Link
                        href={`/${config.path[0]}/${config.path[1]}/subchapter_2/theory`}
                    >
                        <a className="cursor-pointer">
                            <g>
                                <path
                                    className="cls-6"
                                    d="m63.64 273.08 4.25 7.36a94.58 94.58 0 0 1 94.68 0l4.26-7.36a103.09 103.09 0 0 0-103.19 0Z"
                                    transform="translate(-12.25 -9.09)"
                                    id="blauw_buitenlaag_kcirkel_2"
                                    data-name="blauw buitenlaag kcirkel 2"
                                />
                                <path
                                    className="cls-7"
                                    d="M115.25 323.73a38.35 38.35 0 0 1 19.32 5.2l28-48.51a94.58 94.58 0 0 0-94.68 0L95.9 329a38.34 38.34 0 0 1 19.35-5.27Z"
                                    transform="translate(-12.25 -9.09)"
                                    id="blauw_binnenlaag_kcirkel_2"
                                    data-name="blauw binnenlaag kcirkel 2"
                                />
                            </g>
                        </a>
                    </Link>

                    <Link
                        href={`/${config.path[0]}/${config.path[1]}/subchapter_2/practice`}
                    >
                        <a className="cursor-pointer">
                            <g>
                                <path
                                    className="cls-8"
                                    d="M20.75 362.23v.2h56v-.2A38.48 38.48 0 0 1 95.9 329l-28-48.51a94.48 94.48 0 0 0-47.15 81.74Z"
                                    transform="translate(-12.25 -9.09)"
                                    id="groen_binnenlaag_kcirkel_2"
                                    data-name="groen binnenlaag kcirkel 2"
                                />

                                <path
                                    className="cls-10"
                                    d="M20.75 362.23a94.48 94.48 0 0 1 47.14-81.79l-4.25-7.36a103 103 0 0 0-51.39 89.15v.2h8.5Z"
                                    transform="translate(-12.25 -9.09)"
                                    id="groen_buitenlaag_kcirkel_2"
                                    data-name="groen buitenlaag kcirkel 2"
                                />
                            </g>
                        </a>
                    </Link>
                    <g
                        id="topic_icon_kcirkel_2"
                        data-name="topic icon kcirkel 2"
                        className="pointer-events-none"
                    >
                        <path
                            id="Path_309-2"
                            data-name="Path 309"
                            className="cls-11"
                            d="M119.57 304.31v1a1.59 1.59 0 0 1-1.35 1.57l-.24.91a1.13 1.13 0 0 1-1.09.83h-2.45a1.13 1.13 0 0 1-1.09-.83l-.24-.91a1.59 1.59 0 0 1-1.35-1.58v-1a1 1 0 0 1 1-1h5.88a1 1 0 0 1 1 1m4.52-13.47a8.36 8.36 0 0 1-2.36 5.85 7.71 7.71 0 0 0-2.07 4.2 1.4 1.4 0 0 1-1.38 1.17h-5.23a1.37 1.37 0 0 1-1.37-1.17 7.8 7.8 0 0 0-2.09-4.21 8.43 8.43 0 1 1 14.5-5.85Zm-7.47-5.1a1 1 0 0 0-1-.95 6.08 6.08 0 0 0-6.08 6.07 1 1 0 0 0 1 .91 1 1 0 0 0 .91-.91 4.18 4.18 0 0 1 4.18-4.18 1 1 0 0 0 1-.94Z"
                            transform="translate(-12.25 -9.09)"
                        />
                    </g>
                    <g
                        id="inpractice_icon_kcirkel_2"
                        data-name="inpractice icon kcirkel 2"
                        className="pointer-events-none"
                    >
                        <path
                            id="Path_304-2"
                            data-name="Path 304"
                            className="cls-11"
                            d="m63 326.53-.62.38a1.1 1.1 0 0 1-1.3-.12 8.69 8.69 0 0 0-1.47-1.08 1.1 1.1 0 0 1-.5-1.21l.18-.72a1.12 1.12 0 0 0-.8-1.34l-1.22-.3a1.11 1.11 0 0 0-1.34.8l-.18.73a1.09 1.09 0 0 1-1 .83 8.41 8.41 0 0 0-1.8.26 1.1 1.1 0 0 1-1.2-.5l-.38-.63a1.1 1.1 0 0 0-1.51-.38l-1.08.64a1.1 1.1 0 0 0-.37 1.51l.35.59a1.1 1.1 0 0 1-.13 1.31 9.13 9.13 0 0 0-1.13 1.49 1.09 1.09 0 0 1-1.2.49l-.64-.16a1.1 1.1 0 0 0-1.34.8l-.3 1.22a1.1 1.1 0 0 0 .8 1.33l.58.14a1.11 1.11 0 0 1 .83 1 9.35 9.35 0 0 0 .26 1.9 1.1 1.1 0 0 1-.5 1.21l-.48.29a1.1 1.1 0 0 0-.38 1.51l.64 1.08a1.1 1.1 0 0 0 1.51.37l.45-.27a1.1 1.1 0 0 1 1.31.14 9.16 9.16 0 0 0 1.58 1.18 1.09 1.09 0 0 1 .51 1.21l-.13.5a1.1 1.1 0 0 0 .8 1.33l1.22.3a1.09 1.09 0 0 0 1.33-.8l.13-.5a1.1 1.1 0 0 1 1-.83 9.1 9.1 0 0 0 2-.3 1.12 1.12 0 0 1 1.23.5l.26.45a1.1 1.1 0 0 0 1.51.37l1.08-.64a1.09 1.09 0 0 0 .37-1.51l-.29-.49a1.1 1.1 0 0 1 .12-1.3 8.74 8.74 0 0 0 1.13-1.56 1.1 1.1 0 0 1 1.22-.51l.58.14a1.1 1.1 0 0 0 1.33-.8l.3-1.22a1.09 1.09 0 0 0-.8-1.33l-.64-.16a1.11 1.11 0 0 1-.84-1 8.82 8.82 0 0 0-.29-1.84 1.1 1.1 0 0 1 .5-1.22l.59-.35a1.11 1.11 0 0 0 .38-1.51l-.65-1.08a1.11 1.11 0 0 0-1.51-.38m-5.13 11.31a5.32 5.32 0 1 1 1.82-7.31 5.31 5.31 0 0 1-1.82 7.31"
                            transform="translate(-12.25 -9.09)"
                        />
                        <path
                            id="Path_305-2"
                            data-name="Path 305"
                            className="cls-11"
                            d="M72.05 318.81h-.4a.6.6 0 0 1-.57-.42 5.15 5.15 0 0 0-.38-.91.58.58 0 0 1 .1-.7l.28-.29a.6.6 0 0 0 0-.84l-.48-.48a.58.58 0 0 0-.84 0l-.29.28a.58.58 0 0 1-.7.1 5.15 5.15 0 0 0-.91-.38.6.6 0 0 1-.42-.57v-.4a.6.6 0 0 0-.6-.6h-.68a.6.6 0 0 0-.6.6v.37a.61.61 0 0 1-.43.58 4.71 4.71 0 0 0-.94.37.59.59 0 0 1-.7-.1l-.25-.26a.6.6 0 0 0-.84 0l-.49.48a.61.61 0 0 0 0 .85l.23.22a.6.6 0 0 1 .1.72 4.7 4.7 0 0 0-.41.95.6.6 0 0 1-.57.42H61a.6.6 0 0 0-.6.6v.68a.6.6 0 0 0 .6.6h.29a.6.6 0 0 1 .57.43 4.77 4.77 0 0 0 .4 1 .61.61 0 0 1-.1.7l-.2.2a.61.61 0 0 0 0 .85l.48.48a.6.6 0 0 0 .84 0l.2-.2a.58.58 0 0 1 .7-.1 5.26 5.26 0 0 0 1 .4.59.59 0 0 1 .43.57v.28a.6.6 0 0 0 .6.6h.68a.6.6 0 0 0 .6-.6V325a.6.6 0 0 1 .42-.58 4.09 4.09 0 0 0 1-.41.62.62 0 0 1 .71.1l.23.23a.6.6 0 0 0 .84 0l.49-.48a.6.6 0 0 0 0-.84l-.26-.26a.61.61 0 0 1-.11-.7 4.43 4.43 0 0 0 .38-.93.6.6 0 0 1 .57-.43H72a.6.6 0 0 0 .6-.6v-.68a.62.62 0 0 0-.6-.6m-5.54 3.83a2.89 2.89 0 1 1 2.89-2.89 2.89 2.89 0 0 1-2.89 2.89"
                            transform="translate(-12.25 -9.09)"
                        />
                    </g>
                    <g
                        id="inaction_icon_kcirkel_2"
                        data-name="inaction icon kcirkel 2"
                        className="pointer-events-none"
                    >
                        <path
                            id="Path_306-2"
                            data-name="Path 306"
                            className="cls-11"
                            d="m47.18 390.36 4.51-3.72 6.31-1.43 3 1.43 3.21 3.72 1 4.57-3.11 8.42v5l-10.4 2-4.51-3.86-2.75-5.19Z"
                            transform="translate(-12.25 -9.09)"
                        />
                        <path
                            id="Path_307-2"
                            data-name="Path 307"
                            className="cls-12"
                            d="M55.9 385a9.73 9.73 0 0 0-9.71 9.72v1.43l-2.34 4.68a.81.81 0 0 0 .36 1.09.94.94 0 0 0 .36.08h1.62v3.9a1.63 1.63 0 0 0 1.62 1.63 1.15 1.15 0 0 0 .26 0l3-.5v3.1a.81.81 0 0 0 .81.81H52l9.71-1.62a.81.81 0 0 0 .68-.8v-5a4.14 4.14 0 0 1 1-2.59A9.71 9.71 0 0 0 55.9 385Z"
                            transform="translate(-12.25 -9.09)"
                        />
                        <path
                            id="Path_308-2"
                            data-name="Path 308"
                            className="cls-13"
                            d="M61.67 392h-.29a.44.44 0 0 1-.42-.3 3.81 3.81 0 0 0-.27-.66.44.44 0 0 1 .07-.52l.21-.2a.43.43 0 0 0 0-.61l-.35-.35a.43.43 0 0 0-.61 0l-.21.2a.42.42 0 0 1-.51.08 3.19 3.19 0 0 0-.66-.28.43.43 0 0 1-.3-.41v-.29a.44.44 0 0 0-.43-.44h-.5a.44.44 0 0 0-.44.44v.27a.42.42 0 0 1-.31.41 3.61 3.61 0 0 0-.68.28.44.44 0 0 1-.5-.08l-.19-.19a.43.43 0 0 0-.61 0l-.35.35a.43.43 0 0 0 0 .61l.17.17a.45.45 0 0 1 .07.52 2.9 2.9 0 0 0-.3.7.44.44 0 0 1-.42.3h-.22a.43.43 0 0 0-.43.43v.5a.43.43 0 0 0 .43.43h.2a.45.45 0 0 1 .42.31 3.74 3.74 0 0 0 .29.72.42.42 0 0 1-.08.51l-.14.15a.43.43 0 0 0 0 .61l.35.35a.43.43 0 0 0 .61 0l.15-.15a.44.44 0 0 1 .51-.07 3.5 3.5 0 0 0 .72.29.44.44 0 0 1 .31.42v.2a.43.43 0 0 0 .43.43h.49a.44.44 0 0 0 .44-.43v-.22a.43.43 0 0 1 .3-.42 3.6 3.6 0 0 0 .7-.3.45.45 0 0 1 .52.07l.16.17a.44.44 0 0 0 .62 0l.34-.35a.43.43 0 0 0 0-.61l-.18-.19a.43.43 0 0 1-.08-.5 3.61 3.61 0 0 0 .28-.68.43.43 0 0 1 .41-.32h.27a.44.44 0 0 0 .44-.43v-.49a.44.44 0 0 0-.44-.43m-4 2.77a2.1 2.1 0 1 1 2.1-2.1 2.1 2.1 0 0 1-2.1 2.1"
                            transform="translate(-12.25 -9.09)"
                        />
                    </g>
                    <g
                        id="exercises_icon_kcirkel_2"
                        data-name="exercises icon kcirkel 2"
                        className="pointer-events-none"
                    >
                        <path
                            id="Path_310-2"
                            data-name="Path 310"
                            className="cls-11"
                            d="M108.45 418.92h15a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3v-14a3 3 0 0 1 3-3"
                            transform="translate(-12.25 -9.09)"
                        />
                        <path
                            id="Path_311-2"
                            data-name="Path 311"
                            className="cls-11"
                            d="M125.74 430.66a.53.53 0 0 0-.53.53V436a1.61 1.61 0 0 1-1.61 1.61h-15.07a1.61 1.61 0 0 1-1.61-1.61v-14a1.61 1.61 0 0 1 1.61-1.61h4.77a.54.54 0 1 0 0-1.07h-4.77a2.69 2.69 0 0 0-2.69 2.69v14a2.7 2.7 0 0 0 2.69 2.68h15.07a2.68 2.68 0 0 0 2.68-2.68v-4.78a.52.52 0 0 0-.53-.53Z"
                            transform="translate(-12.25 -9.09)"
                        />
                        <path
                            id="Path_312-2"
                            data-name="Path 312"
                            className="cls-14"
                            d="M125.74 430.66a.53.53 0 0 0-.53.53V436a1.61 1.61 0 0 1-1.61 1.61h-15.07a1.61 1.61 0 0 1-1.61-1.61v-14a1.61 1.61 0 0 1 1.61-1.61h4.77a.54.54 0 1 0 0-1.07h-4.77a2.69 2.69 0 0 0-2.69 2.69v14a2.7 2.7 0 0 0 2.69 2.68h15.07a2.68 2.68 0 0 0 2.68-2.68v-4.78a.52.52 0 0 0-.53-.53Z"
                            transform="translate(-12.25 -9.09)"
                        />
                        <path
                            id="Path_313-2"
                            data-name="Path 313"
                            className="cls-15"
                            d="M120.68 424a1.73 1.73 0 0 0-2.41 0l-6.77 6.6a.44.44 0 0 0-.1.16l-.89 3.13a.39.39 0 0 0 .1.36.37.37 0 0 0 .37.1l3.21-.86a.4.4 0 0 0 .17-.1l6.77-6.6a1.64 1.64 0 0 0 0-2.32Zm-8.35 6.84 5.54-5.4 1.78 1.74-5.53 5.4Zm-.36.7 1.43 1.46-2 .53Zm8.62-5.28-.4.4-1.78-1.66.4-.39a1 1 0 0 1 1.34 0l.44.43a.91.91 0 0 1 0 1.29Z"
                            transform="translate(-12.25 -9.09)"
                        />
                        <path
                            id="Path_314-2"
                            data-name="Path 314"
                            className="cls-15"
                            d="m117.7 425.06 2.13-1.07 1.44 1.77-1.44 1.24-.25.47-1.88 2.13-4.48 3.86.67-.52-2.14-1.53Z"
                            transform="translate(-12.25 -9.09)"
                        />
                    </g>
                    <g
                        id="zwarte_pijl_kcirkel_2"
                        data-name="zwarte pijl kcirkel 2"
                        className="pointer-events-none"
                    >
                        <path
                            id="Path_316-2"
                            data-name="Path 316"
                            className="cls-16"
                            d="m76.25 342.57 9.64 3.72-8.07 6.57Z"
                            transform="translate(-12.25 -9.09)"
                        />
                        <path
                            id="Path_317-2"
                            data-name="Path 317"
                            className="cls-16"
                            d="m78.18 351.93 6.73-5.48-8-3.11Zm-.73 1.87-1.82-12 11.23 4.34Z"
                            transform="translate(-12.25 -9.09)"
                        />
                        <path
                            className="cls-17"
                            d="M134 395.88a38.5 38.5 0 1 1 .59-67"
                            transform="translate(-12.25 -9.09)"
                        />
                    </g>
                </g>
            )}

            <Link href={`/${config.path[0]}/${config.path[1]}/subchapter_3`}>
                <a className="cursor-pointer">
                    <circle
                        id="cirkel"
                        className="cls-2"
                        cx={103}
                        cy={510.21}
                        r={38.5}
                        id="witte_cirkel_kcirkel_3"
                        data-name="witte cirkel kcirkel 3"
                    />
                    <text x="90" y="520" className={styles.kleurenCirkelText}>
                        {config.chapter}.3
                    </text>
                </a>
            </Link>

            {config.index == 3 && (
                <g>
                    <Link
                        href={`/${config.path[0]}/${config.path[1]}/subchapter_3/exercise`}
                    >
                        <a className="cursor-pointer">
                            <g>
                                <path
                                    className="cls-3"
                                    d="M115.25 557.8a38.36 38.36 0 0 1-19.18-5.12l-28 48.51a94.59 94.59 0 0 0 94.34 0l-28-48.51a38.3 38.3 0 0 1-19.16 5.12Z"
                                    transform="translate(-12.25 -9.09)"
                                    id="oranje_binnenlaag_kcirkel_3"
                                    data-name="oranje binnenlaag kcirkel 3"
                                />
                                <path
                                    className="cls-5"
                                    d="M115.25 613.8a94.06 94.06 0 0 1-47.19-12.61l-4.25 7.36a103.14 103.14 0 0 0 102.85 0l-4.26-7.37a94 94 0 0 1-47.15 12.62Z"
                                    transform="translate(-12.25 -9.09)"
                                    id="oranje_buitenlaag_kcirkel_3"
                                    data-name="oranje buitenlaag kcirkel 3"
                                />
                            </g>
                        </a>
                    </Link>

                    <Link
                        href={`/${config.path[0]}/${config.path[1]}/subchapter_3/action`}
                    >
                        <a className="cursor-pointer">
                            <g>
                                <path
                                    className="cls-4"
                                    d="M76.76 519.5h-56a94.49 94.49 0 0 0 47.31 81.69l28-48.51a38.47 38.47 0 0 1-19.31-33.18Z"
                                    transform="translate(-12.25 -9.09)"
                                    id="geel_binnenlaag_kcirkel_3"
                                    data-name="geel binnenlaag kcirkel 3"
                                />
                                <path
                                    className="cls-9"
                                    d="M20.75 519.5h-8.5a103 103 0 0 0 51.56 89l4.25-7.36a94.49 94.49 0 0 1-47.31-81.64Z"
                                    transform="translate(-12.25 -9.09)"
                                    id="gele_buitenlaag_kcirkel_3"
                                    data-name="gele buitenlaag kcirkel 3"
                                />
                            </g>
                        </a>
                    </Link>

                    <Link
                        href={`/${config.path[0]}/${config.path[1]}/subchapter_3/theory`}
                    >
                        <a className="cursor-pointer">
                            <g>
                                <path
                                    className="cls-6"
                                    d="m63.64 430.15 4.25 7.36a94.58 94.58 0 0 1 94.68 0l4.26-7.36a103.09 103.09 0 0 0-103.19 0Z"
                                    transform="translate(-12.25 -9.09)"
                                    id="blauw_buitenlaag_kcirkel_3"
                                    data-name="blauw buitenlaag kcirkel 3"
                                />
                                <path
                                    className="cls-7"
                                    d="M115.25 480.8a38.35 38.35 0 0 1 19.32 5.2l28-48.51a94.58 94.58 0 0 0-94.68 0L95.9 486a38.34 38.34 0 0 1 19.35-5.2Z"
                                    transform="translate(-12.25 -9.09)"
                                    id="blauw_binnenlaag_kcirkel_3"
                                    data-name="blauw binnenlaag kcirkel 3"
                                />
                            </g>
                        </a>
                    </Link>

                    <Link
                        href={`/${config.path[0]}/${config.path[1]}/subchapter_3/practice`}
                    >
                        <a className="cursor-pointer">
                            <g>
                                <path
                                    className="cls-8"
                                    d="M20.75 519.3v.2h56v-.2A38.49 38.49 0 0 1 95.9 486l-28-48.51a94.48 94.48 0 0 0-47.15 81.81Z"
                                    transform="translate(-12.25 -9.09)"
                                    id="groen_binnenlaag_kcirkel_3"
                                    data-name="groen binnenlaag kcirkel 3"
                                />

                                <path
                                    className="cls-10"
                                    d="M20.75 519.3a94.48 94.48 0 0 1 47.14-81.79l-4.25-7.36a103 103 0 0 0-51.39 89.15v.2h8.5Z"
                                    transform="translate(-12.25 -9.09)"
                                    id="groen_buitenlaag_kcirkel_3"
                                    data-name="groen buitenlaag kcirkel 3"
                                />
                            </g>
                        </a>
                    </Link>
                    <g
                        id="topic_icon_kcirkel_3"
                        data-name="topic icon kcirkel 3"
                        className="pointer-events-none"
                    >
                        <path
                            id="Path_309-3"
                            data-name="Path 309"
                            className="cls-11"
                            d="M119.57 461.38v1a1.59 1.59 0 0 1-1.35 1.57l-.24.91a1.13 1.13 0 0 1-1.09.83h-2.45a1.13 1.13 0 0 1-1.09-.83l-.24-.91a1.59 1.59 0 0 1-1.35-1.58v-1a1 1 0 0 1 1-1h5.88a1 1 0 0 1 1 1m4.52-13.47a8.36 8.36 0 0 1-2.36 5.85 7.71 7.71 0 0 0-2.07 4.2 1.39 1.39 0 0 1-1.38 1.17h-5.23a1.37 1.37 0 0 1-1.37-1.17 7.8 7.8 0 0 0-2.09-4.21 8.43 8.43 0 1 1 14.5-5.85Zm-7.47-5.1a1 1 0 0 0-1-.95 6.08 6.08 0 0 0-6.08 6.07 1 1 0 0 0 1 .91 1 1 0 0 0 .91-.91 4.18 4.18 0 0 1 4.18-4.18 1 1 0 0 0 1-.94Z"
                            transform="translate(-12.25 -9.09)"
                        />
                    </g>
                    <g
                        id="inpractice_icon_kcirkel_3"
                        data-name="inpractice icon kcirkel 3"
                        className="pointer-events-none"
                    >
                        <path
                            id="Path_304-3"
                            data-name="Path 304"
                            className="cls-11"
                            d="m63 483.6-.62.38a1.1 1.1 0 0 1-1.3-.12 8.69 8.69 0 0 0-1.47-1.08 1.1 1.1 0 0 1-.5-1.21l.18-.72a1.12 1.12 0 0 0-.8-1.34l-1.22-.3a1.12 1.12 0 0 0-1.34.8l-.18.73a1.09 1.09 0 0 1-1 .83 8.41 8.41 0 0 0-1.8.26 1.1 1.1 0 0 1-1.2-.5l-.38-.63a1.09 1.09 0 0 0-1.51-.37l-1.08.64a1.1 1.1 0 0 0-.37 1.51l.35.59a1.1 1.1 0 0 1-.13 1.31 9.13 9.13 0 0 0-1.13 1.49 1.09 1.09 0 0 1-1.2.49l-.64-.16a1.1 1.1 0 0 0-1.34.8l-.3 1.22a1.1 1.1 0 0 0 .8 1.33l.58.14a1.11 1.11 0 0 1 .83 1 9.35 9.35 0 0 0 .26 1.9 1.1 1.1 0 0 1-.5 1.21l-.48.29a1.1 1.1 0 0 0-.38 1.51l.64 1.08a1.09 1.09 0 0 0 1.51.37l.45-.27A1.1 1.1 0 0 1 49 497a9.16 9.16 0 0 0 1.58 1.18 1.1 1.1 0 0 1 .51 1.21l-.13.5a1.1 1.1 0 0 0 .8 1.33l1.22.3a1.09 1.09 0 0 0 1.33-.8l.13-.5a1.1 1.1 0 0 1 1-.83 9.1 9.1 0 0 0 2-.3 1.12 1.12 0 0 1 1.23.5l.26.45a1.1 1.1 0 0 0 1.51.37l1.08-.64a1.09 1.09 0 0 0 .37-1.51l-.29-.49a1.1 1.1 0 0 1 .12-1.3 8.74 8.74 0 0 0 1.13-1.56 1.1 1.1 0 0 1 1.22-.51l.58.14a1.1 1.1 0 0 0 1.33-.8l.3-1.22a1.09 1.09 0 0 0-.8-1.33l-.64-.16a1.11 1.11 0 0 1-.84-1 8.82 8.82 0 0 0-.29-1.84 1.1 1.1 0 0 1 .5-1.22l.59-.35a1.11 1.11 0 0 0 .38-1.51l-.7-1.11a1.11 1.11 0 0 0-1.48-.4m-5.13 11.31a5.32 5.32 0 1 1 1.82-7.31 5.32 5.32 0 0 1-1.82 7.31"
                            transform="translate(-12.25 -9.09)"
                        />
                        <path
                            id="Path_305-3"
                            data-name="Path 305"
                            className="cls-11"
                            d="M72.05 475.88h-.4a.6.6 0 0 1-.57-.42 5.15 5.15 0 0 0-.38-.91.58.58 0 0 1 .1-.7l.28-.29a.6.6 0 0 0 0-.84l-.48-.48a.6.6 0 0 0-.84 0l-.29.28a.58.58 0 0 1-.7.1 5.15 5.15 0 0 0-.91-.38.6.6 0 0 1-.42-.57v-.4a.6.6 0 0 0-.6-.6h-.68a.6.6 0 0 0-.6.6v.37a.61.61 0 0 1-.43.58 4.71 4.71 0 0 0-.94.37.59.59 0 0 1-.7-.1l-.25-.26a.6.6 0 0 0-.84 0l-.49.48a.61.61 0 0 0 0 .85l.23.22a.6.6 0 0 1 .1.72 4.7 4.7 0 0 0-.41.95.6.6 0 0 1-.57.42H61a.6.6 0 0 0-.6.6v.68a.6.6 0 0 0 .6.6h.29a.6.6 0 0 1 .57.43 4.77 4.77 0 0 0 .4 1 .61.61 0 0 1-.1.7l-.2.2a.61.61 0 0 0 0 .85l.48.48a.6.6 0 0 0 .84 0l.2-.2a.58.58 0 0 1 .7-.1 5.26 5.26 0 0 0 1 .4.59.59 0 0 1 .43.57v.28a.6.6 0 0 0 .6.6h.68a.6.6 0 0 0 .6-.6v-.3a.6.6 0 0 1 .42-.58 4.09 4.09 0 0 0 1-.41.62.62 0 0 1 .71.1l.23.23a.6.6 0 0 0 .84 0l.49-.48a.6.6 0 0 0 0-.84l-.26-.26a.6.6 0 0 1-.11-.7 4.43 4.43 0 0 0 .38-.93.6.6 0 0 1 .57-.43H72a.6.6 0 0 0 .6-.6v-.68a.62.62 0 0 0-.6-.6m-5.5 3.82a2.89 2.89 0 1 1 2.89-2.89 2.89 2.89 0 0 1-2.89 2.89"
                            transform="translate(-12.25 -9.09)"
                        />
                    </g>
                    <g
                        id="exercises_icon_kcirkel_3"
                        data-name="exercises icon kcirkel 3"
                        className="pointer-events-none"
                    >
                        <path
                            id="Path_310-3"
                            data-name="Path 310"
                            className="cls-11"
                            d="M108.45 576h15a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3v-14a3 3 0 0 1 3-3"
                            transform="translate(-12.25 -9.09)"
                        />
                        <path
                            id="Path_311-3"
                            data-name="Path 311"
                            className="cls-11"
                            d="M125.74 587.73a.53.53 0 0 0-.53.53V593a1.61 1.61 0 0 1-1.61 1.61h-15.07a1.61 1.61 0 0 1-1.61-1.61v-14a1.61 1.61 0 0 1 1.61-1.61h4.77a.54.54 0 1 0 0-1.07h-4.77a2.69 2.69 0 0 0-2.69 2.69v14a2.7 2.7 0 0 0 2.69 2.68h15.07a2.68 2.68 0 0 0 2.68-2.68v-4.78a.52.52 0 0 0-.53-.53Z"
                            transform="translate(-12.25 -9.09)"
                        />
                        <path
                            id="Path_312-3"
                            data-name="Path 312"
                            className="cls-14"
                            d="M125.74 587.73a.53.53 0 0 0-.53.53V593a1.61 1.61 0 0 1-1.61 1.61h-15.07a1.61 1.61 0 0 1-1.61-1.61v-14a1.61 1.61 0 0 1 1.61-1.61h4.77a.54.54 0 1 0 0-1.07h-4.77a2.69 2.69 0 0 0-2.69 2.69v14a2.7 2.7 0 0 0 2.69 2.68h15.07a2.68 2.68 0 0 0 2.68-2.68v-4.78a.52.52 0 0 0-.53-.53Z"
                            transform="translate(-12.25 -9.09)"
                        />
                        <path
                            id="Path_313-3"
                            data-name="Path 313"
                            className="cls-15"
                            d="M120.68 581.1a1.73 1.73 0 0 0-2.41 0l-6.77 6.6a.44.44 0 0 0-.1.16l-.89 3.13a.39.39 0 0 0 .1.36.37.37 0 0 0 .37.1l3.21-.86a.4.4 0 0 0 .17-.1l6.77-6.6a1.64 1.64 0 0 0 0-2.32Zm-8.35 6.84 5.54-5.4 1.78 1.74-5.53 5.4Zm-.36.7 1.43 1.36-2 .53Zm8.62-5.27-.4.39-1.78-1.76.4-.39a1 1 0 0 1 1.34 0l.44.43a.91.91 0 0 1 0 1.29Z"
                            transform="translate(-12.25 -9.09)"
                        />
                        <path
                            id="Path_314-3"
                            data-name="Path 314"
                            className="cls-15"
                            d="m117.7 582.14 2.13-1.08 1.44 1.78-1.44 1.2-.25.47-1.88 2.13-4.48 3.86.67-.51-2.14-1.54Z"
                            transform="translate(-12.25 -9.09)"
                        />
                    </g>
                    <g
                        id="inaction_icon_kcirkel_3"
                        data-name="inaction icon kcirkel 3"
                        className="pointer-events-none"
                    >
                        <path
                            id="Path_307-3"
                            data-name="Path 307"
                            className="cls-12"
                            d="M55.9 542a9.73 9.73 0 0 0-9.71 9.72v1.43l-2.34 4.68a.81.81 0 0 0 .36 1.09.94.94 0 0 0 .36.08h1.62v3.9a1.63 1.63 0 0 0 1.62 1.63 1.15 1.15 0 0 0 .26 0l3-.5v3.1a.81.81 0 0 0 .81.81H52l9.71-1.62a.81.81 0 0 0 .68-.8v-5a4.14 4.14 0 0 1 1-2.59A9.71 9.71 0 0 0 55.9 542Z"
                            transform="translate(-12.25 -9.09)"
                        />
                        <g id="Laag_39" data-name="Laag 39">
                            <path
                                id="Path_306-3"
                                data-name="Path 306"
                                className="cls-11"
                                d="m47.18 547.43 4.51-3.72 6.31-1.43 3 1.43 3.21 3.72 1 4.57-3.11 8.42v5l-10.4 2-4.51-3.86-2.75-5.19Z"
                                transform="translate(-12.25 -9.09)"
                            />
                        </g>
                        <path
                            id="Path_308-3"
                            data-name="Path 308"
                            className="cls-13"
                            d="M61.67 549.08h-.29a.44.44 0 0 1-.42-.3 3.81 3.81 0 0 0-.27-.66.44.44 0 0 1 .07-.52l.21-.2a.43.43 0 0 0 0-.61l-.35-.35a.43.43 0 0 0-.61 0l-.21.2a.42.42 0 0 1-.51.08 3.19 3.19 0 0 0-.66-.28.43.43 0 0 1-.3-.41v-.29a.44.44 0 0 0-.43-.44h-.5a.44.44 0 0 0-.44.44v.26a.42.42 0 0 1-.31.41 3.61 3.61 0 0 0-.68.28.44.44 0 0 1-.5-.08l-.19-.19a.45.45 0 0 0-.61 0l-.35.35a.43.43 0 0 0 0 .61l.17.17a.45.45 0 0 1 .07.52 2.9 2.9 0 0 0-.3.7.44.44 0 0 1-.42.3h-.22a.43.43 0 0 0-.43.43v.5a.43.43 0 0 0 .43.43h.2a.45.45 0 0 1 .42.31 3.74 3.74 0 0 0 .29.72.42.42 0 0 1-.08.51l-.14.15a.43.43 0 0 0 0 .61l.35.35a.43.43 0 0 0 .61 0l.15-.15a.44.44 0 0 1 .51-.07 3.5 3.5 0 0 0 .72.29.45.45 0 0 1 .31.42v.2a.43.43 0 0 0 .43.43h.49a.44.44 0 0 0 .44-.43v-.22a.44.44 0 0 1 .3-.42 3.08 3.08 0 0 0 .7-.3.45.45 0 0 1 .52.07l.16.17a.44.44 0 0 0 .62 0l.34-.35a.43.43 0 0 0 0-.61l-.18-.19a.43.43 0 0 1-.08-.5 3.61 3.61 0 0 0 .28-.68.43.43 0 0 1 .41-.32h.27a.44.44 0 0 0 .44-.43v-.49a.44.44 0 0 0-.44-.43m-4 2.77a2.1 2.1 0 1 1 2.1-2.1 2.1 2.1 0 0 1-2.1 2.1"
                            transform="translate(-12.25 -9.09)"
                        />
                    </g>
                    <g
                        id="zwarte_pijl_kcirkel_3"
                        data-name="zwarte pijl kcirkel 3"
                        className="pointer-events-none"
                    >
                        <path
                            id="Path_316-3"
                            data-name="Path 316"
                            className="cls-16"
                            d="m76.25 499.64 9.64 3.72-8.07 6.57Z"
                            transform="translate(-12.25 -9.09)"
                        />
                        <path
                            id="Path_317-3"
                            data-name="Path 317"
                            className="cls-16"
                            d="m78.18 509 6.73-5.48-8-3.11Zm-.73 1.87-1.82-12 11.23 4.34Z"
                            transform="translate(-12.25 -9.09)"
                        />
                        <path
                            className="cls-17"
                            d="M134 553a38.5 38.5 0 1 1 .59-67"
                            transform="translate(-12.25 -9.09)"
                        />
                    </g>
                </g>
            )}
        </svg>
    );
};
export default SvgComponent;
