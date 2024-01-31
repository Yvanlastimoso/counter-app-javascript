const btnIncrement = document.querySelector(".btn-increment");
const btnDecrement = document.querySelector(".btn-decrement");
const btnChange = document.querySelector(".btn-change");
const textValue= document.querySelector("h2");
let counter = 0;

btnIncrement.addEventListener("click", function() {
      counter++;
      textValue.textContent = counter;
});
btnDecrement.addEventListener("click", function() {
    if (counter > 0){
    counter--;
    textValue.textContent = counter;
};
});

btnChange.addEventListener("click", function () {
    textValue.style.backgroundColor = "violet";
    btnDecrement.style.backgroundColor = "Red";
    btnIncrement.style.backgroundColor = "yellow";
    btnChange.style.backgroundColor = "orange";
    


});