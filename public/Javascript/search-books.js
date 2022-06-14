var getBooks = function (event) {
     event.preventDefault();
 
     const bookInput = document.querySelector('input[type="search"]').value;
     console.log(bookInput);
     const api = ("https://www.googleapis.com/books/v1/volumes?q=" + bookInput)
 
   axios.get(api)
 
    .then(res => {
 
        console.log(res);
        searchFormHandler(res);
    })
 
    .catch((error) => console.error("Fetch Error:", error));
};

displayBooks = function(response) {
  const books = response.items
  for (var i = 0; i < books.length; i++) {
     const bookShelfEl = document.getElementById("searchedBooks");
     const bookTitle = document.createElement("p");
     bookTitle.textContent= books[i].volumeInfo.title;
     bookShelfEl.appendChild(bookTitle);
     const bookAuthor = document.createElement("p"); 
     bookAuthor.textContent= books[i].volumeInfo.authors[0];
     bookShelfEl.appendChild(bookAuthor);
     const bookDesc = document.createElement("p");
     bookDesc.textContent= books[i].volumeInfo.description;
     bookShelfEl.appendChild(bookDesc);
  }
}

async function searchFormHandler(res) {
  const books = res.data.items
  console.log(books)
    for (var i = 0; i < books.length; i++) {
      const book_title = books[i].volumeInfo.title;
      const book_author = books[i].volumeInfo.authors[0];
      const book_desc = books[i].volumeInfo.description;
     
      const response = await fetch('/search', {
        method: 'post',
        body: JSON.stringify({
          book_title,
          book_author,
          book_desc
        }),
        headers: { 'Content-Type': 'application/json' }
      });
   
      if (response.ok) {
        console.log("good job")
      } else {
        alert(response.statusText);
      }
    }
}

document.querySelector('.book-form').addEventListener('submit', getBooks);