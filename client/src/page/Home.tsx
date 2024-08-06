import { Shuffle } from "../Logic";

import Sanphamxemnhieu from "./Sanphamxemnhieu";
import { Menu } from "../components";
import { Link } from "react-router-dom";
import "../App.css";
import { useEffect, useState } from "react";
import { Product } from "../types/products";
import axios from "axios";

function Home() {
  const [listsp, setListsp] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/products/spmoi/9")
      .then((data) => setListsp(data.data));
  }, []);
  const sp: Product[] = Shuffle(listsp);
  const soTin = 10;
  return (
    <div className="min-h-screen bg-gray-100">
      <header>{/* <Header /> */}</header>
      <nav className="bg-white shadow-md p-4">
        <Menu />
      </nav>
      <main className="flex h-full p-4">
        <article className="w-9/12 bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Sản Phẩm</h2>
          <div className="grid grid-cols-3 gap-4">
            {sp.map((sp) => (
              <Link to={`/detail/${sp.id}`} key={sp.id}>
                <div className="border border-gray-200 rounded-lg p-4 relative h-64 flex flex-col items-center">
                  <h4 className="text-lg font-medium mb-2">{sp.ten_sp}</h4>
                  <img
                    className="w-full h-full object-cover mt-2"
                    src={sp.hinh}
                    alt={sp.ten_sp}
                  />
                </div>
              </Link>
            ))}
          </div>
        </article>
        <aside className="w-3/12 ml-4 bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Sản Phẩm Xem Nhiều</h2>
          <Sanphamxemnhieu sotin={soTin} />
        </aside>
      </main>
      <footer className="flex justify-center items-center py-4 bg-gray-800 text-white">
        <p>&copy; Nguyễn Thành Trung</p>
      </footer>
    </div>
  );
}

export default Home;
