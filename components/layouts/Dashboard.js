import Link from "next/link";
const Les = ({ children, className = "" }) => {
    const color = {
        bgColor: "bg-neutral-800",
        bgColorLight: "bg-neutral-400",
    };

    return (
        <div
            className={`grid absolute top-0 left-0 w-full h-full ${className}`}
            style={{
                gridTemplateRows: "60px auto",
            }}
        >
            <div
                className={`${color.bgColor} col-start-1 col-end-2 row-span-1 flex flex-row justify-between items-center fixed left-0 top-0 w-full h-[60px] z-0`}
            >
                <h1 className="pl-5 text-white font-bold uppercase">
                    Game of Tones
                </h1>
                <ul className="flex flex-row items-center mx-2">
                    <li className="rounded-full p-3 bg-white cursor-pointer">
                        <Link href="/recordings">
                            <img
                                src="/icons/music-note2.svg"
                                alt="music-note"
                                width="25"
                                height="25"
                            />
                        </Link>
                    </li>
                    <li
                        className="text-3xl mx-2 h-10 bg-white block"
                        style={{ width: "2px" }}
                    ></li>
                    <li className="rounded-full p-3 bg-white cursor-pointer">
                        <Link href="/profile">
                            <img
                                src="/icons/profile.svg"
                                alt="profile"
                                width="25"
                                height="25"
                            />
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="col-start-1 col-end-2 row-start-2 row-end-3 w-full h-full p-5 bg-gray-300 bg-opacity-75">
                {children}
            </div>
        </div>
    );
};

export default Les;
