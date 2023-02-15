import React, { useEffect, useState } from 'react'
import './pegi.css'
export default function Pagination({showPerPage,onPaginationChange,total}) {
  const [counter,setCounter] = useState(1)
  useEffect(()=>{
    const value = showPerPage*counter 
    // console.log('start value',value-showPerPage)
    // console.log('end value', value)
    onPaginationChange(value-showPerPage,value)
  },[counter])
   const onButtonClickHandle = (type) =>{
           if(type === 'prev'){
            if(counter === 1){
              setCounter(1)
            }else{
              setCounter(counter-1)
            }
           }else if(type === 'next'){
            if(Math.ceil(total/showPerPage) === counter){
              setCounter(counter)
            }else{
              setCounter(counter+1)
            }
          }
   }
  return (
    <div className='button'>
     <button onClick={()=>onButtonClickHandle('prev')} className='b'>Prev</button>
     <button onClick={()=>onButtonClickHandle('next')} className='b'>Next</button>
    </div>
  )
}
