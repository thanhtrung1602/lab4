import { Link } from "react-router-dom";
import { listsp } from "../data";
function Sanphamxemnhieu(props: { sotin: number }) {
  return (
    <div className="">
      {listsp.slice(0, props.sotin).map((sp) => (
        <Link to={"/detail/" + sp.id_sp} key={sp.id_sp}>
          <div key={sp.id_sp} className="py-[5px] px-2.5 border-b text-base">
            {sp.ten_sp}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Sanphamxemnhieu;
