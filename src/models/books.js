const dbPool = require("../config/database");

const getAllBooks = () => {
  const SQLQuery = "SELECT id, name, publisher FROM books";
  return dbPool.execute(SQLQuery);
};

const addBook = (body) => {
  const SQLQuery = `INSERT INTO books (id, name, year, author, summary, publisher, pageCount, readPage, finished, reading, insertedAt, updatedAt) VALUES ('${body.id}', '${body.name}', ${body.year}, '${body.author}', '${body.summary}', '${body.publisher}', ${body.pageCount}, ${body.readPage}, ${body.finished}, ${body.reading}, '${body.insertedAt}', '${body.updatedAt}');`;
  return dbPool.execute(SQLQuery);
};

const getBookById = (idBook) => {
  const SQLQuery = `SELECT * FROM books WHERE id='${idBook}'`;
  return dbPool.execute(SQLQuery);
};

const updateBook = (body, idBook) => {
  const SQLQuery = `UPDATE books 
  SET name = '${body.name}', year = ${body.year}, author = '${body.author}', 
  summary = '${body.summary}', publisher = '${body.publisher}',pageCount = ${body.pageCount}, 
  readPage = ${body.readPage}, finished = ${body.finished}, reading = ${body.reading}, updatedAt = '${body.updatedAt}' 
  WHERE id = '${idBook}'`;
  return dbPool.execute(SQLQuery);
};

const deleteBook = (idBook) => {
  const SQLQuery = `DELETE FROM books WHERE id='${idBook}'`;
  return dbPool.execute(SQLQuery);
};

const checkId = (idBook) => {
  const SQLQuery = `SELECT id FROM books WHERE id = '${idBook}'`;
  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllBooks,
  addBook,
  getBookById,
  updateBook,
  deleteBook,
  checkId,
};
