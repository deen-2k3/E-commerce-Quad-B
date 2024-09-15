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
import AddProdduct from "./components/admin/AddProduct";
import NewsLetter from "./components/NewsLetter";
import { apiConnector } from "./services/apiConnector";
import { getAllProduct } from "./services/apis";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import NavCart from "./components/NavCart";
import Complete from "./components/Complete";

function App() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);

  // This will run once when the component mounts to get the "person" from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("person");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Parse the string to an object
    }

    fetchData();
  }, []); //

  const fetchData = async () => {
    try {
      const res = await apiConnector("GET", getAllProduct);
      if (res?.data?.allProduct) {
        setProducts(res.data.allProduct); // Safely accessing products in the response
      }
    } catch (error) {
      console.error("Error fetching products:", error); // Error handling
    }
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/shop/product/:category"
          element={<ShopPage products={products} />}
        />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/product" element={<Products />} />
        <Route path="/addproduct" element={<AddProdduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/navcart" element={<NavCart />} />
        <Route path="/complete" element={<Complete />} />
      </Routes>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
