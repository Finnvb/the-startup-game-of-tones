import Dashboard from "../components/layouts/Dashboard";
import { getSanityContent } from "./api/sanity";
import Link from "next/link";

const DashboardPage = ({ volumes }) => {
    return (
        <Dashboard>
            <main className="lg:p-20">
                <ul>
                    {volumes.map((vol, i) => {
                        return (
                            <li key={i}>
                                <Link href={`volume_${i + 1}`}>
                                    <a className="flex flex-start border-solid border-2 border-neutral-400 rounded p-5 transition-all hover:bg-neutral-400">
                                        <h2>Volume {i + 1}</h2>
                                    </a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </main>
        </Dashboard>
    );
};

export async function getStaticProps() {
    const data = await getSanityContent({
        query: `
        query {
            allVolume {
                _id
              }
          }`,
    });

    const volumes = data.allVolume;

    return {
        props: {
            volumes,
        },
    };
}

export default DashboardPage;
