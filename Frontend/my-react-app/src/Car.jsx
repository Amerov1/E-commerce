import React,{useEffect, useState} from"react"
import axios from "axios"
function Car()
{
    const[products,setProducts]=useState([]);
    const [isError,setIsError]=useState(false);
    useEffect(()=>{
    const fetchData = async()=>{
        try{
        const response = await axios.get("http://localhost:8080/api/products");
        setProducts(response.data);
         }catch(error){
            console.error("Error fetching data:", error);
            setIsError(true);
         }

    };
    fetchData();
},[])
        if(isError)
        {
            return(
            <h2>Something went wrong....</h2>
            );
        }
    return(
            <div id="HomePage">
                {products.map((product)=>           
                     (<div className="card">
                <div className="card-text" key={product.id}             style={{
              width: "270px",
              height: "210px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              borderRadius: "10px",
              overflow: "hidden",

              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "stretch",
            }}> 
                <p>{product.name}</p>
                <p>{product.brand}</p>
                <p>{product.price}</p>
                </div>
                <button>Add to Cart </button>
            </div>))}

           </div>)
}

export default Car

