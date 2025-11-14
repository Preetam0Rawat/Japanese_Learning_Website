import React,{ useEffect }  from 'react'
import { useState } from 'react';

const VocabLayout = ({data}) => {
  return (
    <div className='bg-emerald-300'>
         {data.word}{data.jlpt}{data.meaning}{data.furigana}
    </div>
  )
}

export default VocabLayout
