import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAllProduct } from "../../../redux/carrSlice";

function ThanhToan() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state?.cart);
  const submitDuLieu = () => {
    if (username === "" || email === "") {
      alert("Nhap du thong tin ban oi");
      return;
    }
    const url = "http://localhost:3000/products/luudonhang";
    const data = {
      ho_ten: username,
      email,
    };

    axios.post(url, data).then((data) => {
      console.log(data?.data?.id_dh);
      if (data.data.id_dh < 0) {
        console.log("loi luu don hang", data.data);
      } else {
        const id_dh = data?.data?.id_dh;
        console.log("da luu don hang thanh cong", data.data);
        luudonhang(Number(id_dh), cart);
      }
    });

    const luudonhang = (id_dh: number, cart) => {
      const url = "http://localhost:3000/products/luugiohang";
      cart.forEach((sp) => {
        const data = { id_dh, id_sp: sp.id, so_luong: sp.soluong };
        axios.post(url, data).then((data) => luudata(data.data));
      });
    };

    const luudata = (data) => {
      console.log(data);
      dispatch(removeAllProduct());
    };
  };
  return (
    <form
      id="frmthanhtoan"
      className="max-w-lg mx-auto p-4 bg-white rounded shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Thanh toán đơn hàng</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Họ tên</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <button
          type="button"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => submitDuLieu()}
        >
          Lưu đơn hàng
        </button>
      </div>
    </form>
  );
}

export default ThanhToan;
