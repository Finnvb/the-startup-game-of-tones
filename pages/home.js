// import { getSanityContent } from "./api/sanity";
import OnionCircle from "../components/OnionCircle";
import Dashboard from "../components/layouts/Dashboard";

const Home = () => {
    // console.log(paths);

    return (
        <Dashboard className="bg-neutral-400">
            <main className="w-full h-full flex items-center justify-center">
                <OnionCircle />
            </main>
        </Dashboard>
    );
};

// export async function getStaticProps() {
//     const data = await getSanityContent({
//         query: `
//             query AllPages {
//                 allVolume {
//                     intro{title, color, content}
//                     chapters{
//                         intro{title, color, content},
//                         subchapters{
//                         theory{title, color, content}
//                         practice{title, color, content}
//                         action{title, color, content}
//                         exercise{title, color, content}
//                         }
//                     }
//                 }
//             }
//         `,
//     });

//     const paths = [];

//     // paths.push(({ params: { path: "howdie" } }))
//     // console.log(data.allVolume)

//     data.allVolume.map((vol, i) => {
//         let vol_path = `volume_${i + 1}`;
//         paths.push({ params: { path: [vol_path] } });
//         vol.chapters.map((chap, j) => {
//             let chap_path = `chapter_${j + 1}`;
//             paths.push({ params: { path: [vol_path, chap_path] } });

//             chap.subchapters.map((sub, k) => {
//                 let sub_path = `subchapter_${k + 1}`;
//                 sub.theory != null &&
//                     paths.push({
//                         params: {
//                             path: [vol_path, chap_path, sub_path, "theory"],
//                         },
//                     }) &&
//                     paths.push({
//                         params: { path: [vol_path, chap_path, sub_path] },
//                     });
//                 sub.practice != null &&
//                     paths.push({
//                         params: {
//                             path: [vol_path, chap_path, sub_path, "practice"],
//                         },
//                     });
//                 sub.action != null &&
//                     paths.push({
//                         params: {
//                             path: [vol_path, chap_path, sub_path, "action"],
//                         },
//                     });
//                 sub.exercise != null &&
//                     paths.push({
//                         params: {
//                             path: [vol_path, chap_path, sub_path, "exercise"],
//                         },
//                     });
//             });
//         });
//     });
//     return {
//         props: {
//             paths,
//         },
//     };
// }

export default Home;
