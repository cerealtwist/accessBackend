const db = require("../models");
const Category = db.categories;
const Quiz = db.quiz;

// menambahkan data ke dalam tabel category
exports.create = async (req, res) => {
    try {
        const data = await Category.create(req.body)
        res.json({
            message: "Category berhasil dibuat!",
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
};

// menampilkan data semua data category sesuai model dari database

exports.getAll = async (req, res) => {
    try {
        const categories = await Category.findAll()
        res.json({
            message: "Category berhasil diambil",
            data: categories,
            include: [{model: Quiz, as: "quiz"}]
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
};

// update data berdasarkan id
exports.update = async (req, res) => {
    const id = req.params.id
    try {
        const category = await Category.findByPk(id, { rejectOnEmpty: true })
        category.update(req.body, {
            where: {id}
        })
        res.json({
            message: `Data dengan id=${id} berhasil diubah.`,
            data: category,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Terjadi kesalahan saat mengambil category!",
            data: null,
        });
    }
};

// hapus data category berdasarkan id
exports.delete = async (req, res) => {
    const id = req.params.id
    try {
        const category = await Category.findByPk(id, { rejectOnEmpty: true })

        category.destroy()

        res.json({
            message: "Category berhasil dihapus."
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "An error occurred while retrieving category",
            data: null,
        });
    }
};

// cari kategori berdasarkan id
exports.findOne = async (req, res) => {
    const id = req.params.id
    try {
        const category = await Category.findByPk(id, { rejectOnEmpty: true })
        res.json({
            message: `Category dengan id=${id} berhasil di ambil.`,
            data: category,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Terjadi Kesalahan!",
            data: null,
        });
    }
};