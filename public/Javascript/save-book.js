function saveBook(req, res) {
    const bookInfo = document.querySelector('.card-header').textContent;

    console.log(bookInfo);
}

document.querySelector('.saveBtn').addEventListener('click', saveBook);