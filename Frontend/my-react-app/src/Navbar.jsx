import {Link } from "react-router-dom";
import  './index.css'
function Navbar()
{
    return(<div> 
             <header>
                        <h2 className="NavStyle"> Your-Product</h2>
                        <nav className="NavStyle"> 
                            <div className={"NavStyle"}> <Link to="/"> Home</Link></div>
                            <div className={"NavStyle"}> <Link to="/AddProduct"> Add Product</Link></div>
                            <div className={"NavStyle"}> <Link to="/About"> About</Link></div>
                        </nav>
              </header> 
          </div>
        );
}
export default Navbar;