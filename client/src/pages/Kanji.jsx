import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getKanjiByLevel, getKanjiDetails } from "../api/index.jsx";
import KanjiLayout from "../components/KanjiLayout.jsx";
import inkStone from '../images/inkStone.png'
import tableBG from '../images/tableBG.png'
import KanjiInfo from "../components/KanjiInfo.jsx";

const Kanji = () => {

    const [kanjis, setKanjis] = useState([])
    const [kanjiDetails, setKanjiDetails] = useState()
    const [totalPages, setTotalPages] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    const jlptLevel = parseInt(searchParams.get("level")) || 5
    const currentPage = parseInt(searchParams.get("page")) || 1

    const limit = 25;



    useEffect(() => {
        const fetchKanjis = async () => {
            try {
                const response = await getKanjiByLevel(jlptLevel, currentPage, limit);
                console.log("reached here")
                setKanjis(response.data.kanjis);
                setTotalPages(response.data.totalPages);
            } catch (error) {
                console.error("Error fetching kanjis:", error);
            }
        };

        fetchKanjis();
    }, [jlptLevel, currentPage]);

    // Update the url via click pf the level buttons
    const updateQuery = (level, page) => {
        setSearchParams({ level, page });
    };


    const handleKanjiClick = async (kanjiId) => {
        try {
            const response = await getKanjiDetails(kanjiId)
            console.log("reached in click kanji")
             console.log(response.data)
            setKanjiDetails(response.data)
        } catch (error) {
            alert("error loading kanji details")
        }
    }

    return (



        <div className='bg-cover bg-center bg-no-repeat w-full h-screen ' style={{ backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.3), rgba(0,0,0,0.3)),url(${tableBG})` }}>
            <div className=' w-full h-screen bg-contain bg-center bg-no-repeat relative' style={{ backgroundImage: `url(${inkStone})` }}>
                <div className='absolute ml-54 mt-20 flex flex-wrap '>

                    {/* Left side  */}
                    <div className='w-180 h-200 flex flex-col relative'>
                        <h1 className=' text-white text-5xl text-center'>KANJI LIST</h1>
                        <div className='flex flex-wrap justify-around gap-6 mt-10 ml-5 mr-5 h-160'>
                            {kanjis.map((kanji) => (
                                <KanjiLayout key={kanji._id} data={kanji} onClick={() => handleKanjiClick(kanji._id)} />
                            ))
                            }
                        </div>

                     
                    </div>

                    {/* right side */}
                    <div className="w-170  ml-30">
                        {kanjiDetails ? (
                            <div className="text-white text-5xl text-center">
                                <KanjiInfo info={kanjiDetails} />
                            </div>
                        ) : (
                            <p className="text-gray-400 text-center mt-10 text-2xl">
                                Click a kanji to see details
                            </p>
                        )}
                    </div>
                </div>

                <div className=" absolute right-4 flex flex-col justify-center gap-4 pt-10 h-screen">
                    {[5, 4, 3, 2, 1].map((level) => (
                        <button
                            key={level}
                            className={`w-20 h-20 text-xl font-semibold rounded-full border ${jlptLevel === level
                                ? "bg-amber-600 text-white"
                                : "bg-white text-black hover:bg-gray-200"
                                }`}
                            onClick={() => updateQuery(level, 1)}
                        >
                            N{level}
                        </button>
                    ))}
                </div>

                 {/* Pagination Controls */}
                        <div className=" absolute left-1/4 bottom-5   flex justify-center gap-3 mt-10">
                            <button
                                className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-40"
                                onClick={() => updateQuery(jlptLevel, currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                Prev
                            </button>

                            <span className="text-xl font-semibold text-white">
                                Page {currentPage} / {totalPages}
                            </span>

                            <button
                                className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-40"
                                onClick={() => updateQuery(jlptLevel, currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>

                        </div>

            </div>
        </div>

    )

}

export default Kanji;