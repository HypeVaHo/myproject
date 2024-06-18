let memeNode = document.querySelector(`#meme`);
let memNode = document.querySelector(`#mem`);
let mem1Node = document.querySelector(`#mem1`);
memeNode.addEventListener(`click`, function () {
memNode.classList.remove("d-none");
mem1Node.classList.remove("d-none");
memeNode.classList.add("d-none");
});

