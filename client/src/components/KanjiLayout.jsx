import React from 'react'

const KanjiLayout = ({data, onClick}) => {


  return (
    <div className='flex items-center flex-col justify-center text-4xl border-2 border-white w-24 h-27 text-white right-50% top-50%  cursor-pointer' onClick={onClick}>
      <div className='flex-2 text-[40px] mt-2 pl-2 pr-2  pt-1 border-2 border-white border-dotted'>{data.kanji}</div>
      <h1 className='flex-1 text-[16px] text-center'>{(data.meanings[0]).length<=10? data.meanings[0]: data.meanings[0].slice(0,8).append+'...'}</h1>
    </div>
  )
}

export default KanjiLayout
