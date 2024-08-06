import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  editProduct,
  removeAllProduct,
  removeProduct,
} from "../../../redux/carrSlice";
import Menu from "../../Menu";
import { useState } from "react";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  ten_sp: string;
  gia: number;
  gia_km: number;
  hinh: string;
  ngay: Date;
  soluong: number;
};

function Cart() {
  const { cart }: { cart: Product[] } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const [soLuong, setSoLuong] = useState(0);

  return (
    <div>
      <nav className="bg-white shadow-md p-4">
        <Menu />
      </nav>
      <div className="container mx-auto p-4">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="w-1/6 py-3 px-4">ID</th>
              <th className="w-1/6 py-3 px-4">Tên sản phẩm</th>
              <th className="w-1/6 py-3 px-4">Hình</th>
              <th className="w-1/6 py-3 px-4">Giá</th>
              <th className="w-1/6 py-3 px-4">Giá khuyến mãi</th>
              <th className="w-1/6 py-3 px-4">Số lượng</th>
              <th className="w-1/6 py-3 px-4">Tong</th>
              <th className="w-1/6 py-3 px-4">Chức năng</th>
              <th
                className="w-1/6 py-3 px-4"
                onClick={() => dispatch(removeAllProduct())}
              >
                Xoa tat ca
              </th>
            </tr>
          </thead>
          <tbody>
            {cart &&
              cart.map((product: Product) => (
                <tr key={product.id} className="text-center border-b">
                  <td className="py-3 px-4">{product.id}</td>
                  <td className="py-3 px-4">{product.ten_sp}</td>
                  <td className="py-3 px-4">
                    <img
                      src={product.hinh}
                      alt={product.ten_sp}
                      className="h-16 mx-auto"
                    />
                  </td>
                  <td className="py-3 px-4">
                    {Number(product.gia).toLocaleString("vi")} VND
                  </td>
                  <td className="py-3 px-4">
                    {Number(product.gia_km).toLocaleString("vi")} VND
                  </td>
                  <td className="py-3 px-4">
                    <input
                      type="text"
                      defaultValue={product.soluong}
                      className="border rounded py-1 px-2"
                      onChange={(e) => setSoLuong(Number(e.target.value))}
                    />
                  </td>
                  <td className="py-3 px-4">
                    {Number(product.gia * product.soluong).toLocaleString("vi")}{" "}
                    VND
                  </td>
                  <td className="py-3 px-4 flex justify-center">
                    <button
                      className="text-yellow-500 hover:text-yellow-700 mx-2"
                      onClick={() =>
                        dispatch(editProduct([product.id, soLuong]))
                      }
                    >
                      <EditIcon />
                    </button>
                    <button
                      onClick={() => dispatch(removeProduct(product.id))}
                      className="text-red-500 hover:text-red-700 mx-2"
                    >
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div>
        <Link to={"/thanhtoan"}>
          <span>Thanh Toan</span>
          <span>
            <ArrowForwardIcon />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
