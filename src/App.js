import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import AgentLists from "./components/Agents/AgentLists";
import AgentProfile from "./components/Agents/AgentProfile";
import PropertyPage from "./components/Properties/PropertyPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/agents" element={<AgentLists/>} />
        <Route path="/agentprofile" element={<AgentProfile/>} />
        <Route path="/property/:id" element={<PropertyPage/>} />

      </Routes>
    </Router>
  );
}

export default App;
