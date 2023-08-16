import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/css/main.css'

function App() {
  const [state,setState]=useState(0)
  useEffect(()=>{
    let timer=setInterval(()=>{
        setState(state=>state!=60?state+1:60)
    },50)
    return ()=>
    
      clearInterval(timer);
    
    
  },[])


  return (
    <>
      
        <div className='container' style={{width:'400px',backgroundColor:'white',height:'50px',display:'flex', color:'red'}}>
          <div className='progress' style={{width:`${state}%`, height:'100%', backgroundColor:'green'}}></div>
          {state}
        </div>
      
        
    </>
  )
}

export default App
