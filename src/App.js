import React from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import Navbar from "./containers/navigation/Navigation";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
  
    <div className="intro-div">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous"></link>
      {/* <Main></Main>         */}
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
