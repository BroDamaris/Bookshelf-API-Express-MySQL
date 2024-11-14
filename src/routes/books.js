const express = require("express");
const booksController = require("../controller/books");
const router = express.Router();

// menampilkan seluruh buku
router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBook);
router.get("/:idBook", booksController.getBookById);
router.put("/:idBook", booksController.updateBook);
router.delete("/:idBook", booksController.deleteBook);

module.exports = router;
