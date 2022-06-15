function saveBook () {
    const bookTitle = "{{volumeInfo.title}}";
    const titleText = bookTitle.value;

    saveBook(titleText);
}

function addBookToList (titleText) {
    const saveList = document.getElementById("book-list");
    const listItem = document.createElement("li");

    listItem.textContent = `${new Date().toLocaleString("es-US")} - ${titleText}`;

    saveList.appendChild(listItem);
}

window.addEventListener('DOMContentLoaded', (event) => {
    const saveBtn = document.getElementById('saveBtn');

    saveBtn.addEventListener('click', saveBook);
});