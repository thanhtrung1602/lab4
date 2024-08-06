import { useParams } from "react-router-dom";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import { Product } from "../types/products";
import PhanTrang from "./PhanTrang";

type Loai = {
  id: number;
  ten_loai: string;
};

function SpTrongLoai() {
  const { id_loai } = useParams();
  const [list, setList] = useState<Product[]>([]);
  const [loai, setLoai] = useState<Loai | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/products/sptrongloai/${id_loai}`)
      .then((res) => res.json())
      .then((data) => setList(data));
    fetch(`http://localhost:3000/products/loai/${id_loai}`)
      .then((res) => res.json())
      .then((data) => setLoai(data));
  }, [id_loai]);

  return (
    <div>
      <nav className="bg-white shadow-md p-4">
        <Menu />
      </nav>
      <div id="listsp" className="p-4">
        <h1 className="text-2xl font-semibold mb-4">
          Sản phẩm trong loại {loai?.ten_loai}
        </h1>
        <PhanTrang listSP={list} pageSize={9} />
      </div>
    </div>
  );
}

export default SpTrongLoai;
