import React, { useEffect} from 'react'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import Setting from '../Sidebar/Setting'
import Profilee from '../Sidebar/Profilee'
import { supabase } from '../../../services/supabaseClient'
import TodoCompleted from './TodoCompleted'
import TodoList from './TodoList'
function TodoMainSection(props) {
              ///todo 
              const [todo,seTodo]=useState('')
              const [todos,setTodos]=useState([])
              console.log(todos)

              const deleteTodo=async(index)=>{
                              const { error } = await supabase
                              .from('todos')
                              .delete()
                              .eq('id', index)
                              toast("Task deleted successfully!", {
                                        position: "top-right",
                                        autoClose:1000,
                                        hideProgressBar: true,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        // progress: undefined,
                                      
                                        className:'bg-lightBgclr text-mainTextclr  font-mono font-semibold border-2 border-markclr'
                                      });
              }   
 
            ///hover deletebutton
              const[hover,setHover]=useState(null)

              
    ///fecth data 
    
        const fetchdata=async()=>{
          let { data: tasks, error } = await supabase
          .from('todos')
          .select('*')
          if (error) {
            console.error("Error fetching todos:", error);
          } else {
            console.log("Tasks:", tasks);
            setTodos(tasks)
          }      }

              useEffect(()=>{
                   
                    fetchdata()
              },[])
     

  return (
    <div  className=' min-h-screen w-full py-6 sm:pl-14 lg:pl-6  sm:pr-4 lg:pr-6  flex lg:flex-row sm:flex-col md:gap-5'>
        {props.popUp === 2 && <Setting/>}
        {props.popUp === 1 && <Profilee/>}
        <div className='md:basis-1/2  flex p-6 sm:basis-full  border-2 border-markclr ' onClick={()=>{props.setPopUp(null)}}>
         <TodoList todos={todos} setTodos={setTodos}  fetchdata={fetchdata} hover={hover} setHover={setHover} seTodo={seTodo} todo={todo}  deleteTodo={deleteTodo} />
         <ToastContainer/>
          
        </div>
        <div className='basis-1/2  border-2 border-markclr p-4 flex flex-col gap-8' onClick={()=>{props.setPopUp(null)}}>
         <TodoCompleted  todos={todos} fetchdata={fetchdata}/>
        </div>
    </div>
  )
}

export default TodoMainSection