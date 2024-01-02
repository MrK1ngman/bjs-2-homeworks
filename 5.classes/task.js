class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }
  fix() {
    this.state *= 1.5;
  }
  set state(count) {
    if (count < 0) {
      this.state = 0;
    } else if (count > 100) {
      this.state = 100;
    } else {
      this._state = count;
    }
  }
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  super(name, releaseDate, pagesCount, state = 100, type = null) {
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  super(name, releaseDate, pagesCount, state = 100, type = null) {
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
    super(name, releaseDate, pagesCount, state = 100, type);
    this.type = "novel";
    this.author = author;
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
    super(name, releaseDate, pagesCount, state = 100, type);
    this.type = "fantastic";
    this.author = author;
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
    super(name, releaseDate, pagesCount, state = 100, type);
    this.type = "detective";
    this.author = author;
  }
}

class Library {
  constructor(name, books) {
    this.name = name;
    this.books = [];
  }
  
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  findBookBy(type, value) {
    return this.books.find(book => book[type] == value) || null;
  }
  giveBookByName(bookName) {
    const book = this.findBookBy('name', bookName);
    if (book) {
      this.books.splice(this.books.indexOf(book), 1);
    }
    return book;
  }
}
