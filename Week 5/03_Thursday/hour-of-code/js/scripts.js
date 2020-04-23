/* split the big problem in small and solvable problem 
2. add password protection 
3. delete item
4. mark item as done
5. sort the list alphabetically
*/
let ul = document.querySelector("ul");
let input = document.querySelector("input");
let button = document.querySelector("button");
let array = [];
let errormessage = "";

button.addEventListener("click",addListItem);
input.addEventListener("keypress",checkIfReturnKey);

function checkIfReturnKey(event) {
    if(event.keyCode === 13){ //return key
        addListItem();
    }
}

function isInputValid(){
    input.value = input.value.trim();
    if(input.value !== ""){
        for(let i = 0; i < array.length; i++){
            if(array[i] === input.value){
                // it is a duplicate
                errormessage = "This to-do is already in your list.";
                return false;
            }
        }
        return true;
    }
    errormessage = "Please enter something to do."
    return false;
}

function addListItem(){
    if(isInputValid()){
        array.push(input.value);
        let li = document.createElement("li");
        li.innerText = input.value;
        ul.appendChild(li);
        clearInput();
    } else {
        clearInput();
        alert(errormessage);
    }
}

function clearInput(){
    input.value = "";
    input.placeholder ="enter new item";
    input.focus();
}