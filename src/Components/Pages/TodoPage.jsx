import React from 'react'
import Todonav from '../ui/Todonav'
import TodoMainSection from '../ui/MainSection/TodoMainSection'
import Sidebar from '../ui/Sidebar/Sidebar'
import { useState } from 'react'
function TodoPage() {
   const [popUp,setPopUp]=useState(null)
  
  
  return (
    <div className='min-h-screen w-full bg-zinc-50 flex flex-row '>
      <div style={{position:'fixed',zIndex:10}} className='min-h-screen w-fit' > 
        <Sidebar    setPopUp={setPopUp} popUp={popUp}/>
      </div>
    
      <div className='flex bg-mainBgclr w-screen' >
       <div className='lg:w-[368px] xl:w-[358px] sm:hidden lg:block'></div>
        <div className='flex flex-col w-full '>
          <div style={{position:'sticky',top:0}} onClick={()=>{setPopUp(null)}} className='h-20 bg-lightBgclr'>
            <Todonav/>
          </div>
          <div className='flex flex-col'>
              <TodoMainSection setPopUp={setPopUp} popUp={popUp}/>
              {/* <Todofooter/> */}
              
          </div>
        </div>
      
        
      </div>
    </div>
    
  )
}

export default TodoPage