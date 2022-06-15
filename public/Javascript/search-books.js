 async function searchFormHandler(event) {
  event.preventDefault();

  const bookInput = document.querySelector('input[type="search"]').value;

  console.log(bookInput)
 
       //const response = await fetch(('/search?book=' + bookInput), {
       //  method: 'get',
       //});
   
      // if (response.ok) {
        document.location.replace('/search?book=' + bookInput);
      // } else {
      //   alert(response.statusText);
      // }
   }



 document.querySelector('.book-form').addEventListener('submit', searchFormHandler);

