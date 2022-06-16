function saveBook(event) {
    event.preventDefault();

    let bookInfo = document.querySelector('.card-header').textContent;

    console.log(bookInfo);
}

let buttons = document.querySelectorAll('.saveBtn');

buttons.forEach((button) => {
    button.addEventListener('click', saveBook);
});