var express = require("express");
var router = express.Router();
const db = require("../config/connect");
const productController = require("../app/controllers/ProductController");
/* GET users listing. */
router.get("/spmoi/:sosp", (req, res) => {
  let sosp = parseInt(req.params.sosp || 6);
  if (sosp <= 1) sosp = 6;
  let sql = `SELECT id, ten_sp, gia , gia_km, hinh, ngay, luot_xem FROM san_pham WHERE an_hien = 1 ORDER BY ngay desc LIMIT 0, ?`;
  db.query(sql, sosp, (err, data) => {
    if (err) res.status(200).json({ "thong bao": "loi lay san pham", err });
    else res.status(200).json(data);
  });
});

router.get("/sp/:id", function (req, res) {
  let id = parseInt(req.params.id || 0);
  if (isNaN(id) || id <= 0) {
    res.json({ "thong bao": "Không biết sản phẩm", id: id });
    return;
  }
  let sql = `SELECT id, ten_sp, gia, gia_km, hinh, ngay, luot_xem
    FROM san_pham WHERE id = ?`;
  db.query(sql, id, (err, data) => {
    if (err) res.json({ thongbao: "Lỗi lấy 1 sp", err });
    else res.json(data[0]);
  });
});

router.get("/sptrongloai/:id_loai", function (req, res) {
  let id = parseInt(req.params.id_loai);
  if (isNaN(id) || id <= 0) {
    res.json({ "thong bao": "Không biết sản phẩm", id_loai: id });
    return;
  }
  let sql = `SELECT id, ten_sp, gia, gia_km, hinh, ngay FROM san_pham WHERE id_loai = ? and an_hien = 1 order by id desc`;
  db.query(sql, id, (err, data) => {
    if (err) res.json({ thongbao: "Lỗi lấy 1 sp", err });
    else res.json(data);
  });
});

router.get("/loai/:id_loai", function (req, res) {
  let id = parseInt(req.params.id_loai);
  if (isNaN(id) || id <= 0) {
    res.json({ "thong bao": "Không biết sản phẩm", id_loai: id });
    return;
  }
  let sql = `SELECT id, ten_loai FROM loai WHERE id = ? `;
  db.query(sql, id, (err, data) => {
    if (err) res.json({ thongbao: "Lỗi lấy 1 sp", err });
    else res.json(data[0]);
  });
});

router.post("/luudonhang", (req, res) => {
  let data = req.body;
  let sql = `INSERT INTO don_hang SET ?`;
  db.query(sql, [data], (err, data) => {
    if (err) res.json({ thongbao: "Lỗi lấy 1 sp", err });
    else {
      id_dh = data.insertId;
      res.status(200).json({ id_dh: id_dh, "thong bao": "Da luu don hang" });
    }
  });
});

router.post(`/luugiohang/`, (req, res) => {
  let data = req.body;
  let sql = `INSERT INTO don_hang_chi_tiet SET ?`;
  db.query(sql, [data], (err, data) => {
    if (err) res.json({ thongbao: "Lỗi luu sp", err });
    else
      res
        .status(200)
        .json({ "thongbao: ": "Da luu sp vao db", id_sp: data.id_sp });
  });
});

router.get("/", productController.index);

module.exports = router;
