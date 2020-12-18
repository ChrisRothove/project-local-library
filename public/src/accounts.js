function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => 
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
}

function numberOfBorrows({id}, books) {
  let booksBorrowed = 0;
  books.forEach((book) => 
    book.borrows.forEach((entry) => {
      if (entry.id === id) booksBorrowed += 1;
    } 
    )
  )
  return booksBorrowed;
}


function getBooksPossessedByAccount({ id }, books, authors) {
  //create variable for all owned books by filtering through each book's borrows
  const ownedBooks = books.filter((book) => 
    !book.borrows[0].returned && book.borrows[0].id === id)
  console.log(ownedBooks)
  const bookList = [];
  //for each book, find matching author and generate new array.
  ownedBooks.forEach((book) => {
    const matchingAuthor = authors
    .find((author) => author.id === book.authorId)
  //deconstruct book
  const { id, title, genre, authorId, borrows } = book;
  bookList.push({id, title, genre, authorId, author: matchingAuthor, borrows})
  });
  return bookList;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
