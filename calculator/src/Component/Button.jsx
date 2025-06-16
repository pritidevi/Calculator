import React from 'react'
import Inputno from './Inputno';
import { useState } from 'react';

export default function Button({ button }) {
    // const click=(button)=>{
    //     console.log(`${button} has clicked`);
    //         }
    // const onclick=(button)=>{
    //    return button;
    // }
    const [input, setInput] = useState(" ");
   const [state, setstate]=useState("null")
       
   
    const onClick = (button) => {
        setstate(button);
        setTimeout(() => setstate(null), 300);
        if (button ==="C") {
            setInput("")
           
        }
        else if(button ==="="){
            let result=eval(input )
            setInput(result)
        }
       
        else{
           setInput(input+button)
        }
    }
   
    return (
        <>
            <Inputno input={input} />
            <div className="buttons"  style={{ margin: " 0 50px 0 50px" }}>
                {button.map(item =>
                    <button type='button' key={item} className={`button ${state===item ?"active":" " }`} onClick={() => onClick(item)}
                    >{item} </button>
                )}</div>

        </>
    )
}
