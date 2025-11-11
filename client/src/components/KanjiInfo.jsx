import React from 'react'
import { useState } from 'react';
import { addStatusToProgress } from '../api';

const KanjiInfo = ({ info }) => {

  const [selected, setSelected] = useState("Untracked");

  const addToProgress = async (status) => {
    try{
      const response = addStatusToProgress(status, studentId)
      console.log(response)
    }catch (error) {
         console.log("error")
     }
  }

  const handleSelect = (status) => {
    setSelected(status);

    // ✅ Perform actions depending on what is selected
    if (status === "Learning" || "Learned") {
      console.log("User is learning this kanji.");
      addToProgress(status)
    }
    else {
      removeFromProgress(status)
      console.log("User stopped tracking this kanji.");
    }
  };



  return (
    <div className='flex flex-col flex-wrap  text-black rounded-2xl  gap-4 mx-auto    bg-slate-100'>
      {/* {info.kanji}{info.jlpt} */}
      <div className=' p-6 rounded-lg text-8xl '>{info.kanji}</div>


      <div className=' flex justify-between p-5 font-semibold text-xl mt-5  bg-slate-600'>
        <div className=' flex flex-col rounded-lg gap-2'>
          <div className=' font-semibold'>
            <span className=''>Newspaper Frequency : </span>
            <span>{info.freq_mainichi_shinbun}</span>
          </div>
          <div className=''>
            <span>JLPT Level : </span>
            <span>N{info.jlpt}</span>
          </div>
          <div className=''>
            <span>Stroke Count : </span>
            <span> {info.stroke_count}</span>
          </div>
        </div>
        <div className=''>
          <span>Kanji Name : </span>
          <span>{info.heisig_en}</span>
        </div>
      </div>


      <div className=' flex justify-around text-xl font-semibold p-6 mt-3   bg-slate-500'>
        <div className=''>
          <h1 className='underline'>Kunyomi readings</h1>
          {info.kun_readings?.map((m, i) => (
            <div key={i}>{m}</div>
          ))
          }
        </div>
        <div className=''>
          <h1 className='underline'>Meanings</h1>
          {info.meanings.map((m, i) => (
            <div key={i}>{m}</div>
          ))}
        </div>
        <div className=''>
          <h1 className='underline'>Onyomi readings</h1>
          {info.on_readings.map((m, i) => (
            <div key={i}>{m}</div>
          ))}
        </div>
      </div>


      {/* <div className=' flex justify-around text-xl font-semibold p-1 mt-2 bg-slate-300'>
        <div className=''>Learning</div>
        <div className=''>Learned</div>
        <div className=''>Untracked</div>
      </div> */}

      <div className="flex justify-around text-xl font-semibold p-2 mt-3 bg-slate-300 rounded-xl">
        {["Learning", "Learned", "Untracked"].map((status) => (
          <div
            key={status}
            onClick={() => handleSelect(status)}
            className={`flex items-center gap-2 cursor-pointer px-3 py-1 rounded-full transition 
            ${selected === status ? "bg-amber-400 text-white" : "bg-white text-gray-700"}`}
          >
            <div
              className={`w-4 h-4 rounded-full border-2 ${selected === status ? "border-white bg-green-500" : "border-gray-400"
                }`}
            ></div>
            <span>{status}</span>
          </div>
        ))}
      </div>
    </div>

    //  <div className="flex flex-col bg-slate-900 text-white rounded-2xl shadow-lg p-4 max-w-md mx-auto gap-4 sm:max-w-lg">

    //   {/* Kanji display */}
    //   <div className="text-6xl font-bold text-center bg-slate-700 rounded-lg py-4">
    //     {info.kanji}
    //   </div>

    //   {/* JLPT, Stroke count, Frequency */}
    //   <div className="flex justify-between bg-slate-800 rounded-lg p-3 text-sm sm:text-base">
    //     <div className="flex flex-col text-center">
    //       <span className="font-semibold">Freq</span>
    //       <span>{info.freq_mainichi_shinbun}</span>
    //     </div>
    //     <div className="flex flex-col text-center">
    //       <span className="font-semibold">JLPT</span>
    //       <span>{info.jlpt}</span>
    //     </div>
    //     <div className="flex flex-col text-center">
    //       <span className="font-semibold">Strokes</span>
    //       <span>{info.stroke_count}</span>
    //     </div>
    //   </div>

    //   {/* Meanings and Readings */}
    //   <div className="bg-slate-700 rounded-lg p-3 flex flex-col gap-2">
    //     <div>
    //       <span className="font-semibold text-amber-300">Meaning: </span>
    //       {info.meanings?.join(', ')}
    //     </div>
    //     <div>
    //       <span className="font-semibold text-amber-300">On: </span>
    //       {info.on_readings?.join(', ')}
    //     </div>
    //     <div>
    //       <span className="font-semibold text-amber-300">Kun: </span>
    //       {info.kun_readings?.join(', ')}
    //     </div>
    //   </div>

    //   {/* Heisig keyword */}
    //   <div className="bg-slate-800 rounded-lg text-center py-2 text-lg font-medium">
    //     “{info.heisig_en}”
    //   </div>

    //   {/* Learning status buttons */}
    //   <div className="flex justify-around bg-slate-700 rounded-lg p-2">
    //     <button className="bg-amber-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-amber-500 transition">
    //       Learning
    //     </button>
    //     <button className="bg-green-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-green-500 transition">
    //       Learned
    //     </button>
    //     <button className="bg-red-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-red-500 transition">
    //       Untrack
    //     </button>
    //   </div>
    // </div>
  )
}

export default KanjiInfo
