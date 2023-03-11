const main = document.querySelector("main");

//created an image folder inside my project which has my images/gifs saved in them
//frontCard Images in an array to be able to grab frontCard easier and set winning conditions easier in my opinion rather than referencing my image sources from html which adds more to my code and I did not like that I had to reference back to my html so much.. redid my code half way through due this issue and running into debugging issues from type-o's.... creating an array of my frontCards (w/ img sources) like we did for tic-tac-toe squares made more since to me
const frontCardSrc = () => [      //accessing item here & imgSrc later on in some functions
    {imgSrc: './images/forrest.png', name: "Black and white image of a spooky forest"},
    {imgSrc: './images/candle.gif', name: 'Lit candle gif'},
    {imgSrc: './images/traffic.png', name: 'Black and white image of traffic"></img'},
    {imgSrc: './images/doll.png', name: 'Creepy babydoll image black and white"></img'},
    {imgSrc: './images/eyeballGif.gif', name: 'Gif of moving eyeball'},
    {imgSrc: './images/sheetGhost.png', name: 'Image of a person wearing a sheet like a ghost'},
    {imgSrc: './images/tax.png', name: 'Tax form with audit stamp on it, image black and white'},
    {imgSrc: './images/smile.png', name: 'Hand drawn smiley face, black and white image'},
    {imgSrc: './images/forrest.png', name: "Black and white image of a spooky forest"},
    {imgSrc: './images/candle.gif', name: 'Lit candle gif'},
    {imgSrc: './images/traffic.png', name: 'Black and white image of traffic"></img'},
    {imgSrc: './images/doll.png', name: 'Creepy babydoll image black and white"></img'},
    {imgSrc: './images/eyeballGif.gif', name: 'Gif of moving eyeball'},
    {imgSrc: './images/sheetGhost.png', name: 'Image of a person wearing a sheet like a ghost'},
    {imgSrc: './images/tax.png', name: 'Tax form with audit stamp on it, image black and white'},
    {imgSrc: './images/smile.png', name: 'Hand drawn smiley face, black and white image'},
];

//random card function using arrow function
const randomImg = () => {
    const frontCardHolder = frontCardSrc();
    //sort() function --- for example return a,b order if neg value and b,a order if positive value - therefore get shuffled/randomized due to the minus 0.5 and the math.random function
    frontCardHolder.sort(() => Math.random() - 0.5)
    return frontCardHolder
};

//function to generate a card
const cardSelector = () => {
    const cardHolder = randomImg();
    //connect cards from js to html below (I found it easier to do it like this vs pulling my frontCards from html to js...tried both ways but got stuck doing it the other way)
    //creating a forEach loop to iterate through the function for each card "item"
    cardHolder.forEach((item) => {
        const card = document.createElement("div");
        const frontCards = document.createElement("img");
        const backCards = document.createElement("div");
        card.classList = "card";
        frontCards.classList = "front";
        backCards.classList = "back";
        //insert info into the cards
        frontCards.src = item.imgSrc;
        card.setAttribute('name', item.name);
        //attaching cards to <main> in html w/ appendChild
        main.appendChild(card);
        card.appendChild(frontCards);
        card.appendChild(backCards);

    
        card.addEventListener("click", (e)=> {
            card.classList.toggle("flipTheCards");
            checkMatch(e);
        });
    });
};


const checkMatch = (e) => {
    const clicked = e.target; //checking the data clicked and target is the element we clicked on
    clicked.classList.add("flipped"); //adding a class of flipped when clicked so i can call flipped cards later on
    const flippedCards = document.querySelectorAll('.flipped');
    if(flippedCards.length === 2){
        if(flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")) {
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
            });
        } else { 
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                setTimeout(() => 
                card.classList.remove("flipTheCards"), 500);
            })
        } if (frontCardSrc.length === 16) {
            alert("You won!") ///i cannot get this if statement to work unfortantely 
        }
    };
}; 

cardSelector();
