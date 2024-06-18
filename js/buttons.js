let buttonNode = document.querySelector(`#button`);
let butNode = document.querySelector(`#hidebutton`);
let but1Node = document.querySelector(`#hidebutton1`);
let but2Node = document.querySelector(`#hidebutton2`);
let but3Node = document.querySelector(`#hidebutton3`);
let but4Node = document.querySelector(`#hidebutton4`);
let but5Node = document.querySelector(`#hidebutton5`);
buttonNode.addEventListener(`click`, function () {
butNode.classList.remove("d-none");
but1Node.classList.remove("d-none");
but2Node.classList.remove("d-none");
but3Node.classList.remove("d-none");
but4Node.classList.remove("d-none");
but5Node.classList.remove("d-none");
});