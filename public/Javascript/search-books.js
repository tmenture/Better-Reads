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

       .then(res => {

       console.log(res);

      displayBooks(res);

   })

   .catch((error) => console.error("Fetch Error:", error));

}


displayBooks = function(res) {
  
   const books = res.items
   for (var i = 0; i < books.length; i++) {
      const bookShelfEl = document.getElementById("book-list");
      const cardEl = document.createElement("div");
      cardEl.classList.add("card");
      const bookTitle = document.createElement("p");
      bookTitle.textContent= books[i].volumeInfo.title;
      bookTitle.classList.add("card-header")
      cardEl.appendChild(bookTitle);
      const bookAuthor = document.createElement("p"); 
      bookAuthor.textContent= books[i].volumeInfo.authors[0];
      bookAuthor.classList.add("card-body")
      cardEl.appendChild(bookAuthor);
      const bookDesc = document.createElement("p");
      bookDesc.textContent= books[i].volumeInfo.description;
      bookDesc.classList.add("card-body");
      cardEl.appendChild(bookDesc);
      saveToList = document.createElement("button");
      saveToList.textContent = "Add to List"
      saveToList.classList.add("save-book");
      cardEl.appendChild(saveToList);
      bookShelfEl.appendChild(cardEl); 
      document.querySelector('.save-book').addEventListener('click', saveBook);
    }
}


// button to do this on click 
function saveBook() {
  console.log(this)
 // console.log("you made it to search form handler")
 // for( var i =0; i<booksArr.length; i++) {
   // const title = $(this).title;
   // const author = $(this).author;
   // const id = booksArr[i].id;
   // const response = await fetch(`/search`, {
     //   method: 'POST',
     //   body: JSON.stringify({
      //      title,
      //      author,
            //description
      //  }),
      //  headers: {
       //     'Content-Type': 'application/json'
      //  }
     // });
     // if (response.ok) {
     //   console.log("heading to a new page")
     //  document.location.reload();
    //  } else {
    //    alert(response.statusText);
    //  }
  //}
}


document.querySelector('.book-form').addEventListener('submit', getBooks);






