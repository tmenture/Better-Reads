async function saveBook(event) {
    event.preventDefault();

    const bookInfo = document.querySelector('.card-header').textContent;

    console.log(bookInfo);
    
}

let buttons = document.querySelectorAll('#save-book');

buttons.forEach((button) => {
    button.addEventListener('click', saveBook);
});