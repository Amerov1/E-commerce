import React,{useState} from "react"

function Button()
{
    const [num,setNum]=useState(0);
    const increamentNum = ()=>{setNum(num+1)}
    const decreamentNum = ()=>{setNum(num-1)}
    const resetNum = ()=>{setNum(0)}
    return(
        <div className="Div">
            <p className="number">{num}</p>
            <button className="button" onClick={increamentNum}>Increaming</button>
            <button className="button" onClick={decreamentNum}>Decreaming</button>
            <button className="button" onClick={resetNum}>Reset</button>
        </div>
    );
}

export default Button