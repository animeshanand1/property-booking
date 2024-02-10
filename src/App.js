import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import AgentLists from "./components/Agents/AgentLists";
import AgentProfile from "./components/Agents/AgentProfile";
import PropertyPage from "./components/Properties/PropertyPage";
import Footer from "./components/Footer/Footer";
import AdminTab from "./components/Admin/Admin";
import AdminHome from "./components/Admin/AdminHome";
import Contact from "./components/contact/Contact";
import ResetPassword from "./components/Forget-password/ResetPassword";
import Otp from "./components/Otp/Otp";
import UpdatePassword from "./components/Update-password/UpdatePassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/agents" element={<AgentLists/>} />
        <Route path="/agentprofile" element={<AgentProfile/>} />
        <Route path="/property/:id" element={<PropertyPage/>} />
        <Route path="/admin/login" element={<AdminTab/>}/>
        <Route path="/admin/home" element={<AdminHome/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/forget-password" element={<ResetPassword/>} />
        <Route path="/forget-password/otp" element={<Otp/>} />
        <Route path="/forget-password/update-password" element={<UpdatePassword/>} />
      </Routes>
    </Router>
  );
}

export default App;
