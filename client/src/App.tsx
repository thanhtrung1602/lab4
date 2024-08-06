import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Introduce from "./components/Introduce";
import Detail from "./components/Detail";
import SpTrongLoai from "./components/Sptrongloai";
import Search from "./components/Search";
import Cart from "./components/layout/cart";
import ThanhToan from "./components/layout/Pay";

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gioithieu" element={<Introduce />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/loai/:id_loai" element={<SpTrongLoai />} />
          <Route path="/thanhtoan/" element={<ThanhToan />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/timkiem" element={<Search />} />
          <Route element />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
