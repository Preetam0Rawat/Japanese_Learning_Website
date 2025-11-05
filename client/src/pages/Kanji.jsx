import { useEffect, useState } from "react";
import { getAllKanjis } from "../api/index.jsx";
import AllKanjis from "../components/AllKanjis.jsx";
const Kanji = () => {

    const [kanjis, setKanjis] = useState([])

    useEffect(() => {
        const getKanjis = async () => {
            try {
                const response = await getAllKanjis()
                console.log("reached here")
                const first10 = response.data.slice(0, 36)
                console.log(first10)
                setKanjis(first10)
            } catch (error) {
                console.log(error)
            }
        }
        getKanjis()
    }, [])

    return (
        <div className='bg-cover bg-center bg-no-repeat w-full h-screen ' style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.3), rgba(0,0,0,0.3)),url('/src/images/tableBG.png')" }}>
            <div className='w-full h-screen bg-contain bg-center bg-no-repeat' style={{ backgroundImage: "url('/src/images/inkstone.png')" }}>
                <div className='bg-black absolute ml-54 mt-20 flex flex-wrap '>
                    
                    
                    <div className='bg-amber-950 w-180 h-200 overflow-y-scroll flex flex-col'>
                        <h1 className=' text-white text-7xl text-center'>kanji List</h1>
                        {/* <div className='bg-amber-400 flex flex-wrap justify-around gap-5 mt-10 ml-5 mr-5'> */}
                            <div>
                            {kanjis.map((kanji) => (
                                // <div className="flex items-center justify-center text-4xl border-2 border-white w-20 h-20 text-white right-50% top-50% bg-emerald-200">
                                    <AllKanjis data={kanji} />
                                // {/* </div> */}
                            ))
                            }
                        </div>
                    </div>


                    <div className='w-190 h-200 ml-18 overflow-y-scroll'>
                        <h1 className='text-7xl text-center'>kanji Detail</h1>
                    </div>
                </div>
            </div>
        </div>
        // <>
        //     <div className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-none"
        //         style={{
        //             backgroundImage:
        //                 "linear-gradient(to right, rgba(255,255,255,0.3), rgba(0,0,0,0.3)), url('/src/images/table.png')",
        //         }}>

        //     </div>

        //     <div className=' w-full h-screen bg-contain bg-center bg-no-repeat absolute' style={{ backgroundImage: "url('/src/images/kanji3.png')" }}>
        //         <div className='absolute ml-54 mt-20 flex flex-wrap '>
        //             <div className='w-180 h-200 overflow-y-scroll'>
        //                 <h1 className='text-7xl text-center text-white'>kanji List</h1>
        //             </div>
        //             <div className='w-190 h-200 ml-18 overflow-y-scroll'>
        //                 <h1 className='text-7xl text-center'>kanji Detail</h1>
        //             </div>
        //         </div>
        //     </div>
        // </> 
    )

}

export default Kanji;