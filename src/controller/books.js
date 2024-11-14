let nanoid;
(async () => {
  const { nanoid: importedNanoid } = await import("nanoid");
  nanoid = importedNanoid;
})();
const booksModel = require("../models/books");
const getCurrentTimestamp = new Date().toISOString();

const getAllBooks = async (req, res) => {
  const [data] = await booksModel.getAllBooks();
  try {
    if (data.length === 0) {
      res.status(200).json({
        status: "success",
        data: {
          books: [],
        },
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        books: data,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const addBook = async (req, res) => {
  const { body } = req;

  if (!body.name) {
    return res.status(400).json({
      status: "fail",
      message: "Gagal menambahkan buku. Mohon isi nama buku",
    });
  }
  if (body.readPage > body.pageCount) {
    return res.status(400).json({
      status: "fail",
      message:
        "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount",
    });
  }

  body.id = nanoid();
  body.finished = body.pageCount === body.readPage;
  body.insertedAt = getCurrentTimestamp;
  body.updatedAt = body.insertedAt;

  try {
    await booksModel.addBook(body);
    res.status(201).json({
      status: "success",
      message: "Buku berhasil ditambahkan",
      data: {
        bookId: body.id,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const getBookById = async (req, res) => {
  const { idBook } = req.params;
  try {
    const [checkId] = await booksModel.checkId(idBook);
    if (checkId.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: "Buku tidak ditemukan",
      });
    }

    const [data] = await booksModel.getBookById(idBook);
    res.status(200).json({
      status: "success",
      data: {
        book: data,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const updateBook = async (req, res) => {
  const { body } = req;
  const { idBook } = req.params;

  const [checkId] = await booksModel.checkId(idBook);
  if (checkId.length === 0) {
    return res.status(404).json({
      status: "fail",
      message: "Gagal memperbarui buku. Id tidak ditemukan",
    });
  }
  if (!body.name) {
    return res.status(400).json({
      status: "fail",
      message: "Gagal menambahkan buku. Mohon isi nama buku",
    });
  }
  if (body.readPage > body.pageCount) {
    return res.status(400).json({
      status: "fail",
      message:
        "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount",
    });
  }

  body.updatedAt = getCurrentTimestamp;
  body.finished = body.readPage === body.pageCount;

  try {
    await booksModel.updateBook(body, idBook);
    res.status(200).json({
      status: "success",
      message: "Buku berhasil diperbarui",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const deleteBook = async (req, res) => {
  const { idBook } = req.params;

  const [checkId] = await booksModel.checkId(idBook);
  if (checkId.length === 0) {
    return res.status(404).json({
      status: "fail",
      message: "Buku gagal dihapus. Id tidak ditemukan",
    });
  }

  try {
    await booksModel.deleteBook(idBook);
    res.status(200).json({
      status: "success",
      message: "Buku berhasil dihapus",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = {
  getAllBooks,
  addBook,
  getBookById,
  updateBook,
  deleteBook,
};
