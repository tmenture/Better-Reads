function saveBook(event) {
    event.preventDefault();

    const bookInfo = document.querySelector('.card-header').textContent;

    console.log(bookInfo);
}

const buttons = document.querySelectorAll('.saveBtn');

// buttons.forEach((button) => {
//     button.addEventListener('click', saveBook);
// });

$(document).on('click', '.card-header', saveBook() {
    $(this).closest('.card-header').data();
});