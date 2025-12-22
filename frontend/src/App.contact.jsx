import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <HashRouter>
      <nav><Link to="/contact">Contact</Link></nav>
      <Routes><Route path="/contact" element={<Contact />} /></Routes>
    </HashRouter>
  );
}
export default App;
