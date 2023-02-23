const db = require("../models");
const Quiz = db.quizzes;

// menambahkan data ke dalam tabel quiz
exports.create = async (req, res) => {
    try {
        const data = await Quiz.create(req.body)
        res.json({
            message: "Quiz berhasil dibuat!",
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
};

// menampilkan data semua data quiz sesuai model dari database

exports.getAll = async (req, res) => {
    try {
        const quizzes = await Quiz.findAll()
        res.json({
            message: "Quiz berhasil diambil",
            data: quizzes,
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
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })
        quiz.update(req.body, {
            where: {id}
        })
        res.json({
            message: `Data dengan id=${id} berhasil diubah.`,
            data: quiz,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Terjadi kesalahan saat mengambil quiz!",
            data: null,
        });
    }
};

// hapus data quiz berdasarkan id
exports.delete = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })

        quiz.destroy()

        res.json({
            message: "Quiz berhasil dihapus."
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "An error occurred while retrieving quiz",
            data: null,
        });
    }
};

// hapus data quiz berdasarkan id spesifik
exports.findOne = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })
        res.json({
            message: `Quiz dengan id=${id} berhasil di ambil.`,
            data: quiz,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Terjadi Kesalahan!",
            data: null,
        });
    }
};

// menampilkan data quiz berdasarkan kategori
exports.getByCategoryId = async (req, res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where : { 
            categoryId: id 
        }
    })
    res.json({
        message: `Quiz dengan kategori Id=${id} berhasil diambil.`,
        data: quizzes,
    });
};