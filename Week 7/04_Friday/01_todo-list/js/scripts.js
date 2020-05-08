/**
 * What we will do today
 * 1. store the to-dos locally, so you do not have to start over after refreshing the page
 * 2. use "for of" instead of "for" loop 
 * 3. use array methods "sort" and "map" to populate the stored list
 * 4. use array method "reduce" to return the number of to do entries (done and not done)
 * 5. use array method "filter" to remove done to dos automatically form your list
 */

/**
 * declare variables for DOM elements, array to store values in and the error message
 */
const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

//declare an array variable and assign the localStorage data of the array key if it exists.
//In case it des not exists declare an empty array instead
let array = JSON.parse(localStorage.getItem("array")) || [];
let errormessage = "";

populateList(array);
/**
 * add event listeners for click on button and keypress "return" on input field
 */
button.addEventListener("click",addListItem);
input.addEventListener("keypress",checkIfReturnKey);

function populateList(information){
    ul.innerHTML = "";
    information.sort(/*function(item1,item2){
        //create custom sort function
    }*/).map(function(item, index){
        //add li with checkbox and content
        let content = `<input type="checkbox" name="item_${index}" id="item_${index}"><label for="item_${index}">${item}</label>`;
        let li = document.createElement("li");
        li.innerHTML = content;
        ul.appendChild(li);
    });
    //for loop to go through each item
    /*for(item of information){
        let li = document.createElement("li");
        li.innerText = item;
        ul.appendChild(li);
    }*/
}

/**s
 * function to check if the return key was pressed
 */
function checkIfReturnKey(event) {
    if(event.keyCode === 13){ //return key
        addListItem();
    }
}

/**
 * function to add item to list
 */
function addListItem(){
    if(isInputValid()){
        array.push(input.value);
        //store array locally using localStorage, localStorage can only store strings
        localStorage.setItem("array",JSON.stringify(array));
        populateList(array);
        clearInput();
    } else {
        clearInput();
        alert(errormessage);
    }
}

/**
 * function to check if input is valid
 */
function isInputValid(){
    input.value = input.value.trim();
    if(input.value !== ""){
        //change that to a for of loop
        //for(let i = 0; i < array.length; i++)
        for(item of array){
            if(item.toLowerCase() === input.value.toLowerCase()){
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

/**
 * function to clear the input value and focus on that input field
 */
function clearInput(){
    input.value = "";
    input.placeholder ="enter new item";
    input.focus();
}