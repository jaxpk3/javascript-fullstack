/*
      Clase que nos permite interactuar con nuestra API REST. Esta clase va a tener métodos y esos métodos los vamos a poder reutilizar.

      A lo que requiera un tiempo de ejecucion lo trabajamos con funciones async await.
      para que se tome su tiempo para realizar el trabajo.

      Un servicio es una clase con metodos que podemos reutilizar en toda nuestra aplicacion.

*/


export class BookService {
  constructor(URL) {
    this.URI = '/api/books';
  }

  async getBooks() {
    const response = await fetch(this.URI);
    const books = await response.json();
    return books;
  }

  async postBook(book) {
    const res = await fetch(this.URI, {
      method: "POST",
      body: book,
    });
    const data = await res.json();
  }

  async deleteBook(bookId) {
    const res = await fetch(`${this.URI}/${bookId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "Delete",
    });
    const data = await res.json();
    console.log(data);
  }
}
