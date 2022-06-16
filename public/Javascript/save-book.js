function saveBook(req, res) {

    const bookInfo = document.querySelector('.book-info');
    // const author = document.querySelector('.book-author');

    const url = "https://www.googleapis.com/books/v1/volumes?q=" + req.query;

   fetch(url).then((res) => res.json()).then(function(data) {
    let savedBook = data.results;
    savedBook.map(function(books) {
        let list = document.createElement('li');
        list.innerHTML = `${books.index}`;

        bookInfo.appendChild(list);
    })
   })

    if (response.ok) {
        response.render('saved-books.handlebars',);
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.saveBtn').addEventListener('click', saveBook);