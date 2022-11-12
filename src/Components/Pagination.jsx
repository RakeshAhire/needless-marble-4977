import React from 'react'
import styles from "../Styles/ProductCard.module.css";
export default function Pagination({
    current,
    onChange,
    total
}) {

    const prev = <button style={{marginRight:"5px"}} disabled={current===1} onClick={()=>onChange(current-1)} >PREV</button>
    const next = <button style={{marginLeft:"5px"}} disabled={current===total} onClick={()=>onChange(current+1)}>NEXT</button>

    const pages = new Array(total).fill(0).map((a,i)=>
    <button style={{width:"40px", border:"0.5px solid grey"}} onClick={()=>onChange(i+1)} disabled={current=== (i+1)} >{i+1}</button>
    )

  return <div style={{marginTop:"20px"}}>
    {prev}
      {pages}
      {next}
    </div>
  
}
