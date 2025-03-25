import { useEffect, useState } from "react";
import Product from "./Product";
function Home()
{
    const[data,setData]=useState([]);
    const [isError,setIsError]= useState(false);
    useEffect(()=>{
        async function fetchData()
            {
        try{
        const response=await fetch("http://localhost:8080/api/products");
        if(response.status!==200)
       { 
        setIsError(true)
       }
       const d= await response.json();
       setData(d);
        }catch(err){
        setIsError(true);
                }
            }
   fetchData();
    },[]);
            if(isError){
                return(<h2> Opps... Something went wrong ...</h2>);
                      }
   return(<>
   {data.length === 0? <h2> Still No Products here ...</h2> :
    <div style={{display:"flex", flexWrap:"wrap"}}>
    {data.map(d=>(<Product  key={d.id} id={d.id} name={d.name} price={d.price} brand={d.brand} />))}
    </div>
   }
        </>);
}
export default Home;