import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
function UpdateProduct()
{
    const [text,setText]=useState("");
    const[isError,setIsError]=useState(false);
    const {id}=useParams();
    const[image,setImage]=useState(null);
    const[product,setProduct]=useState({
        id:null,
        name:"",
        brand:"",
        describtion:"",
        price:"",
        category:"",
        quantity:"",
        releaseDate: "",
        avalibilty:false,
    });
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
                const response= await fetch(`http://localhost:8080/api/products/${id}`);

                if(!response.ok)
                    {
                        setIsError(true);
                    }else{
                        const data= await response.json();
                        setProduct(data);
                    }
                } catch (error) {
                setIsError(true);
                }
        }
        fetchData();
        fetchImage();


        if(isError)
        {
            setText("Something Went wrong...");
        }else{
            setText("");
        }
    },[isError,id]);
    function handleNewProdcutChange(event)
    {//du must das verstehen ohne [] in name dann haben wir eine einzige Attribute(name)
        // mit[] ist der Schlüssel dynamisch...
        const { name, type, value } = event.target;
        setProduct((prev)=>({
            ...prev,[name]: type==="checkbox"? Boolean(value):value

        }));
    };
    const handleImage=(e)=>{
        const file=e.target.files[0];
        setImage(file);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        async function fetchData()
        {
            console.log("before sending the product",product);
            try {
                const formdata=new FormData();
                formdata.append("product", new Blob([JSON.stringify(product)], {type:"application/json"}));
                formdata.append("image",image);
                const response= await fetch(`http://localhost:8080/api/products/update/${id}`,
                    {   method: "PUT",
                        body: formdata,
                    });
                    if(!response.ok)
                    {
                        setIsError(true);
                    }else{
                    console.log("after sending the product",product);
                }
                } catch (error) {
                setIsError(true);
                }
        }
        fetchData();
    }
 
    return  (<>

    <form style={{
        boxShadow:"0 4px 8px rgba(0, 0, 0, 1.1)",
        background:"rgba(85, 105, 98, 0.5)",
        width:"70%", 
        display:"flex",
        flexWrap:"wrap",
        height:"60vh"}} method="POST"
        onSubmit={handleSubmit}
        >

        <div style={{ width:"50%", boxSizing:"border-box",padding:"0 15px"}}>
        <label htmlFor="nameInput" > <b>Name:</b></label><br />
        <input 
        type="text" 
        id="nameInput" 
        placeholder="Product name" 
        style={{boxSizing:"border-box", width:"90%"}} 
        name="name"
        value={product.name}
        onChange={handleNewProdcutChange}/>
        </div>

        <div style={{width:"50%", boxSizing:"border-box",padding:"0 15px"}}>
        <label htmlFor="brandInput" > <b>Brand:</b></label><br />
        <input 
        type="text" 
        id="brandInput" 
        placeholder="Enter your Brand" 
        style={{width:"90%",boxSizing:"border-box"}}
        name="brand"
        value={product.brand}
        onChange={handleNewProdcutChange}
        />
        </div>
      
        <div style={{width:"100%",padding:"0 15px",boxSizing: "border-box"}}>
        <label htmlFor="descriptionInput" > <b>Description:</b></label><br />
        <textarea  style={{boxSizing: "border-box"}}
        id="descriptionInput" 
        placeholder="Add product description" 
        name="describtion"
        value={product.describtion}
        onChange={handleNewProdcutChange}
        />
        </div>
        <div style={{width:"35%",boxSizing:"border-box",padding:"0 15px"}}>
        <label htmlFor="priceInput" > <b>Price:</b></label><br />
        <input 
        type="number" 
        id="priceInput" 
        placeholder="Eg: $1000" 
        style={{boxSizing: "border-box",width:"90%"}}
        name="price"
        value={product.price}
        onChange={handleNewProdcutChange}
        />
        </div>

        <div style={{width:"30%",boxSizing: "border-box",padding:"0 15px"}}>
        <label htmlFor="selectInput" > <b>Category:</b></label><br />
        <select  
        id="selectInput" 
        style={{boxSizing: "border-box",width:"90%"}}
        name="category"
        value={product.category}
        onChange={handleNewProdcutChange}
        >
            <option value="Electronics">Electronics</option>
            <option value="Home Appliances">Home Appliances</option>
            <option value="Fashion">Fashion</option>
            <option value="Gaming">Gaming</option>
            <option value="Cars">Cars</option>
        </select >
        </div>
        <div style={{width:"35%",boxSizing: "border-box",padding:"0 15px"}}>
            <label htmlFor="QuantityInput"><b>Stock Quantity :</b></label><br />
            <input 
            type="number" 
            id="QuantityInput" 
            placeholder="Stock Remaining" 
            style={{boxSizing: "border-box",width:"90%"}}
            name="quantity"
            value={product.quantity}
            onChange={handleNewProdcutChange}
            />
        </div>
        <div style={{width:"40%",boxSizing: "border-box",padding:"0 15px"}}>
            <label htmlFor="ReleaseDate"><b>Release Date :</b></label><br />
            <input 
            type="date" 
            id="ReleaseDate" 
            style={{width:"90%"}}
            name="releaseDate"
            value={product.releaseDate}
            onChange={handleNewProdcutChange}
            />
        </div>
        <div style={{width:"40%",boxSizing: "border-box",padding:"0 15px"}}>
        <label htmlFor="img"><b>Image :</b></label><br />
        <input 
        type="file" 
        id="img" style={{width:"90%"}}
        onChange={handleImage}
        />
        </div>
        <div style={{width:"20%",boxSizing: "border-box",padding:"0 15px"}}>
        <input 
        type="checkbox"  
        id="Avaliable"
        name="avalibilty"
        checked={product.avalibilty}
        onChange={handleNewProdcutChange}
        />
        <label htmlFor="Avaliable"><b> Product Avaliable</b></label>
        </div>
        <div style={{width:"50%",padding:"10px 35%"}}>
        <button type="submit" style={{width:"80%", background:"rgba(8, 95, 129, 0.7)", color:"white"}}>Update</button>
        </div>

          </form>  <br />
          <h2 style={{color:"red"}}> {text}</h2>
          </>);
}
export default UpdateProduct;