function Book(title, author, readStatus) {
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
}
//Array to store books
let myLibrary = [];

const submitBtn = document.querySelector("#submitBtn");
const readStatusBtn = document.getElementById("#statusBtn")
const deleteBtn = document.querySelector("#deleteBtn");
const form = document.querySelector("form").addEventListener("submit", (e) => {
    //Prevent actual submit 
    e.preventDefault();
    addBookToLibrary();
    render();
    cleanForm();
})

const bookTable = document.querySelector("#bookTable")
const $title = document.querySelector("#title");
const $author = document.querySelector("#author");
const $status = document.querySelector("#status");
const table = document.querySelector("table");

table.addEventListener("click", (e) => {
    const currentTarget = e.target.parentNode.parentNode.childNodes[1];
    if (e.target.classList.contains("status-button")) {
      changeReadStatus(findBook(myLibrary, currentTarget.innerText));
    }
    render();
  });

//Displays the book table
function render() {
    bookTable.innerHTML = "";
    myLibrary.forEach((book) => {
        const htmlBook =`
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td><button class ="status-button" id="statusBtn">${book.readStatus}</button></td>
            <td><button class="delete" id="deleteBtn">delete</button></td>
        </tr>
      `;
      bookTable.insertAdjacentHTML("afterbegin", htmlBook);
    });
}

const addBookToLibrary = function () {
    if ($title.value == "" || $author.value == "") {
        return;
    }
    const newBook = new Book($title.value, $author.value, $status.value) ;
    myLibrary.push(newBook);
}

const cleanForm = function () {
    $author.value = "";
    $title.value = "";
}

//function to delete books from the array
function deleteBook(el) {
    if (el.classList.contains("delete")){
        el.parentElement.parentElement.remove();
        myLibrary.splice(findBook(myLibrary, Book.title), 1);
    }
}

function targetBook (el) {
    if (el.classList.contains("status-button")) {
        console.log("hi");
    }
}

function changeReadStatus (Book) {
    if (Book.readStatus === "read") {
        Book.readStatus = "unread";
    } else Book.readStatus = "read";
}

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


//Event listener that changes the read status or deletes a book
bookTable.addEventListener("click", (e) => {

    deleteBook(e.target);
    cleanForm();
})

const anotherBook = new Book("Weird Book", "Guido Rial", "read")
const astrophysicsForPeopleInAHurry = new Book("Astrophysics for People in a Hurry", "Neil deGrasse Tyson", "unread");

myLibrary.push(anotherBook);
myLibrary.push(astrophysicsForPeopleInAHurry);

render();
