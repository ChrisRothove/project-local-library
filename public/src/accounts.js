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

function getBooksPossessedByAccount(account, books, authors) {
  
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
