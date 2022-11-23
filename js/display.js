// 7. On the display page, show the image that was clicked.
// 8. Add a button that allows the user to clear the cookie and get sent back to the home page.
function clearCookie(){
    Cookies.remove(`imageUrl`);
    // /index.html is the ROOT so we can just put a slash and it will do the same
    location.href = `/`;
}

let src = Cookies.get(`imageUrl`);

document.body.insertAdjacentHTML(`afterbegin`, `<img src="${src}" alt="Your Pokemon">`);
document.getElementById(`backButton`).addEventListener(`click`, clearCookie);

// function
// attack player + another function attack enemy
// subtract damage from hp of whoever is being attacked
// have they lost? 0? if yes, they lost - add another function to deal with that
// display the new number and then save the new number in a cookie (doesnt matter order of which)

// when its being clicked, if no append to array
// *Research on append because we need to append (add to) - array