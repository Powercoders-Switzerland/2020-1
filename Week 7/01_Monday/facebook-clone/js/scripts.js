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

//add event listener for submit event of the form and call signIn function
form.addEventListener("submit",signIn);

//declare empty array variables for our api fetch results
let database = [];
let newsfeed = [];

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
//Here we stopped on Monday: add Promise.all

function signIn(user,pass){
    if(isUserValid(user,pass)){
        for(let i = 0; i < newsfeed.length; i++){
            let obj = newsfeed[i];
            Object.values(obj).forEach(function(news){
                document.write(news+"<br>");
            });
        }
    } else {
        alert("Your login details are not correct.");
    }
}

function isUserValid(usr,pw){
    let isUserValid = false;
    database.forEach(function(user){  
        if(usr === user.username && pw === user.password) {  
            isUserValid = true;
        } 
    });
    return isUserValid;
}
