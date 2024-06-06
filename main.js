if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}

function Book(id, title, author, pages, read){
      this.id = id;
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.toogleRead = function () {
            this.read = !this.read;
      };
}

const library = {
      "books": [],
      "table": document.querySelector("book-table"),
      "add book": function () {  }
}