 async function searchFormHandler(event) {
  event.preventDefault();

  const bookInput = document.querySelector('input[type="search"]').value;

  console.log(bookInput)
 
  
  document.location.replace('/search?book=' + bookInput);
    
   }



 document.querySelector('.book-form').addEventListener('submit', searchFormHandler);

