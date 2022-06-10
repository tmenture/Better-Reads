function getBooks(event) {  
    event.preventDefault();
    let api = "https://www.googleapis.com/books/v1/volumes?q=harrypotter"
    console.log(api)
     fetch(api)
    .then(function(response){
        var books = response.data.items
            var booksArr = [];
            for (var i = 0; i < books.length; i++) {
                var image;
                if (!bookInfo.imageLinks) {
                    image = "https://via.placeholder.com/300/400";
                } else {
                    image = bookInfo.imageLinks.thumbnail;
                }
                booksArr.push({
                    title: bookInfo.title,
                    author: bookInfo.authors,
                    description: bookInfo.description,
                    id: books[i].id,
                    image: image,
                });
            }
    }).catch(function(error){
        console.log(error)
    });
};

document.querySelector('.search-btn').addEventListener('click', getBooks());