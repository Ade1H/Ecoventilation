import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";

function DebugLinks() {
  return (
    <div style={{padding: "20px"}}>
      <h3>Testlankar:</h3>
      <p>Home: <Link to="/">/</Link></p>
      <p>Services: <Link to="/services">/services</Link></p>
      <p>Contact: <Link to="/contact">/contact</Link></p>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <DebugLinks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}
export default App;
