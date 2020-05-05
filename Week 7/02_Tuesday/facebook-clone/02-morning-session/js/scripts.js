/** 
 * 1. no prompts, add form to HTML
 * 2. on submitting the form use AJAX
 * 3. no database, check against json file of users
 * 4. if login is correct, remove form from DOM
 * 5. no newsfeed, check against json file of news
 * 6. add found news to DOM with AJAX
 */

//declare variables and assign new html form and form fields to it
const form = document.querySelector("form");
let fields = document.querySelectorAll("input");

//declare empty array variables for our api fetch results
let database = [];
let newsfeed = [];

//declare string variable for the error message
let msg = "";

//create a promise to fetch the users 
const promiseFetchUsers = new Promise((resolve, reject) => {
    //use the fetch API to get and parse json file of fake users
    fetch("https://raw.githubusercontent.com/pixelastic/fakeusers/master/data/final.json")
        .then(response => response.json())
        .then(data => {
            //loop through the users to only store username and password in our array variable
            for(let i = 0; i < data.length; i++){
                let person = {
                    username: data[i].username,
                    password: data[i].password
                };
                database.push(person);            
            }
        //return our users as success == resolve
        resolve(database);
    });
});

//create a promise to fetch the news 
const promiseFetchNews = new Promise((resolve, reject) => {
    //use the fetch API to get and parse json file of fake news
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            //loop through the users to only store username and password in our array variable
            for(let i = 0; i < data.length; i++){
                let news = {
                    title: data[i].title,
                    summary: data[i].body
                };
                newsfeed.push(news);            
            }
        
        //return our users as success == resolve
        resolve(newsfeed);
    });
});

//Use Promise.all to wait for both fetch calls to be resolved, before listening to the submit event.
Promise.all([promiseFetchNews, promiseFetchUsers]).then((values) => {
    newsfeed = values[0];
    database = values[1];
    //all our data is loaded, add event listener here
    form.addEventListener("submit",signIn);
  });

//function to signIn: remove old parameters from functions and add the event parameter instead
function signIn(event){
    //make sure that the form is not submitted and page is not reloaded.
    //page reload is the default action of a form, with preventDefault() you can prevent it.
    event.preventDefault();

    //check if the values of fields are correct login data
    if(isUserValid(fields)){
        //login is correct, remove the login form from DOM
        form.remove();
        //call the loadNews function to add news to the DOM
        loadNews();
    } else {
        //login is not correct, alert a feedback and let them try another time
        alert(msg);
    }
}

//function to add news of the feed to the DOM
function loadNews(){
    //create an <ul> as parent for the news feed
    let ul = document.createElement("ul");

    //loop through the newsfeed to access each single oject inside
    for(let i = 0; i < newsfeed.length; i++){
        let obj = newsfeed[i];
        //create a <li> tag as wrapper for that oject
        let li = document.createElement("li");
        //add HTML content to the wrapper 
        li.innerHTML = `<h2>${obj.title}</h2><p>${obj.summary}</p>`;
        //add <li> tag to <ul> tag
        ul.appendChild(li);
    }
    //after the for loop add the <ul> directly after the title and before the script tag
    document.body.querySelector("h1").insertAdjacentElement("afterend",ul);
}

//function to check if user is valid. Parameter are the form fields
function isUserValid(login){ 
    //declare variables for login details and output boolean
    let isUserValid = false; 
    let usr = "";
    let pw = "";

    //loop through the form fields
    login.forEach(function(field){
        //if field is empty, give an error message, return false and leave the function
        if(field.value.trim()===""){
            msg = "Please fill in your login details";
        }
        //assign the values of the form fields to our new variables
        if(field.id === "user"){
            usr=field.value;
        }
        if(field.id === "pass"){
            pw=field.value;
        }
    });

    //if the temporary variables are still empty, login data is empty => return false
    if(pw === "" && usr === ""){
        return isUserValid;
    }
      
    //loop through the users and check each single object against the login details
    database.forEach(function(user){  
        if(usr === user.username && pw === user.password) { 
            isUserValid = true;
        } else {  
            msg = "Your login details are not correct.";          
        }
    });
    return isUserValid;
}
