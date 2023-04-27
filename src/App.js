import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from "./pages/Loading";



// import Baseurl from "./Baseurl";


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate a delay of 2 seconds
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div>
      {
        isLoading ?
        <Loading />
        :


      
        <BrowserRouter>
          <ul className="naviga">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/service">Service</Link>
            <Link to="/contact">Contact</Link>
          </ul>


          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </BrowserRouter>



      }

    </div>



  );

};



export default App;

