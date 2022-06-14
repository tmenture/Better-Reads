var bestSellers = function () {
    const api = ("https://api.nytimes.com/svc/books/v3/lists/current/")

  axios.get(api)

   .then(res => {

       console.log(res);
   })

   .catch((error) => console.error("Fetch Error:", error));

};

