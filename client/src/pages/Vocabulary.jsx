import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import React from 'react'
import tableBG from '../images/tableBG.png'
import vocabBG from '../images/vocab.png'
import { getVocabByLevel } from "../api";
import VocabLayout from "../components/VocabLayout";

const Vocabulary = () => {

  const [vocab, setVocab] = useState([])
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const jlptLevel = parseInt(searchParams.get("level")) || 5
  const currentPage = parseInt(searchParams.get("page")) || 1
  const limit = 6;



  useEffect(() => {
    const fetchVocab = async () => {
      try {
        const response = await getVocabByLevel(jlptLevel, currentPage, limit);
        console.log("reached here")
        console.log(response.data.vocab)
        setVocab(response.data.vocab);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching kanjis:", error);
      }
    };

    fetchVocab();
  }, [jlptLevel, currentPage]);

  const updateQuery = (level, page) => {
        setSearchParams({ level, page });
    };

  return (
    // <div className='w-full h-screen bg-cover bg-center' style = {{backgroundImage : `url(${tableBG})`}}>
    //   This is vocab
    // </div>
    <>
      <div className='absolute -z-2 w-full h-screen'>
        <img src={tableBG} alt="table BG" className='object-fill w-full h-screen' />
      </div>

      <div className=' relative w-full h-screen sm:bg-contain  bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${vocabBG})` }}>
        <div className='top-[5vh] left-[36vw] absolute'>
          <h1 className='w-full font-semibold text-5xl mb-5 ml-15'>Vocaublary JLPT-N{jlptLevel}</h1>
          <div className='flex flex-col gap-4'>
            {vocab.map((v) => (<VocabLayout key={v._id} data={v} />))}
          </div>
        </div>
      </div>

      {/* JLPT Levels buttons */}
      <div className="absolute  flex sm:left-30 sm:top-40  sm:flex-col  sm:justify-center top-1 sm:w-auto sm:gap-8 justify-evenly w-full  pt-6">
        {[5, 4, 3, 2, 1].map((level) => (
          <button
            key={level}
            className={`w-20 h-20 text-xl font-semibold rounded-[35px]  border-4 ${jlptLevel === level
              ? "bg-violet-600 text-white"
              : "bg-brown text-black hover:backdrop-brightness-50"
              }`}
            onClick={() => updateQuery(level, 1)}
          >
            N{level}
          </button>
        ))}
      </div>

      {/* Add Status */}
      <div className="absolute  top-1 right-1 bg-lime-600">
       
      </div>

      {/* Pagination */}
      <div className=" absolute left-1/3 bottom-15 sm:left-1/2 sm:-translate-x-1/2 flex justify-center gap-3 mt-10">
        <button
          className="px-4 py-2 bg-[#A0522D]/90  rounded-lg disabled:opacity-40 font-semibold"
          onClick={() => updateQuery(jlptLevel, currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <span className="text-xl font-semibold text-black">
          Page {currentPage} / {totalPages}
        </span>

        <button
          className="px-4 py-2 bg-[#A0522D]/90  rounded-lg disabled:opacity-40 font-semibold"
          onClick={() => updateQuery(jlptLevel, currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>

      </div>
    </>
  )
}

export default Vocabulary
