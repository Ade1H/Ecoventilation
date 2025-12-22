import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";

function NavbarSimple() {
  return (
    <nav style={{padding: "20px", background: "#f0f0f0", borderBottom: "2px solid #ccc"}}>
      <Link to="/" style={{marginRight: "15px"}}>Home</Link>
      <Link to="/services" style={{marginRight: "15px"}}>Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

function App() {
  return (
    <HashRouter>
      <NavbarSimple />
      <div style={{padding: "20px"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
export default App;
