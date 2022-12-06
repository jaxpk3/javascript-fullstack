/*
    ARCHIVO PRINCIPAL JS DEL FRONTEND
    Capturamos los eventos del input de el formulario en el archivo index.html

*/

import "./styles/app.css";

import { Book } from "./models/Book.js";
import { UI } from "./UI.js";

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  ui.renderBooks();
});

const bookForm = document.getElementById("book-form");

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = bookForm["title"].value;
  const author = bookForm["author"].value;
  const isbn = bookForm["isbn"].value;

  const image = document.getElementById("image").files;

  const formData = new FormData();
  // formData.append("name", value); 
  formData.append("image", image[0]); //image[0] --> ya que subimos una sola imagen y es la unica que capturamos
  formData.append("title", title);
  formData.append("author", author);
  formData.append("isbn", isbn);

  for (var pair of formData.entries()) {
    console.log(pair[0] + ", " + pair[1]);
  }

  // Instatiating the UI
  const ui = new UI();

  // // New Book Object
  const book = new Book(title, author, isbn);

  // // Validating User Input
  if (title === "" || author === "" || isbn === "") {
    ui.renderMessage("Please fill all the fields", "error", 3000);
  } else {
    // Pass the new book to the UI
    ui.addANewBook(formData);
    ui.renderMessage("New Book Added Successfully", "success", 2000);
  }
});

document.getElementById("books-cards").addEventListener("click", (e) => {
  const ui = new UI();
  if (e.target.classList.contains("delete")) {
    ui.deleteBook(e.target.getAttribute("_id"));
    ui.renderMessage("Book Deleted Successfully", "success", 3000);
  }
  e.preventDefault();
});
