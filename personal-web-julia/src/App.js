import React from "react"
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from "./components/Navbar";
import Banner  from "./components/Banner";

function App() {
  return (
    <div className='App'>
      <Navbarr/>
      <Banner/>
    </div>
  );
}

export default App;
