import { useEffect } from "react";
import { useState } from "react";
function AddProduct()
{
    const [text,setText]=useState("");
    const[isError,setIsError]=useState(false);
    const[newProduct,setNewProduct]=useState({
        name:"",
        brand:"",
        describtion:"",
        price:"",
        category:"",
        quantity:"",
        releaseDate: "",
        avalibilty:false,
    });
    const[image,setImage]= useState(null); 

    useEffect(()=>{ 
        if(isError)
        {
            setText("Something Went wrong...");
        }else{
            setText("");
        }
    },[isError]);
    function handleNewProdcutChange(event)
    {//du must das verstehen ohne [] in name dann haben wir eine einzige Attribute(name)
        // mit[] ist der Schlüssel dynamisch...
        const { name, type, value } = event.target;
        setNewProduct((prev)=>({
            ...prev,[name]: type==="checkbox"? Boolean(value): value

        }));
    };
    const handleImage=(e)=>{
        const file=e.target.files[0];
        setImage(file);
        console.log("after saving",image);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        async function fetchData()
        {
           
                const formdata=new FormData();
                formdata.append("product", new Blob([JSON.stringify(newProduct)], {type:"application/json"}));
                formdata.append("image",image);
                console.log("before sending",formdata);
                try {
                const response= await fetch("http://localhost:8080/api/products",
                    {   method: "POST",
                        body: formdata,
                    });
                    if(!response.ok)
                    {
                        alert("Error the Product is not saved !");
                        setIsError(true);
                    }else{
                        alert("The Product is successfuly saved");
                    }
                } catch (err) {
                    alert(err);
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
        height:"60vh",boxSizing: "border-box"}} method="POST"
        onSubmit={handleSubmit}
        >

        <div style={{ width:"50%", boxSizing:"border-box",padding:"0 15px"}}>
        <label htmlFor="nameInput" style={{boxSizing: "border-box"}}> <b>Name:</b></label><br />
        <input 
        type="text" 
        id="nameInput" 
        placeholder="Product name" 
        style={{boxSizing:"border-box", width:"90%"}} 
        name="name"
        value={newProduct.name}
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
        value={newProduct.brand}
        onChange={handleNewProdcutChange}
        />
        </div>
      
        <div style={{width:"100%",padding:"0 15px",boxSizing: "border-box"}}>
        <label htmlFor="descriptionInput" style={{boxSizing: "border-box"}}> <b>Description:</b></label><br />
        <textarea 
        style={{boxSizing: "border-box"}}
        id="descriptionInput" 
        placeholder="Add product description" 
        name="describtion"
        value={newProduct.describtion}
        onChange={handleNewProdcutChange}
        />
        </div>
        <div style={{width:"35%",boxSizing:"border-box",padding:"0 15px"}}>
        <label htmlFor="priceInput" style={{boxSizing: "border-box"}}> <b>Price:</b></label><br />
        <input 
        type="number" 
        id="priceInput" 
        placeholder="Eg: $1000" 
        style={{boxSizing: "border-box",width:"90%"}}
        name="price"
        value={newProduct.price}
        onChange={handleNewProdcutChange}
        />
        </div>

        <div style={{width:"30%",boxSizing: "border-box",padding:"0 15px"}}>
        <label htmlFor="selectInput" > <b>Category:</b></label><br />
        <select  
        id="selectInput" 
        style={{boxSizing: "border-box",width:"90%"}}
        name="category"
        value={newProduct.category}
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
            value={newProduct.quantity}
            onChange={handleNewProdcutChange}
            />
        </div>
        <div style={{width:"40%",boxSizing: "border-box",padding:"0 15px"}}>
            <label htmlFor="ReleaseDate" ><b>Release Date :</b></label><br />
            <input 
            type="date" 
            id="ReleaseDate" 
            style={{width:"90%"}}
            name="releaseDate"
            value={newProduct.releaseDate}
            onChange={handleNewProdcutChange}
            />
        </div>
        <div style={{width:"40%",boxSizing: "border-box",padding:"0 15px"}}>
        <label htmlFor="img"><b>Image :</b></label><br />
        <input 
        type="file" 
        id="img"
        style={{width:"90%"}}
        onChange={handleImage}
        />
        </div>
        <div style={{width:"20%",boxSizing: "border-box",padding:"0 15px"}}>
        <input 
        type="checkbox"  
        id="Avaliable"
        name="avalibilty"
        checked={newProduct.avalibilty}
        onChange={handleNewProdcutChange}
        />
        <label htmlFor="Avaliable"><b> Product Avaliable</b></label>
        </div>
        <div style={{width:"50%",padding:"10px 35%"}}>
        <button type="submit" style={{width:"80%", background:"rgba(8, 95, 129, 0.7)", color:"white"}}>Add Product</button>
        </div>

          </form>  <br />
          <h2 style={{color:"red"}}> {text}</h2>
          </>);
}
export default AddProduct;