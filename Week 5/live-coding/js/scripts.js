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

var array = ["Banana", "Apples", "Oranges", "Blueberries"];
console.log(array[2]);
//array.shift();
array.splice(0,1);
array.sort();
array.push("Kiwi");
array.splice(0,1);
array.reverse();
console.log(array);

// check if user login is correct then show news feed.

const obj = {
    name: "Susanne",
    age: 38,
    experience: 13
  }
  
  
  const { name, age } = obj;
  let {experience } = obj;

 // alert(name);
 // alert(age);
 // alert(experience);
//let username = prompt("What is your user name?");
//let password = prompt("What is your password?");
//signIn(username,password);

function signIn(user,pass){
    if(isUserValid(user,pass)){
        console.log(newsfeed);
        for(let i = 0; i < newsfeed.length; i++){
            let obj = newsfeed[i];
            /*Object.keys(obj).forEach(function(news){
                document.write(`${newsfeed[i][news]}<br>`);
                document.write(obj[news]+"<br>");
            });*/
            Object.values(obj).forEach(function(news){
                document.write(news+"<br>");
            });
        }
    } else {
        alert("Your login details are not correct.");
    }
}

// Mark / secretive
function isUserValid(usr,pw){
    /*for(let i = 0;i < database.length;i++){    
        if(usr === database[i].username && pw === database[i].password) {
            return true;
        }  
    }*/
    let isUserValid = false;
    database.forEach(function(user){  
        if(usr === user.username && pw === user.password) {  
            isUserValid = true;
        } 
    });
    console.log(isUserValid);
    return isUserValid;
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

