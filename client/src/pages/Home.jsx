import bug from '../images/bug.png'
import kanji from '../images/kanji.png'
import signupLog from '../images/signupLog.png'
import vocabBooks from '../images/vocabBooks.png'
import progressPot from '../images/progressPot.png'
import dashboard from '../images/dashboard.png'
import { useNavigate } from 'react-router-dom'         // Can also use <Link> from react-router-dom
import homeBG from '../images/homeBG.jpg'
import ItemCount from '../components/ItemCount'

const Home = () => {
   const navigate = useNavigate()

   return (

      <div>
         <div className='bg-cover bg-center bg-no-repeat w-full min-h-screen flex flex-wrap justify-center' style={{ backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.3), rgba(0,0,0,0.3)), url(${homeBG})` }}>

            <div className='relative w-150 h-110 '>
               <img className=' absolute top-25 left-20  w-70 h-70 object-fit  custom-shadow' src={dashboard} />
               <div className=' w-2/6 h-2/6  absolute top-50 left-35   -rotate-3'>
                  <ItemCount />
               </div>
            </div>

            {/* <div className=' relative w-150 h-110'>
               <img className=' absolute top-30 left-35  w-50 h-50 object-cover transition-transform duration-200 ease-in-out hover:scale-105 hover:-translate-y-3 cursor-pointer custom-shadow' src={bug} onClick={()=> navigate("/report")}/>
            </div> */}

            <div className=' relative sm:w-150 sm:h-110 w-20 h-20'>
               <div className="absolute group  flex  flex-col items-center sm:top-25 sm:left-35  text-white text-sm px-3 py-1 rounded-mdtransition-all duration-200 group transition-transform ease-in-out hover:scale-105 hover:-translate-y-3">
                  <h1 className='bg-white text-black text-xl font-semibold w-20 text-center  rounded-4xl opacity-0 group-hover:opacity-100 '>Report Bugs</h1>
                  <img className='sm:w-100 sm:h-50 object-contain cursor-pointer custom-shadow' src={bug} onClick={() => navigate("/report")} />
               </div>
            </div>





            {/* <div className='relative w-150 h-110'>
               <img className='absolute bottom-0  right-20 w-65 h-70 object-fit transition-transform duration-200 ease-in-out hover:scale-105 hover:-translate-y-3 cursor-pointer custom-shadow' src={signupLog} onClick={() => navigate("/signup")} />
            </div> */}

            <div className=' relative sm:w-150 sm:h-110 w-20 h-20'>
               <div className="absolute group  flex  flex-col items-center sm:top-30 sm:left-35  text-white text-sm px-3 py-1 rounded-mdtransition-all duration-200 group transition-transform ease-in-out hover:scale-105 hover:-translate-y-3">
                  <h1 className='bg-white text-black text-xl font-semibold px-2 text-center  rounded-4xl opacity-0 group-hover:opacity-100 '>Signup</h1>
                  <img className='sm:w-70 sm:h-70 object-contain cursor-pointer custom-shadow' src={signupLog} onClick={() => navigate("/signup")} />
               </div>
            </div>

            {/* <div className='relative w-150 h-110'>
               <img className='absolute bottom-10 left-15  w-90 h-85 object-cover transition-transform duration-200 ease-in-out hover:scale-105 hover:-translate-y-3 cursor-pointer custom-shadow' src={kanji} onClick={() => navigate("/kanji")} />
            </div> */}

            <div className=' relative sm:w-150 sm:h-110 w-20 h-20'>
               <div className="absolute group  flex  flex-col items-end sm:top-20 sm:left-25  text-white text-sm px-3 py-1 rounded-mdtransition-all duration-200 group transition-transform ease-in-out hover:scale-105 hover:-translate-y-3">
                  <h1 className='bg-white text-black text-xl font-semibold px-2 text-center  rounded-4xl opacity-0 group-hover:opacity-100 '>Kanji</h1>
                  <img className='sm:w-95 sm:h-90 object-contain cursor-pointer custom-shadow' src={kanji} onClick={() => navigate("/kanji")} />
               </div>
            </div>
            
{/*             
            <div className='relative w-150 h-110 '>
               <img className=' absolute bottom-0 left-50 w-70 h-80 object-fit transition-transform duration-200 ease-in-out hover:scale-105 hover:-translate-y-3 cursor-pointer custom-shadow ' src={progressPot} onClick={() => navigate("/progress")} />
            </div> */}

             <div className=' relative sm:w-150 sm:h-110 w-20 h-20'>
               <div className="absolute group  flex  flex-col items-center sm:top-20 sm:left-35  text-white text-sm px-3 py-1 rounded-mdtransition-all duration-200 group transition-transform ease-in-out hover:scale-105 hover:-translate-y-3">
                  <h1 className='px-2 bg-white text-black text-xl font-semibold  text-center  rounded-4xl opacity-0 group-hover:opacity-100 '>Progress</h1>
                  <img className='sm:w-80 sm:h-90 object-contain cursor-pointer custom-shadow' src={progressPot} onClick={() => navigate("/progress")} />
               </div>
            </div>

            {/* <div className='relative w-150 h-110 '>
               <img className=' absolute right-35 bottom-10 w-70 h-70 object-cover transition-transform duration-200 ease-in-out hover:scale-105 hover:-translate-y-3  cursor-pointer custom-shadow  ' src={vocabBooks} onClick={() => navigate("/vocabulary")} />
            </div> */}

               <div className=' relative sm:w-150 sm:h-110 w-20 h-20'>
               <div className="absolute group  flex  flex-col items-center sm:top-30 sm:left-35  text-white text-sm px-3 py-1 rounded-mdtransition-all duration-200 group transition-transform ease-in-out hover:scale-105 hover:-translate-y-3">
                  <h1 className='bg-white px-2 text-black text-xl font-semibold text-center  rounded-4xl opacity-0 group-hover:opacity-100 '>Vocabulary</h1>
                  <img className='sm:w-80 sm:h-80 object-contain cursor-pointer custom-shadow'src={vocabBooks} onClick={() => navigate("/vocabulary")} />
               </div>
            </div>

         </div>
      </div>
   )
}

export default Home;