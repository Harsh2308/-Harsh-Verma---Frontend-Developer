import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const PaginationSection = ({perPage, onPaginationChange,total}) => {
  const [counter, setCounter] = useState(1)
  
  useEffect(()=>{
    const value = perPage * counter;
    
    onPaginationChange(value - perPage, value)
  }, [counter]);

  const handleButton = (type)=>{
    if(type==="previous"){
      if(counter===1){
        setCounter(1)
      }else{
        setCounter(counter-1)
      }
    }else if(type==="next"){
      if(Math.ceil(total/perPage)===counter){
        setCounter(counter)
      }else{
        setCounter(counter+1)
      }
    }
  }
  return (
    <div style={{textAlign:'center',overflow:"hidden"}}>
      <Button style={{margin:"10px"}} variant='contained' onClick={()=>handleButton("previous")}>Previous</Button>
      <Button style={{margin:"10px"}} variant='contained' onClick={()=>handleButton("next")}>Next</Button>
    </div>
  )
}

export default PaginationSection