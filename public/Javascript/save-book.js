// const { JSDOM } = require('jsdom');
// const { window } = new JSDOM( "" );
// const $ = require( "jquery" )( window );

function saveBook(event) {
    event.preventDefault();

    const bookInfo = document.querySelector('.card-header').textContent;

    console.log(bookInfo);
}

const buttons = document.querySelectorAll('.saveBtn');

buttons.forEach((button) => {
    button.addEventListener('click', saveBook);
});
// $(this).on('click', '#saveBtn', saveBook() {
    
// });