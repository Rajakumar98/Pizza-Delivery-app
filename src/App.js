import logo from "./logo.svg";
import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { BrowserRouter, Route, Link, Switch, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Cartscreen from "./screens/Cartscreen";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";
import Ordersscreen from "./screens/Ordersscreen";
import Adminscreen from "./screens/Adminscreen";
function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes path="/" exact component={Homescreen} />
        <Routes path="/cart" exact component={Cartscreen} />
        <Routes path="/register" exact component={Registerscreen} />
        <Routes path="/login" exact component={Loginscreen} />
        <Routes path="/orders" exact component={Ordersscreen} />
        <Routes path="/admin" component={Adminscreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;