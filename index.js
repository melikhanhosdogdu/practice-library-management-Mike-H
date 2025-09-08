class LibraryItem {
  constructor(title, id) {
    this.title = title;
    this.id = id;
    this.isAvailable = true;
  }

  checkOut() {
    if (this.isAvailable) {
      this.isAvailable = false;
      return `${this.title} has checked out.`;
    }
    return `${this.title} is not available`;
  }

  returnItem() {
    this.isAvailable = true;
    return `${this.title} has returned.`;
  }
}

class Book extends LibraryItem {
  constructor(title, id, author, genre) {
    super(title, id);
    this.author = author;
    this.genre = genre;
  }
}

class DVD extends LibraryItem {
  constructor(title, id, director, duration) {
    super(title, id);
    this.director = director;
    this.duration = duration;
  }
}

class Magazine extends LibraryItem {
  constructor(title, id, issueNumber, publisher) {
    super(title, id);
    this.issueNumber = issueNumber;
    this.publisher = publisher;
  }
}

// Test
const book1 = new Book("1984", 1, "George Orwell", "Dystopian");
const dvd1 = new DVD("Inception", 2, "Christopher Nolan", "148 min");
const mag1 = new Magazine("Tech Today", 3, 42, "Tech Press");

console.log(book1.checkOut());
console.log(dvd1.checkOut());
console.log(mag1.returnItem());

console.log(book1.author, book1.genre);
console.log(dvd1.director, dvd1.duration);
console.log(mag1.issueNumber, mag1.publisher);
