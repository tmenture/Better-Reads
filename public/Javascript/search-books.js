var getBooks = function (event) {
    event.preventDefault();

    const bookInput = document.querySelector('input[type="search"]').value;
    console.log(bookInput);
    const api = ("https://www.googleapis.com/books/v1/volumes?q=" + bookInput)

    fetch(api)

       .then((response) => {

           if (response.ok) {

               return response.json();

           } else {

               throw new Error("Network Response Error");

           }
       })

       .then(data => {

       console.log(data);

      sendToDataBase(data);

   })

   .catch((error) => console.error("Fetch Error:", error));

}


sendToDataBase = function(response) {
  console.log("you made it to send to database")
    var books = response.items
    var booksArr = [];
   for (var i = 0; i < books.length; i++) {
      booksArr.push({
         title: books[i].volumeInfo.title,
          author: books[i].volumeInfo.authors,
          description: books[i].volumeInfo.description,
          id: books[i].id,
        });
    }
    searchFormHandler(booksArr);
}



async function searchFormHandler(booksArr) {
  console.log("you made it to search form handler")
  for( var i =0; i<booksArr.length; i++) {
    const title = booksArr[i].title;
    const author = booksArr[i].author;
    const response = await fetch(`/search`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            author
        }),
        headers: {
            'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        console.log("heading to a new page")
       // document.location.reload();
      } else {
        alert(response.statusText);
      }
  }
}


document.querySelector('.book-form').addEventListener('submit', getBooks);






