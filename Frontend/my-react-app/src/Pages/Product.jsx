import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
function Product(props)
{
    const[img,setImg]=useState(null); 
    useEffect(() => {
    const fetchImg=async()=>{ 
        try {
            const resp= await fetch(`http://localhost:8080/api/products/${props.id}/image`);
       if(!resp.ok)
        {
            console.log(resp);
        }
        const blob=await resp.blob();
        setImg(URL.createObjectURL(blob))
        console.log(blob);
        

        } catch (error) {
            console.log(error);
        }

    }
    fetchImg();},[props.id])

    return(
        
        <div key={props.id}              
        style={{
            boxShadow:"0 4px 8px rgba(0,0,0,0.1)",
            margin: "10px",
            padding: "10px", 
            width: "270px",
            height: "210px",
               }}>
        <Link style={{textDecoration: "none", color:"inherit"}}to={`./products/${props.id}`}>
        <img src={img} alt="No Image" style={{width:"40%"}} />
        <div style={{display:"inline-block", width:"60%", boxSizing:"border-box"}}>
        <h2>Brand:{props.brand}</h2>
        <h2>Name:{props.name}</h2>
        <h2>Cost:{props.price}$</h2>
        </div>
        </Link>
        <button style={{width:"200px", background:"lightblue"}}>Add to the Cart</button>
        
        
            </div>);
}
export default Product