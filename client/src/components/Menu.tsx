import { Link } from "react-router-dom";
import { listloai } from "../data";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../App.css";
function Menu() {
  return (
    <ul className="flex item-center justify-center">
      <li className="p-3 text-black">
        <Link to="/">Trang chủ</Link>
      </li>
      {listloai.map((loai) => (
        <li key={loai.id_loai} className="p-3 text-black">
          <Link to={"/loai/" + loai.id_loai}>{loai.ten_loai}</Link>
        </li>
      ))}
      <li className="p-3 text-black">
        <Link to="/gioithieu"> Giới thiệu </Link>{" "}
      </li>
      <li className="p-3 text-black">
        <Link to={"/cart"}>
          <ShoppingCartIcon />
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
