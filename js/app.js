const bulbasaur = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png";
const charmander =  "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png";
const squirtle = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png";

function injectPokemon(src, alt){
    document.body.insertAdjacentHTML(`beforeend`,
                                    `<img src="${src}" alt="${alt}">`);
}

function choosePokemon(event){
// first when making a function like this just print with log the event.target to see what we're actually targeting 
// we isolated the src
    // console.log(event.target.getAttribute(`src`));
    Cookies.set(`imageUrl`, event.target.getAttribute(`src`));
    location.href = `/pages/display.html`;
}

injectPokemon(bulbasaur, "Bulbasaur");
injectPokemon(charmander, "Charmander");
injectPokemon(squirtle, "Squirtle");

let images = document.querySelectorAll(`img`);

// use a loop that doesnt care about the order of things, we just want to do an operation on each of these
// 'of' is a reference to the full element, in place of the i= in other loops
// FOR OF loop (this loop becomes more relevent the deeper into things, in many cases we dont care about the order of things when we want to perform an operation on every element in a collection)
    // img here is just the variable we named, you need to put whatever variable name here
    for (img of images){
    img.addEventListener('click', choosePokemon);
}
// THESE TWO LOOPS ARE EQUIVALENT
// for(let i =0; i<images.length; i++){
//     images[i].addEventListener(`click`, choosePokemon)
// }

// WARMUP
// 1. Create a folder called CookieWarmupTwo, connect to Git/GitHub
// 2. In the folder, create the files index.html, display.html, app.js & display.js.
//   2.1. Link them together and ensure both pages have the Cookies script tag
// 3. Configure the debugger

// 4. Using JS, insert 3 images into the index.html
// YOU COULD DO IT THIS WAY BUT THE FUNCTION DOES IT BETTER AND WITH LESS CODE
// document.body.insertAdjacentHTML(`beforeend`,
//                                 `<img src="${bulbasaur}" alt="bulbasaur">`);
// document.body.insertAdjacentHTML(`beforeend`,
//                                 `<img id="img2" src= "${charmander}" alt= "charmander">`);
// document.body.insertAdjacentHTML(`beforeend`,
//                                 `<img id="img3" src= "${squirtle}" alt= "squirtle">`);

// 5. Using JS, add an event listener to each image inserted
//   5.1 Note, this means you will need to select those images from the page after you insert all 3


// 6. When an image is clicked, store its image src into a cookie called `image_url`.
//   6.1. Note this is just a string! Not JSON data


