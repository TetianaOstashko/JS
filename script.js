/*
// Homework lesson 22
let firstNumber = prompt('Please enter first number');
let secondNumber = prompt('Please enter second number');
let sum = Number(firstNumber) + Number(secondNumber);
let deduction = firstNumber - secondNumber;
let multiplication = firstNumber * secondNumber;
let division = firstNumber / secondNumber;

if ((firstNumber == null || firstNumber == "") || (secondNumber == null || secondNumber == "")) {
    alert ('Error message');
} else if (secondNumber == 0) {
    alert ('Sum:' + sum + '\n' );
    alert ('Deduction: ' + deduction + '\n' );
    alert ('Multiplication: ' + multiplication + '\n' );
    alert ('Error message');  
} else if (Number(firstNumber) < Number(secondNumber)) {
   let desition = confirm ('Are you sure you want to continue?');
   if (desition == true) {
    alert ('Sum:' + sum + '\n' );
    alert ('Deduction: ' + deduction + '\n' );
    alert ('Multiplication: ' + multiplication + '\n' );
    alert ('Division: ' + division);
   } else {
    alert ('Sum:' + sum + '\n' );
    alert ('Multiplication: ' + multiplication + '\n' );
    alert ('Division: ' + division);
   }     
} else {
    alert ('Sum:' + sum + '\n' );
    alert ('Deduction: ' + deduction + '\n' );
    alert ('Multiplication: ' + multiplication + '\n' );
    alert ('Division: ' + division);
}
*/

/*
// Homework lesson 23
// Creat array
const array = [
    2,
    45,
    80,
    'Hi there!',
    356,
    12,
    111,
    75,
    true,
    30,
    256,
    false,
    100,
];

// Script to find sum of elements in array
let sum = 0;
for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") { //check type of element in array
        sum+=array[i];
    }
}
alert (sum);

// Script to fin min & max elements in array
let min = array[0], max = array[0]; // creat two variables as min and max with initial values as the first element of the array
for (let i = 1; i < array.length; i++) {

    if (array[i] > max && typeof array[i] === "number") {
        max = array[i];
    }

    if (array[i] < min && typeof array[i] === "number") {
        min = array[i];
    }
}
alert (max);
alert (min);

// Display half of triangle 
let totalRows = 5;
let element = ""; // Variable carries the final element in string format
for (let row = 1; row <= totalRows; row++) // Loop runs for `rows` no. of times
{  
  for (let col = 1; col <= row; col++) { 
    element += "#";
  }
  element += "\n"; // Add a new line character after contents of each line
}
alert(element);
*/


/*
 //Homework lesson 24

// function to get the result of adding one number to another  
function sum(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return Number(num1) + Number(num2); 
    }
}
alert(sum(25, 54));

// function to get the result of subtracting one number from another
function deduction(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 - num2; 
    }
 }
 alert(deduction(30, 15));

// function to get the result of multiplying one number by anotheк
 function multiplication(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 * num2;
    }
 }
alert(multiplication(5, 25));

// function to get the result of dividing one number by another
function division(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 / num2;
    }
}
alert(division(81, 9));


// function to find min and max elements in array
function getMinElement (elements) {
    let minElement = elements[0];
    for (let i = 0; i < elements.length; i++) {
        if (typeof elements[i] === "number") {
            if (elements[i] < minElement){
                minElement = elements [i];
            }
        }
    };
    return minElement;
}
function getMaxElement (elements) {
    let maxElement = elements[0];
    for (let i = 0; i < elements.length; i++){
        if (typeof elements[i] === "number") {
            if (elements[i] > maxElement){
                maxElement = elements[i];
            }
        }
    };
    return maxElement;
}

let elements = [-125, 0, 'Hello!', 225, 34, 48, 123, true, 13, false];
let minElement = getMinElement (elements);
let maxElement = getMaxElement (elements);

alert('Min element is ' +  minElement);
alert('Max element is ' + maxElement);
*/

//Homework lesson 25

//Function to check if object is empty
function isEmpty(object) {
    return Object.keys(object).length === 0;
}

//Object which includes user's info
const user = {
    name: 'Tetiana',
    age: '28',
    sayHello: function() {
       alert('Привіт, я ' + this.name + '. Мені ' + this.age + ' років.');
    }
};

function isEmpty(object) {
    return Object.keys(object).length === 0;
}

user.sayHello();

//Object which calculates sum and mul of 2 entered numbers
const calc = {
    sum() {
        return this.firstNum + this.secondNum;
    },

    mul() {
        return this.firstNum * this.secondNum;
    },

    ask () {
        this.firstNum = +prompt('Enter the first number');
        this.secondNum = +prompt('Enter the second number');
    }
};
calc.ask();
alert(calc.sum());
alert(calc.mul());
