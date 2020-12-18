const { findAccountById } = require("./accounts");

function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const loanedBooks = books.filter((book) => 
    book.borrows[0].returned === false);
  const returnedBooks = books.filter((book) => 
    book.borrows[0].returned === true);
  return [loanedBooks, returnedBooks];
}

function getBorrowersForBook({borrows}, accounts) {
  const borrowers = [];
  borrows.forEach((entry) => {
    if (borrowers.length >= 10) {return borrowers}
    const accountMatch = accounts.find((account) => {
      return entry.id === account.id;
    });
    borrowers.push({...entry, ...accountMatch});
});
return borrowers;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
