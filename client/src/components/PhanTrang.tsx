import { useState } from "react";
import ReactPaginate from "react-paginate";
import HienSPTrongMotTrang from "./HienSpTrongMotTrang";
function PhanTrang({ listSP, pageSize }: { listSp: []; pageSize: number }) {
  const [fromIndex, setfromIndex] = useState(0);
  const toIndex = fromIndex + pageSize;
  const spTrong1Trang = listSP.slice(fromIndex, toIndex);
  const tongSoTrang = Math.ceil(listSP.length / pageSize);
  const chuyenTrang = (event) => {
    const newIndex = (event.selected * pageSize) % listSP.length;
    setfromIndex(newIndex);
  };
  return (
    <div>
      <HienSPTrongMotTrang spTrongTrang={spTrong1Trang} />
      <ReactPaginate
        nextLabel=">"
        previousLabel="<"
        pageCount={tongSoTrang}
        pageRangeDisplayed={5}
        onPageChange={chuyenTrang}
        containerClassName="flex items-center justify-center mt-4 space-x-2"
      />
    </div>
  );
} //PhanTrang

export default PhanTrang;
