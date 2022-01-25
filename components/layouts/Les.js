import Link from "next/link";
const Les = ({ children, sideBarTitle, type }) => {
    const color = {
        bgColor: {
            blue: "bg-blue",
            green: "bg-green",
            yellow: "bg-yellow",
            orange: "bg-orange",
            purple: "bg-purple",
            mixed: "bg-mixed",
        }[type],
        bgColorLight: {
            blue: "bg-blue-light",
            green: "bg-green-light",
            yellow: "bg-yellow-light",
            orange: "bg-orange-light",
            purple: "bg-purple-light",
            mixed: "bg-mixed-l",
        }[type],
    };

    return (
        <div
            className="grid absolute top-0 left-0 w-full h-full"
            style={{
                gridTemplateColumns: "60px auto",
                gridTemplateRows: "60px auto",
            }}
        >
            <div
                className={`${color.bgColor} col-span-1 row-start-1 row-end-3 flex items-center justify-between flex-col fixed left-0 top-0 h-full w-[60px] z-10`}
            >
                <header className="mt-3">
                    <Link href="/home">
                        <button>
                            {/* <MenuCircle className="hover:scale-100 scale-90 transition-transform" /> */}
                            <img
                                className="sideBarItem"
                                src="/icons/menu-button.svg"
                                alt="menu-button"
                            />
                            <span className="text-white text-sm">Menu</span>
                        </button>
                    </Link>
                </header>
                <h2 className="-rotate-90 whitespace-nowrap text-2xl text-white">
                    {sideBarTitle}
                </h2>
                <span></span>
            </div>

            <div
                className={`${color.bgColorLight} col-start-2 col-end-3 row-span-1 flex flex-row justify-end items-center fixed left-0 top-0 w-full h-[60px] z-0`}
            >
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

            <div className="col-start-2 col-end-3 row-start-2 row-end-3 w-full h-full p-5 bg-gray-300 bg-opacity-75">
                {children}
            </div>
        </div>
    );
};

export default Les;
