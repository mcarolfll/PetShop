import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Produtos from "./views/Produtos";
import './index.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Produtos" element={<Produtos />} />
    </Routes>
  );
}