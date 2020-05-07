let form = document.getElementById("form");
let input = document.getElementById("input");
let button = document.getElementById("button");

reverseStr();
button.addEventListener("click", reverseStr);
form.addEventListener("submit", (event) => {event.preventDefault();});

function reverseStr() {
    if(input.value.trim()!==""){
        let wordArray = input.value.split(" ");
        let reverseString = wordArray.reverse().join(" ");
        let output = document.getElementById("output");
        output.innerHTML = reverseString;
    }
}