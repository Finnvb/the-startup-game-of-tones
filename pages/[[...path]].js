import { getSanityContent } from "./api/sanity";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import DefaultLayout from "../components/content/layouts/DefaultLayout";
import { useSession, signIn, signOut } from "next-auth/react";
import axios from "axios";
import Link from "next/link";
import Les from "../components/layouts/Les";
import ColoredText from "../components/content/ColoredText";

const components = { DefaultLayout, ColoredText };

const Page = ({ props }) => {
    const { data: session, status } = useSession();
    const { title, color, content, config } = props;

    if (!session) {
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
    return (
        <Les sideBarTitle={title} type={color}>
            <MDXRemote {...content} components={components} config={config} />
        </Les>
    );
};

export async function getStaticProps({ params }) {
    let props;
    let data;
    let vol_idx;
    let chap_idx;
    let sub_idx;
    let les_type;
    let content;
    let serialized;


    if (params.path.some((path) => path.includes("volume"))) {
        // its a volume or inside a volume

        switch (params.path.length) {
            case 1: // its a volume index
                data = await getSanityContent({
                    query: `
                    query {
                        allVolume {
                          intro{title color content}
                        }
                      }`,
                });
   
                vol_idx = params.path[0].replace("volume_", "") - 1;
      
                content = data.allVolume[vol_idx].intro;
                serialized = await serialize(content.content);
                props = {
                    title: content.title,
                    color: content.color,
                    content: serialized,
                }; // get content of intro of volume
                break;
            case 2: // its a chapter index
                data = await getSanityContent({
                    query: `
                    query {
                        allVolume {
                          chapters{intro{title color content}}
                        }
                      }`,
                });
    
                vol_idx = params.path[0].replace("volume_", "") - 1;
                chap_idx = params.path[1].replace("chapter_", "") - 1;
   

                content = data.allVolume[vol_idx].chapters[chap_idx].intro;
                serialized = await serialize(content.content);
                props = {
                    title: content.title,
                    color: content.color,
                    content: serialized,
                }; // get content of intro of volume
                break;
            case 3: // its theory of subchapter
                data = await getSanityContent({
                    query: `
                    query {
                        allVolume {
                          chapters{
                              subchapters{
                              theory{title color content}
                            }
                          }
                        }
                      }`,
                });
    
                vol_idx = params.path[0].replace("volume_", "") - 1;
                chap_idx = params.path[1].replace("chapter_", "") - 1;
                sub_idx = params.path[2].replace("subchapter_", "") - 1;
    

                content =
                    data.allVolume[vol_idx].chapters[chap_idx].subchapters[
                        sub_idx
                    ].theory;
                serialized = await serialize(content.content);
                props = {
                    title: content.title,
                    color: content.color,
                    content: serialized,
                }; // get content of intro of volume
                break;
            case 4: // its a lesson in subchapter
                data = await getSanityContent({
                    query: `
                    query {
                        allVolume {
                          chapters{
                              subchapters{
                              theory{title color content}
                              practice{title color content}
                              action{title color content}
                              exercise{title color content}
                            }
                          }
                        }
                      }`,
                });
  
                vol_idx = params.path[0].replace("volume_", "") - 1;
                chap_idx = params.path[1].replace("chapter_", "") - 1;
                sub_idx = params.path[2].replace("subchapter_", "") - 1;
                les_type = params.path[3];

                content =
                    data.allVolume[vol_idx].chapters[chap_idx].subchapters[
                        sub_idx
                    ][les_type];
                serialized = await serialize(content.content);
                props = {
                    title: content.title,
                    color: content.color,
                    content: serialized,
                    config: "yeye",
                }; // get content of intro of volume
                break;
        }
    }

    return {
        props: {
            props,
        },
    };
}

export async function getStaticPaths() {
    // CMS https://gotcms.sanity.studio/desk

    // get only all the different volumes
    const data = await getSanityContent({
        query: `
        query AllPages {
            allVolume {
                intro{title, color, content}
                chapters{
                    intro{title, color, content},
                    subchapters{
                        theory{title, color, content}
                        practice{title, color, content}
                        action{title, color, content}
                        exercise{title, color, content}
                    }
                }
            }
        }
    `,
    });

    const paths = [];



    data.allVolume.map((vol, i) => {
        let vol_path = `volume_${i + 1}`;
        paths.push({ params: { path: [vol_path] } });
        vol.chapters.map((chap, j) => {
            let chap_path = `chapter_${j + 1}`;
            paths.push({ params: { path: [vol_path, chap_path] } });

            chap.subchapters.map((sub, k) => {
                let sub_path = `subchapter_${k + 1}`;
                sub.theory != null &&
                    paths.push({
                        params: {
                            path: [vol_path, chap_path, sub_path, "theory"],
                        },
                    }) &&
                    paths.push({
                        params: { path: [vol_path, chap_path, sub_path] },
                    });
                sub.practice != null &&
                    paths.push({
                        params: {
                            path: [vol_path, chap_path, sub_path, "practice"],
                        },
                    });
                sub.action != null &&
                    paths.push({
                        params: {
                            path: [vol_path, chap_path, sub_path, "action"],
                        },
                    });
                sub.exercise != null &&
                    paths.push({
                        params: {
                            path: [vol_path, chap_path, sub_path, "exercise"],
                        },
                    });
            });
        });
    });



    return {
        paths: [...paths],
        fallback: false,
    };
}

export default Page;
