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

//const array = [];
//NEW: check if locally stored array exists. If not declare empty array
let array = JSON.parse(localStorage.getItem('array')) || [];

let errormessage = "";

console.log(getNumberOfItems(array));
populateList(array);
/**
 * add event listeners for click on button and keypress "return" on input field
 */
button.addEventListener("click",addListItem);
input.addEventListener("keypress",checkIfReturnKey);
/** new event listener on list items to see if input was checked */
ul.addEventListener('click', toggleDone);

/**
 * function to check if the return key was pressed
 */
function checkIfReturnKey(event) {
    if(event.keyCode === 13){ //return key
        addListItem(); //return key was pressed, so add item to the list
    }
}

/**
 * function to check if input is valid
 */
function isInputValid(){
    input.value = input.value.trim(); //first remove whitespace in front and after the string
    if(input.value !== ""){ //1. check: if entry is NOT empty
        //for(let i = 0; i < array.length; i++){ //loop through the array of stored items
        for(item of array){
            /** NEW: for of loop, shorter and easier way to loop through array */
            if(item === input.value){ //2. check: if entry is already in to do list
                // it is a duplicate
                errormessage = "This to-do is already in your list.";
                return false;
            }
        }
        return true;
    }
    errormessage = "Please enter something to do.";
    return false;
}

/**
 * function to add item to list
 */
function addListItem(){
    if(isInputValid()){
        /** NEW: item has 2 properties now: value of input as text and boolean if to do is done */
        const item = {
            text: input.value,
            done: false
        };
        array.push(item); //first push item object to the array for storage
        /** NEW: store the array locally on the browser */
        localStorage.setItem('array', JSON.stringify(array));
        /** NEW: call function populateList to sort all items alphabtically and list them online */
        populateList(array);
        clearInput(); 
    } else {
        clearInput();
        alert(errormessage);
    }
}

/** NEW: function to populate list using the methods sort() and map() */
function populateList(items){
    ul.innerHTML = items.sort(function(a,b){
        let textA=a.text.toLowerCase(), textB=b.text.toLowerCase();
        if (textA < textB) //sort string ascending
            return -1; 
        if (textA > textB)
            return 1;
        return 0;
    }).map((item, i) => { //arrow function, it is also possible the way above
      return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked' : ''} />
          <label for="item${i}">${item.text}</label>
        </li>
      `;
    }).join('');
}

/** NEW: function to toggle if item is done */
function toggleDone(event){
    if (!event.target.matches('input')) return; // Check if click target is an input, if not do nothing
    const el = event.target; // Get the target of the click event
    const index = el.dataset.index; // Get the index of the list
    array[index].done = !array[index].done; // Toggle the done boolean of this element in the array (find it by index)
    //array = removeIfDone(array); // Set array to filteres array
    localStorage.setItem('array', JSON.stringify(array)); // Store it again in localStorage
    populateList(array); // Re-populate the list
}

/** NEW: function to remove item it is done */
function removeIfDone(items){
    return items.filter(function(item){
        console.log(item.done);
        return item.done == false;
    });
}

/** NEW: function to reduce array to get number of done items and not done items */
function getNumberOfItems(items) {
    return items.reduce((list, item) => {
        const status = item.done;
        if(list.hasOwnProperty(status)){
          list[status] = ++list[status];
        } else {
          list[status] = 1;
        }
        return list;
    }, {});
  }

/**
 * function to clear the input value and focus on that input field
 */
function clearInput(){
    input.value = "";
    input.placeholder ="enter new item";
    input.focus();
}