import { useState } from 'react'
import Navbar from './Navbar.jsx';
import { BrowserRouter, Routes, Route} from  "react-router-dom";
import Home from "./Pages/Home.jsx"
import About from "./Pages/About.jsx"
import AddProduct from "./Pages/AddProduct.jsx"
import InsideProduct from './Pages/InsideProduct.jsx';
import UpdateProduct from './Pages/UpdateProduct.jsx';
function App() {
 return(
  <BrowserRouter>
  <Navbar /> 
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/About' element={<About />} />
    <Route path='/products/:id' element={<InsideProduct />} />
    <Route path='/AddProduct' element={<AddProduct />} />
    <Route path='/products/update/:id' element={<UpdateProduct />} />
  </Routes>
  </BrowserRouter>

 );
}

export default App
