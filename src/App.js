// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import "./App.css";

import Header from "./Components/Header";
import Inventory from "./Components/Inventory";
import Channel from "./Components/Channel";
import Orders from "./Components/Orders";
import Shopping from "./Components/Shopping";
import Dashboard from "./Components/Dashboard";
import Navbar from "./component2/Navbar";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />

        <nav className="navigation-bar">
          <NavLink
            to="/dashboard"
            className="nav-item"
            activeClassName="active"
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/inventory"
            className="nav-item"
            activeClassName="active"
          >
            Inventory
          </NavLink>
          <NavLink to="/channel" className="nav-item" activeClassName="active">
            Channel
          </NavLink>
          <NavLink to="/orders" className="nav-item" activeClassName="active">
            Orders
          </NavLink>
          <NavLink to="/shopping" className="nav-item" activeClassName="active">
            Shopping
          </NavLink>
        </nav>

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/channel" element={<Channel />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/shopping" element={<Shopping />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
