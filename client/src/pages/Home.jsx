import bug from '../images/bug.png'
import kanji from '../images/kanji.png'
import signupLog from '../images/signupLog.png'
import vocabBooks from '../images/vocabBooks.png'
import progressPot from '../images/progressPot.png'
import dashboard from '../images/dashboard.png'
import {useNavigate} from 'react-router-dom'         // Can also use <Link> from react-router-dom

const Home = () => {
  const navigate = useNavigate()
  
  return (

      <div>
         <div className='bg-cover bg-center bg-no-repeat w-full min-h-screen flex flex-wrap justify-center' style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.3), rgba(0,0,0,0.3)), url('/src/images/homeBG.jpg')" }}>
            
            <div className='relative w-150 h-110'>
               <img className=' absolute top-25 left-20  w-70 h-70 object-fit transition-transform duration-200 ease-in-out hover:scale-105 hover:-translate-y-3 custom-shadow' src={dashboard} />
            </div>
           
            <div className=' relative w-150 h-110'>
               <img className=' absolute top-30 left-35  w-50 h-50 object-cover transition-transform duration-200 ease-in-out hover:scale-105 hover:-translate-y-3 cursor-pointer custom-shadow ' src={bug} onClick={()=> navigate("/report")}/>
            </div>
           
            <div className='relative w-150 h-110'>
               <img className='absolute bottom-0  right-20 w-65 h-70 object-fit transition-transform duration-200 ease-in-out hover:scale-105 hover:-translate-y-3 cursor-pointer custom-shadow' src={signupLog} onClick={()=> navigate("/signup")}/>
            </div>
          
            <div className='relative w-150 h-110'>
               <img className='absolute bottom-10 left-15  w-90 h-85 object-cover transition-transform duration-200 ease-in-out hover:scale-105 hover:-translate-y-3 cursor-pointer custom-shadow' src={kanji} onClick={()=> navigate("/kanji")}/>
            </div>
           
            <div className='relative w-150 h-110 '>
               <img className=' absolute bottom-0 left-50 w-70 h-80 object-fit transition-transform duration-200 ease-in-out hover:scale-105 hover:-translate-y-3 cursor-pointer custom-shadow ' src={progressPot} onClick={()=> navigate("/progress")}/>
            </div>
           
            <div className='relative w-150 h-110 '>
               <img className=' absolute right-35 bottom-10 w-70 h-70 object-cover transition-transform duration-200 ease-in-out hover:scale-105 hover:-translate-y-3  cursor-pointer custom-shadow  ' src={vocabBooks} onClick={()=> navigate("/vocabulary")}/>
            </div>
        
         </div>
      </div>
   )
}

export default Home;