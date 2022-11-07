import React from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from "./components/Navbar";
import Banner  from "./components/Banner";
import About from "./components/About";
import {Portfolio} from "./components/Portfolio";
import { Footer } from "./components/Footer";


function App() {
  return (
    <div className='App'>
      <Navbarr/>
      <Banner/>
      <About/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
