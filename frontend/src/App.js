import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./pages/Footer";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import ShopPage from "./pages/ShopPage";
import SignUp from "./pages/SignUp";
import ContactUsPage from "./components/contactUs/ContactUsPage";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import NewsLetter from "./components/NewsLetter";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import NavCart from "./components/NavCart";
function App() {
  const [user, setUser] = useState(null);

  // This will run once when the component mounts to get the "person" from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("person");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Parse the string to an object
    }
  }, []); //

  return (
    <div className="overflow-x-hidden">
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/product" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut/>} />
        <Route path="/navcart" element={<NavCart/>} />
      </Routes>
      <NewsLetter/>
      <Footer />
    </div>
  );
}

export default App;
