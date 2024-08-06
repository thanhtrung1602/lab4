import { Link } from "react-router-dom";

function HienSPTrongMotTrang({ spTrongTrang }) {
  return (
    <div
      id="data"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4"
    >
      {spTrongTrang.map((sp, index) => {
        return (
          <div
            className="sp border border-gray-200 rounded-lg p-4 bg-white shadow-md"
            key={index}
          >
            <h4 className="text-lg font-medium mb-2">
              <Link
                to={"/detail/" + sp.id}
                className="text-blue-500 hover:underline"
              >
                {sp["ten_sp"]}
              </Link>
            </h4>
            <img
              src={sp["hinh"]}
              alt={sp["ten_sp"]}
              className="w-full h-40 object-cover rounded-md"
            />
          </div>
        );
      })}
    </div>
  );
}

export default HienSPTrongMotTrang;
