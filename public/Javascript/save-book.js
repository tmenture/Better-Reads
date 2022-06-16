const savedBooks = [];

async function saveBook() {

    const title = document.querySelector('.book-title').value;
    const author = document.querySelector('.book-author').value;

    const response = await fetch(`/api/books`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            author
        }),
        headers: {
            'Content-Type': 'application.json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.saveBtn').addEventListener('click', saveBook);

module.exports = saveBook();