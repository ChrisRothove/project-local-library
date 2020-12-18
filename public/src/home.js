function totalBooksCount(books) {
  return books.length;
}

function totalAccountsCount(accounts) {
  return accounts.length;
}

function booksBorrowedCount(books) {
  return books.reduce((acc, book) => {
    if (!book.borrows[0].returned) acc += 1;
    return acc;
  }, 0);
}

function topFive(arr) {
  let sorted = arr.sort((itemA, itemB) => itemA.count > itemB.count ? -1 : 1)
  for (let max = sorted.length; max > 5; max = sorted.length) {
    sorted.pop();
  }
  return sorted;
}

function getMostCommonGenres(books) {
  const genreList = books.map((book) => book.genre);
  const mostCommonGenres = [];
  genreList.forEach((genre) => {
    const isInList = mostCommonGenres.some((item) => item.name === genre)
    if (isInList) {
      const GenreInList = mostCommonGenres.find((listing) => listing.name === genre)
      GenreInList.count += 1;
    } else {
      mostCommonGenres.push({name: genre, count: 1});
    }
    
  })
  return topFive(mostCommonGenres);
}

function getMostPopularBooks(books) {
  const mostPopularBooks = [];
  books.forEach((book) => {
    const {title, borrows} = book;
    mostPopularBooks.push({name: title, count: borrows.length});
  })
  return topFive(mostPopularBooks);
}

function getMostPopularAuthors(books, authors) {
  const mostPopularAuthors = [];
  authors.forEach((author) => {
    const borrowCount = books
      .filter((book) => book.authorId === author.id)
      .map((book) => book.borrows.length)
      .reduce((acc, borrows) => {
        return acc + borrows;
      }, 0)
    const fullName = author.name.first + " " + author.name.last;
    mostPopularAuthors.push({name: fullName, count: borrowCount});
  })
  return topFive(mostPopularAuthors);
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
