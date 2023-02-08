import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./Components/home/Hero";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import ResolverDashboard from "./Components/Dashboard/ResolverDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Hero></Hero>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/student" element={<Dashboard></Dashboard>}></Route>
        <Route
          path="/admin"
          element={<AdminDashboard></AdminDashboard>}
        ></Route>
        <Route
          path="/resolver"
          element={<ResolverDashboard></ResolverDashboard>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
