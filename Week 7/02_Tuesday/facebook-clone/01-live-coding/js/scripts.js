/** 
 * 1. no prompts, add form to HTML > done
 * 2. on submitting the form using AJAX > done
 * 3. no database, check against json file of users > done
 * 4. if login is correct, remove form from DOM > done
 * 5. no newsfeed, check against json file of news > done
 * 6. add found news to DOM with AJAX > done
 */

//declare variables and assign new html form and form fields to it
const form = document.querySelector("form");
let fields = document.querySelectorAll("input");

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
//Promise.all expects an array of promises as input and returns an array of values as result
Promise.all([promiseFetchUsers, promiseFetchNews])
    .then((values) => {
        database = values[0];
        newsfeed = values[1];

        //add event listener for submit event of the form and call signIn function
        form.addEventListener("submit",signIn);
    });

//add event parameter to signIn function
function signIn(event){
    //make sure that the form is not submitted and the page is not reloaded
    event.preventDefault();

    //get username and password from form
    let user = "";
    let pass = "";

    //loop through fields to get value of input fields
    for(let i=0; i<fields.length;i++){
        if(fields[i].id === "user"){
            user = fields[i].value;
        }
        if(fields[i].id === "pass"){
            pass = fields[i].value;
        }
    }

    if(isUserValid(user,pass)){
        //login is correct, so remove the from from the DOM
        form.remove();
        let ulTag = document.createElement("ul");
        for(let i = 0; i < newsfeed.length; i++){
            let obj = newsfeed[i];
            //do not use document.write / add news to DOM in a different way
            let liTag = document.createElement("li");
            let content = `<h3>${obj.title}</h3><p>${obj.summary}</p>`;
            liTag.innerHTML = content;
            ulTag.appendChild(liTag);
        }
        document.querySelector("h1").insertAdjacentElement("afterend",ulTag);
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
