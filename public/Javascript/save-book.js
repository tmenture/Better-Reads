function saveBook() {
    const bookInfo = document.querySelector('.card-header').textContent;

    console.log(bookInfo);
}

const buttons = document.querySelectorAll('.saveBtn');

buttons.forEach((button) => {
    button.addEventListener('click', saveBook);
});