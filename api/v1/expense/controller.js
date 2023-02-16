const { expense } = require("../../../models");
const { format, parse } = require("date-fns");
const pagination = require("../../services/pagination");
const attributes = [
  "id",
  "tanggal",
  "total_pengeluaran",
  "kategori",
  "deskripsi",
];
const getAllData = async (req, res) => {
  let limit = req.query.limit ? parseInt(req.query.limit) : null;
  let page = req.query.page ? (parseInt(req.query.page) - 1) * limit : null;
  try {
    const result = await expense.findAndCountAll({
      limit,
      offset: page,
      attributes,
    });
    const paginations = pagination(limit, page, result.count);
    const formatResult = await result.rows?.map((val) => {
      console.log(val.tanggal);
      return {
        id: val.id,
        tanggal: format(val.tanggal, "yyyy-MM-dd"),
        kategori: val.kategori,
        deskripsi: val?.deskripsi,
      };
    });
    console.log(result);
    res.status(200).json({
      message: "succes get data",
      formatResult,
      paginations,
    });
  } catch (error) {
    console.log(error);
  }
};

const createData = async (req, res, next) => {
  const { tanggal, total_pengeluaran, kategori, deskripsi } = req.body;
  try {
    const parsedDate = parse(tanggal, "yyyy-MM-dd", new Date());
    const formatedDate = format(parsedDate, "yyyy-MM-dd HH:mm:ss");
    const result = await expense.create({
      tanggal: formatedDate,
      total_pengeluaran,
      kategori,
      deskripsi,
    });

    res.status(201).json({ message: "succes create data", result });
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await expense.findOne({ where: { id }, attributes });
    const formatedDate = format(result.tanggal, "yyyy-MM-dd");
    const formatResult = {
      tanggal: formatedDate,
      total_pengeluaran: result.total_pengeluaran,
      kategori: result.kategori,
      deskripsi: result?.deskripsi,
    };
    !result
      ? res.status(404).json("data tidak ditemukan")
      : res
          .status(200)
          .json({ message: "succes get data", result: formatResult });
  } catch (error) {
    next(error);
  }
};
const update = async (req, res, next) => {
  const { id } = req.params;
  const { tanggal, total_pengeluaran, kategori, deskripsi } = req.body;
  const parsedDate = parse(tanggal, "yyyy-MM-dd", new Date());
  const formatedDate = format(parsedDate, "yyyy-MM-dd HH:mm:ss");

  try {
    const result = await expense.update(
      { tanggal: formatedDate, total_pengeluaran, kategori, deskripsi },
      { where: { id } }
    );
    !result
      ? res.status(404).json("data tidak ditemukan")
      : res.status(200).json({
          message: "succes update data",
          result: {
            tanggal: formatedDate,
            total_pengeluaran,
            kategori,
            deskripsi,
          },
        });
  } catch (error) {
    next(error);
  }
};
const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await expense.destroy({ where: { id } });
    !result
      ? res.status(404).json("data tidak ditemukan")
      : res.status(200).json({ message: "succes delete data" });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllData,
  createData,
  getOne,
  update,
  destroy,
};
