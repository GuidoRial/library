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

const anotherBook = new Book("Check out my GitHub", "GuidoRial", "unread")
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

//Returns the index of the book I gave it
function findBook (myLibrary, title) {
    if (myLibrary.length === 0 || myLibrary === null) {
        return;
    }
    for (Book of myLibrary)
        if (Book.title === title) {
            return myLibrary.indexOf(Book)
        }
}

//Displays the book table
function render() {
    bookTable.innerHTML = "";
    myLibrary.forEach((book) => {
        const htmlBook =`
        <tr>
            <td id="bookTitle" data-book-title="${book.title}">${book.title}</td>
            <td>${book.author}</td>
            <td><button data-book-title="${book.title}" class="status-button">${book.readStatus}</button></td>
            <td><button data-book-title="${book.title}" class="delete">delete</button></td>
        </tr>
      `;
      bookTable.insertAdjacentHTML("afterbegin", htmlBook);
    });

    let deleteBtn = document.querySelectorAll(".delete");
    let readStatusBtn = document.querySelectorAll(".status-button")

    deleteBtn.forEach(button => {
        button.addEventListener("click", (e) => {
            //Both the button and the book title have a data attribute called [data-book-title="${book.title}"]
            //This variable associates the data attributes you have both in the button and in the title and returns the book title
            let associatedBookTitle = e.target.dataset.bookTitle;
            //Then you can use it in a function to return it's position
            console.log("button title is: " + associatedBookTitle);
            myLibrary[findBook(myLibrary, associatedBookTitle)].deleteBook();
            render();
        });
    });

    readStatusBtn.forEach(button => {
        button.addEventListener("click", (e) => {
            let associatedBookTitle = e.target.dataset.bookTitle;
            console.log("button title is: " + associatedBookTitle);
            myLibrary[findBook(myLibrary, associatedBookTitle)].changeReadStatus();
            render();
        });
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

