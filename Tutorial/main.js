// String, Numbers, Boolean, null, undefined

const name = 'John';
const age = 30;4

// Concatenation 
console.log('My name is ' + name + ' and I am ' + age);
// Template String
const hello = 'My name is ${name} and I am ${age}';

console.log(hello);

const s = 'Hello World';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(''));

//Arrays - variables that hold multiple values

const numbers = new Array(1,2,3,4,5);

console.log(numbers);

const fruits = ['apples', 'oranges', 'pears', 10, true];

console.log(fruits);
console.log(fruits[1]);

fruits.push('mangos');
fruits.unshift('strawberries');
fruits.pop();

console.log(Array.isArray('hello'));
console.log(fruits.indexOf('oranges'));
console.log(fruits);


const person = {
    firstName : 'Andrius',
    lastName : 'Uzkuraitis',
    age : 28,
    hobbies : ['movies', 'sports', 'eating out'],
    address : {
        street : '3 Timberell',
        city : 'London',
        state : 'UK'
    }
}

console.log(person.address.city);

const { firstName, lastName, address: {city}} = person;

console.log(firstName);
console.log(city);

person.email = 'andyuz@gmail.com';

console.log(person);

const todos = [
    {
        id : 1,
        text : 'Take out trash',
        isCompleted : true
    },
    {
        id : 2,
        text : 'Meeting with boss',
        isCompleted : true
    },
    {
        id : 3,
        text : 'Dentis appt',
        isCompleted : false
    },
];

console.log(todos[2].text);


const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//For
for(let i=0; i<10; i++){
    console.log(i);
}

//While
let i = 0;
while(i<10){
    console.log('While Loop Number:'+i);
    i++;
}

for(let i=0; i<todos.length; i++){
    console.log('For Loop Number:'+i);
}

for(let todo of todos){
    console.log(todo.id);
} 

//forEach, map, filter
todos.forEach(function(todo){
    console.log(todo.text);
});

const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});

console.log(todoCompleted);

const x = '10';
if(x===10){
    console.log('x is 10>>check a type');
} else if(x==10){
    console.log('x is 10>>check a value')
}else {
    console.log('x is not 10');
}

function addNums(num1, num2){
    console.log(num1+num2);
}
addNums(5,4);

function addNums2(num1, num2){
   return num1+num2;
}
console.log(addNums2(3,3));


const addNums3 = (num1=1, num2=1) => num1+num2;
console.log(addNums3(5,5));

todos.forEach((todo) => console.log(todo));

//Constructo function
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);

    Person.prototype.getBirthYear = function(){
        return this.dob.getFullYear();
    }

    Person.prototype.getFullName = function(){
        return this.firstName+' '+this.lastName;
    }
}


//Instantiate object
const person1 = new Person('Andy','Uz','1992-06-02');
const person2 = new Person('Jiyeon','Moon','1993-08-14');

console.log(person1.dob);
console.log(person2.dob.getFullYear());
console.log(person2.getFullName());


//Class
class Person2{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return this.firstName + this.lastName;
    }
}

//Instantiate object
const person3 = new Person('Andy','Uz','1992-06-02');
const person4 = new Person('Jiyeon','Moon','1993-08-14');  

console.log(person3);