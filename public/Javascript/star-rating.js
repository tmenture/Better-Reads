// const starRatings = [...document.getElementsByClassName("rating__star")];
// const ratingResult = document.querySelector(".rating__result");

// printResult(ratingResult);

// function rating(stars, result) {
//    const activeStar = "rating__star fas fa-star";
//    const unactiveStar = "rating__star far fa-star";
//    const starsLength = stars.length;
//    let i;
//    stars.map((star) => {
//       star.onclick = () => {
//          i = stars.indexOf(star);

//          if (star.className.indexOf(unactiveStar) !== -1) {
//             printResult(result, i + 1);
//             for (i; i >= 0; --i) stars[i].className = activeStar;
//          } else {
//             printResult(result, i);
//             for (i; i < starsLength; ++i) stars[i].className = unactiveStar;
//          }
//       };
//    });
// }

// function printResult(result, num = 0) {
//    result.textContent = `${num}/5`;
// }

// rating(starRatings, ratingResult);