async function saveBook(event) {
    event.preventDefault();

    
    let bookCapture = this.parentElement.querySelector('.title').textContent;
    let authorCapture = this.parentElement.querySelector('.author').textContent;

    console.log(bookCapture, authorCapture);
    
    const response = await fetch('/api/books/dashboard', {
        method: 'POST',
        body: JSON.stringify({
            bookCapture,
            authorCapture,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

let buttons = document.querySelectorAll('.saveBook');

buttons.forEach((button) => {
    button.addEventListener('click', saveBook);
});