import { useEffect, useState } from "react";
import { useNavigate , useParams } from "react-router-dom";
function InsideProduct()
{
    const navigate=useNavigate();
    const[product,setProduct]=useState(null);
    const[image,setImage]=useState("");
    const[isError,setIsError]=useState(false);
    const { id } = useParams();
    useEffect(()=>{
        const fetchImage=async()=>{
            try{
            const response= await fetch(`http://localhost:8080/api/products/${id}/image`);
            const blob= await response.blob();
            setImage(URL.createObjectURL(blob));
        }catch(error)
        {
            alert(error);
        }
            
        }
        async function fetchData()
        {
            try {
                const response=((await fetch(`http://localhost:8080/api/products/${id}`)));
                const data=await response.json()
                if(response.ok)
                setProduct(data);
                fetchImage();
            } catch (error) {
                setIsError(true);
            }
        }
        fetchData();

    },[]);
      const handleUpdate=()=>
      {
        navigate(`/products/update/${id}`);
      }
      const handleDelete=async()=>{
        await fetch(`http://localhost:8080/api/products/${id}`,{
            method:"Delete"
        });
      }
    if(product===null||isError){
        return<h2> Opps Error...</h2>
    }
    return( <div style={{
        boxShadow:"0 4px 8px rgba(0, 0, 0, 1.1)",
        background:"rgba(85, 105, 98, 0.5)",
        width:"70%"}}>
            <img src={image} alt="No Image" style={{width:"40%"}}/>
            <vr />
            <div style={{display:"inline-block", width:"60%", boxSizing:"border-box"}}>
        <h2>{product.category}</h2>
        <h2>{product.brand}</h2>
        <h2>{product.name}</h2>
        <h2>{product.describtion}</h2>
        <h2>Date : {product.releasDate}</h2>
        <button type="button" style={{background:"rgba(8, 95, 129, 0.7)", color:"white",width:"50%"}} onClick={handleUpdate}> Update </button>
        <button style={{background:"rgba(8, 95, 129, 0.7)", color:"white",width:"50%"}} onClick={handleDelete}> Delete </button>
        </div>
            
            </div>
    
    );
}
export default InsideProduct;