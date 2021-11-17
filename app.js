class Book {
    constructor(title, author, readStatus) {
        this.title = title;
        this.author = author;
        this.readStatus = readStatus;
    }
    changeReadStatus () {
        if (this.readStatus === "read") {
            this.readStatus = "unread";
        } else if (this.readStatus = "unread") {
            this.readStatus = "read";
        }
    }

    deleteBook () {
        let index = myLibrary.indexOf(this);
        myLibrary.splice(index,1);
    }
}

const addBookToLibrary = function () {
    if ($title.value == "" || $author.value == "") {
        return;
    }
    let newBook = new Book($title.value, $author.value, $status.value) ;
    myLibrary.push(newBook);
}

const anotherBook = new Book("Weird Book", "Guido Rial", "read")
const astrophysicsForPeopleInAHurry = new Book("Astrophysics for People in a Hurry", "Neil deGrasse Tyson", "unread");
const ulysses = new Book("Ulysses", "James Joyce", "unread");

let myLibrary = [];
myLibrary.push(anotherBook, astrophysicsForPeopleInAHurry, ulysses)

const submitBtn = document.querySelector("#submitBtn");
const form = document.querySelector("form")
const bookTable = document.querySelector("#bookTable")
const $title = document.querySelector("#title");
const $author = document.querySelector("#author");
const $status = document.querySelector("#status");
const table = document.querySelector("table");

//Displays the book table
function render() {
    bookTable.innerHTML = "";
    myLibrary.forEach((book) => {
        const htmlBook =`
        <tr>
            <td id="bookTitle" data-book-title="${book.title}">${book.title}</td>
            <td>${book.author}</td>
            <td><button data-book-title="${book.title}" class ="status-button" id="statusBtn">${book.readStatus}</button></td>
            <td><button data-book-title="${book.title}" class="delete" id="deleteBtn">delete</button></td>
        </tr>
      `;
      bookTable.insertAdjacentHTML("afterbegin", htmlBook);
    });
}

const cleanForm = function () {
    $title.value = "";
    $author.value = "";
}

form.addEventListener("submit", (e) => {
    //Prevent actual submit 
    e.preventDefault();
    addBookToLibrary();
    render();
    cleanForm();
})

render();

//de aca para abajo dudo, no andan los ultimos dos botones




//This console.logs the book titles
//const bookTitles = document.querySelectorAll("[data-title]");
let deleteBtn = document.querySelectorAll(".delete");
deleteBtn.addEventListener("click", deleteAssociatedBook())

function deleteAssociatedBook(event) {
    const associatedBookTitle = event.target.dataset.bookTitle;
  
    console.log(
      "I am a button and my ID is associated with a book to be deleted."
    );
  
    console.log("Button title is: " + associatedBookTitle);
  
    const bookToBeDeleted = document.querySelector(
      `[data-title="${associatedBookTitle}"]`
    );
  
    console.log(bookToBeDeleted);
  }

//bookTitles.addEventListener("click", deleteAssociatedBook());




//returns the titles of all the books
//const iterateBooks = function () {
//    bookTitles.forEach(el => {
//        console.log(el.innerText);
//   })
//}

//iterateBooks();


//returns the index of the book
const findBook = function (myLibrary, title) {
    if (myLibrary.length === 0 || myLibrary === null) {
        return
    }
    for (Book of myLibrary)
        if (Book.title === title) {
            return myLibrary.indexOf(Book);
        }
} 

//let readStatusBtn = document.getElementsByClassName(".status-button")


//

//bookTable.addEventListener("click", (e) => {
//    if (el.classList.contains("delete")) {
//        console.log ("hi");
//    }
//    if (el.classList.contains("status-button")) {
//        console.log("bye")
//    }
//})

//deleteBtn.forEach(button => {
//    button.addEventListener("click", (e) => {
        //Tengo un array con las key value de Book.title
        //Cuando apreto delete quiero que se compare todos los Book.title con los el.innerText de iterateBooks() correspondiente a la tabla que toque, si coincide es .deleteBook().render(); y listo



//    })
//})

//readStatusBtn.forEach(button => {
//    button.addEventListener("click", (e) => {
//        myLibrary.find(Book => Book.title === el.dataset.title).changeReadStatus();
//        console.log("bye");
//    })
//})

