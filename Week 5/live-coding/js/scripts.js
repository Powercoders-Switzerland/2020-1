let database = [
    {
        username: "Susanne",
        password: "supersecret"
    },
    {
        username: "Mark",
        password: "secretive"
    }
];

let newsfeed = [
    {
        author: "Mark",
        title: "This is Mark's title",
        summary: "This is the summary of Mark's news entry."
    },
    {
        author: "Hussam",
        title: "This is Hussams's title",
        summary: "This is the summary of Hussam's news entry."
    },
    {
        author: "Andrina",
        title: "This is Andrina's title",
        summary: "This is the summary of Andrina's news entry."
    }
];

// check if user login is correct then show news feed.

//let username = prompt("What is your user name?");
//let password = prompt("What is your password?");
//signIn(username,password);

function signIn(user,pass){
    if(isUserValid(user,pass)){
        console.log(newsfeed);
    } else {
        alert("Your login details are not correct.");
    }
}

// Mark / secretive
function isUserValid(usr,pw){
    f/*or(let i = 0;i < database.length;i++){    
        if(usr === database[i].username && pw === database[i].password) {
            return true;
        }  
    }  */
    database.forEach(function(user){   
        if(usr === user.username && pw === user.password) {
            return true;
        } 
    });
    return false;
}

/* while */
let counter = 0;
while(counter > 0){
    console.log(counter);
    counter--;
};
console.log("after while loop");


/* do while */
counter = 0;
do {
    console.log(counter);
    counter--;
} while(counter > 0);
console.log("after do while loop");


/* for loop */
for(let counter = 10;counter > 0;counter--){
    console.log(counter);
}

