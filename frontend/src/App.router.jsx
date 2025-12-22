import { HashRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";

function Home() { return <h1>HOME</h1>; }
function Contact() { return <h1>CONTACT</h1>; }

function App() {
  return (
    <HashRouter>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}
export default App;
