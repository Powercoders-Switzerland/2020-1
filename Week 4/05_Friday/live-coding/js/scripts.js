//document.write(hello("Kosai"));

function hello(name){
    return "hello " + name;
}

//document.write(hello("Susanne"));

function person(name, age, isMarried){
    this.name = name; 
    this.age = age;
    this.isMarried = isMarried;
    this.hello = function() {
      return "Hello " + this.name;
    }
}; 

var susanne = new person("Susanne", 38, false);
var kosai = new person();
var hikmat = new person();

console.log(susanne.age);

susanne.isMarried = true;
susanne.age=39;
susanne.gender = "female";

console.log(susanne.gender);
delete susanne.gender;
//person is function and .name returns name of the function
document.write(person.name);
document.write(person.name.length);

//susanne = null;

console.log(Object.keys(susanne));
console.log(Object.values(susanne));


var user = {};
console.log(user);
user.age = 38;
console.log(user);

var listOfColors = ["pink","yellow","green"];
console.log(listOfColors[2]);

var numbers = [4,8,2,9];
console.log(numbers);

var list = [2, "some text", false, undefined, true];

var listOfObjects = [
    susanne,
    new person("Kaan")
];

console.log(listOfObjects[0]);
console.log(listOfObjects[0].name);

var listOfArrays = [
    numbers,list
];

console.log(listOfArrays);
console.log(listOfArrays[1][1]);