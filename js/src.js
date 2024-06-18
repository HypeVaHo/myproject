let buttonNode = document.querySelector(`#button`);
let button1Node = document.querySelector(`#button-1`);
let hideNode = document.querySelector(`.card-text`);
let cardNode = document.querySelector(`#card-2`);
buttonNode.addEventListener(`click`, function(){
hideNode.classList.toggle("d-none");
});
button1Node.addEventListener(`click`, function(){
    cardNode.classList.toggle("d-none");
})
    