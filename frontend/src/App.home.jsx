import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <HashRouter>
      <nav><Link to="/">Home</Link></nav>
      <Routes><Route path="/" element={<Home />} /></Routes>
    </HashRouter>
  );
}
export default App;
