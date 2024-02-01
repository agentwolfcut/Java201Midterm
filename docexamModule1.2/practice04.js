// 4 
// Instruction: - Create a 'Book' object and a 'Library' object for 'Practice 3'. Use a constructor and 
// methods in both classes. 
// Initiate code: 

let book1 = new Book("Harry Wick", "Conan", 345, "Sci-Fi");
let library1 = new Library("Awesome Library");
library1.addBook(book1);
console.log(library1.getBooksByGenre("Sci-Fi"));
console.log(library1.getTotalPagesByGenre("Sci-Fi"));
