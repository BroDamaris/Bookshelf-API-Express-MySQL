require("dotenv").config();
const express = require("express");
const middlewareLogRequest = require("./middleware/logs");
const booksController = require("./routes/books");
const app = express();
const PORT = process.env.PORT;

app.use(middlewareLogRequest);
app.use(express.json());
app.use("/books", booksController);

app.listen(PORT, () => {
  console.log(`Server berhasil berjalan di running di port ${PORT}`);
});
