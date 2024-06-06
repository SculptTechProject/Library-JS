function book(id, title, author, pages, read) {
  this.id = id;
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.toggleRead = function () {
    this.read = read;
  };
}

const library = {
  books: [],
  table: document.querySelector("#book-table tbody"),
  addBook: function (title, author, pages, read, id) {
    const book = new Book(
      (title = title),
      (author = author),
      (pages = pages),
      (read = read),
      (id = id)
    );
    this.books.push(book);
  },
  deleteBook: function (id) {
    // get index of book to delete based on id
    const index = this.books.findIndex((book) => {
      return book.id === id;
    });
    this.books.splice(index, 1);
  },
};

