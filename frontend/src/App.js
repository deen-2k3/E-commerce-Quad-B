import "./App.css";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import SignUp from "./pages/SignUp";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="w-screen h-screen">
     <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/navbar" element={<Navbar/>}/>
     </Routes>
    </div>
  );
}

export default App;
