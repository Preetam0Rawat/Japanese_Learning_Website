import React, { useEffect } from 'react'
import { useState } from 'react';
import { getKanjiVocabCount } from '../api';

const ItemCount = () => {
    const [data, setData] = useState({
        totalKanji: 0,
        totalVocab: 0,
        learnedKanji: 0,
        learnedVocab: 0,
    });

    const token = localStorage.getItem("token")

    useEffect(()=>{
        getNumber()
    },[])

    const getNumber = async () => {
        try {
            const response = await getKanjiVocabCount(token)
            setData(response.data)
        } catch (error) {
            console.log('Error is : ', error)
        }
    }
    return ( 
        <div className='  p-3 font-semibold'>
            <h1 className='underline font-extrabold mb-4 text-center'>Items Learned</h1>
            
            { token? (<>
            <h1>Kanji : {data.learnedKanji}/{data.totalKanji}</h1>
            <h1>Vocabulary : {data.learnedVocab}/{data.totalVocab}</h1></>) : 
            ( <h1 className='text-center font-semibold'>SignIn for Statistics</h1> )
            }
        </div>
    )
}

export default ItemCount
