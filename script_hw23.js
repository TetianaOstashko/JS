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



