import React,{ useEffect, useRef, useState } from "react";


let Scroll = () => {

    let [count,setCount] = useState("");
    let number = useRef(-1);

    useEffect(()=>{
        number.current  = number.current + 1;
    })
  
  
    // let Focus = () => {
    //     number.current.focus()
    // }
    return(
        <>
            <input type="text"  value={count} onChange={(e) => setCount(e.target.value)} />
            <p>{count}</p>
            <p>{number.current}</p>

        
        </>
    )
}

export default Scroll;