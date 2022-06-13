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

      displayBooks(data);

   })

   .catch((error) => console.error("Fetch Error:", error));

}


displayBooks = function(response) {
  
   const bookShelfEl = response.items
    var booksArr = [];
   for (var i = 0; i < books.length; i++) {
      booksArr.push({
         title: books[i].volumeInfo.title,
          author: books[i].volumeInfo.authors[0],
         // description: books[i].volumeInfo.description,
          id: books[i].id,
        });
    }
}


// button to do this on click 
async function SaveBook(event) {
  console.log("you made it to search form handler")
<<<<<<< HEAD
  for( var i =0; i < booksArr.length; i++) {
    const title = booksArr[i].title;
    const author = booksArr[i].author;
=======
  for( var i =0; i<booksArr.length; i++) {
    const title = $(this).title;
    const author = $(this).author;
    const id = booksArr[i].id;
>>>>>>> 66edad1b891f4905d343f813d8724e487f79cc14
    const response = await fetch(`/search`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            author,
            //description
        }),
        headers: {
            'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        console.log("heading to a new page")
       document.location.reload();
      } else {
        alert(response.statusText);
      }
  }
}


<<<<<<< HEAD
document.querySelector('.book-form').addEventListener('submit', getBooks);
=======
document.querySelector('.book-form').addEventListener('submit', getBooks);

document.querySelector('.save-book').addEventListener('click',saveBook);






>>>>>>> 66edad1b891f4905d343f813d8724e487f79cc14
