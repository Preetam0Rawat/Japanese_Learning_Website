import React from 'react'

const AllKanjis = ({data}) => {
  return (
    <div  className='bg-amber-400 flex flex-wrap justify-around gap-5 mt-10 ml-5 mr-5'>
    <div className='flex items-center justify-center text-4xl border-2 border-white w-20 h-20 text-white right-50% top-50% bg-emerald-200'>
      {data.kanji}
    </div>

    </div>
  )
}

export default AllKanjis
