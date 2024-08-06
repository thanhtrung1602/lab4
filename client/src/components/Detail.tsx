import { useParams } from "react-router-dom";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import axios from "axios";
import { addProduct } from "../redux/carrSlice";
import { useDispatch } from "react-redux";

type Product = {
  id: number;
  ten_sp: string;
  gia: number;
  gia_km: number;
  hinh: string;
  ngay: Date;
};

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState<Product | null>(null);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/sp/${id}`)
      .then((data) => setProduct(data.data))
      .catch((error) => console.error("Error fetching product data:", error));
  }, [id]);

  console.log(product);
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-white shadow-md p-4">
        <Menu />
      </nav>
      <div
        id="chitiet"
        className="container mx-auto p-4 mt-4 bg-white shadow-lg rounded-lg"
      >
        <div id="row1" className="flex flex-col md:flex-row gap-6">
          <div
            id="trai"
            className="w-full md:w-1/2 flex justify-center items-center"
          >
            <img
              src={product?.hinh}
              alt={product?.ten_sp}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          <div id="phai" className="w-full md:w-1/2">
            <h1 className="text-3xl font-semibold mb-4 text-gray-800">
              {product?.ten_sp}
            </h1>
            <p className="mb-4 text-lg w-full flex items-center">
              <span className="font-medium text-gray-700">Giá gốc</span>
              <p className="text-red-500">
                {Number(product?.gia).toLocaleString("vi")} VNĐ
              </p>
            </p>
            <p className="mb-4 text-lg flex items-center">
              <span className="font-medium text-gray-700">Giá KM</span>:{" "}
              <p className="text-green-500">
                {Number(product?.gia_km).toLocaleString("vi")} VNĐ
              </p>
            </p>
            <p className="mb-4 text-lg">
              <span className="font-medium text-gray-700">Ngày</span>:{" "}
              {new Date(product?.ngay).toLocaleString("vi-VN")}
            </p>
            <div className="h-8 w-full">
              <button
                className="bg-cyan-500 text-white py-2 px-6 w-full rounded-xl"
                onClick={() => dispatch(addProduct(product))}
              >
                add cart
              </button>
            </div>
          </div>
        </div>
        <div id="row2" className="mt-8 text-xl font-semibold text-gray-800">
          product Liên quan
        </div>
      </div>
    </div>
  );
}

export default Detail;
