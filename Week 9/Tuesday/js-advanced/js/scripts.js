/** Write a code snippet to get an array with the email addresses of all employees using a loop. */


//map > higher order function
let results = [];
for(employee of employees){
    results.push(employee.email);
}

results = employees.map(function(employee){
    return employee.email;
});

results = employees.map(employee => {
    return employee.email;
});

const callback = function(item){
    return item.email;
}

results = employees.map(callback);
//results = sales.map(callback);
//results = clients.map(callback);
console.log(results);

/*
const clickMe = function(){
    return "juhuu";
}
document.querySelector("button").addEventListener("click",clickMe);

document.querySelector("button").addEventListener("click",function(){
    return "juhuu";
});

const replaceText = function(original, replacement, source) {
    return function(source) {
      return source.replace(original, replacement);
    };
};

const src = "We all love to learn JavaScript.";
//We all hate to learn JavaScript
let changeThisText = replaceText("love","hate");
let hippifyThisText = replaceText("love","looooooove");
alert(hippifyThisText(src));
*/