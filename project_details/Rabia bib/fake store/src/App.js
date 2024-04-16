import { Route, Routes } from "react-router-dom"
import Products from "./component/Products"
import Details from "./Pages/Details"
import { useState } from "react"
import Navbar from "./component/Navbar"
import Cart from "./Pages/Cart"

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/detail/:id" element={<Details addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </div>
  );
}
export default App
