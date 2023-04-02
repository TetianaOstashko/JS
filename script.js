const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));

// function to check if the value is number or not
function checkIfNumber(enteredValue, message) {
  if (isNaN(enteredValue)) {
    const errorMsg = message ? message : "Please, enter a number";
    document.getElementById("result").innerHTML = errorMsg;
    return false;
  }
  return true;
}

// function to make gradient
function gradient(result, resultElement) {
  if (result > 5000 && result <= 100000) {
      resultElement.style.color = 'rgb(222, 122, 252)';
  } else if (result > 1000 && result <= 5000) {
      resultElement.style.color = 'rgb(233, 95, 125)';
    } else if (result > 100 && result <= 1000) {
      resultElement.style.color = 'rgb(245, 55, 75)';
  } else  if (result > 0 && result <= 100) {
     resultElement.style.color = 'rgb(255, 0, 0)';

  } else if (result <= 0 && result >= -100) {
      resultElement.style.color = 'rgb(206, 48, 55)';
  } else if (result < -100 && result >= -1000) {
      resultElement.style.color = 'rgb(228, 76, 22)';
  } else if (result < -1000 && result >= -50000) {
      resultElement.style.color = 'rgb(77, 15, 10)';
  } else if (result < -50000 && result >= -1000000) {
      resultElement.style.color = 'rgb(41, 3, 3)';
  }
}

//function to add color
function makeResultsColored(result) {
  const resultElement = document.getElementById("result");
  gradient(result, resultElement);
  resultElement.innerHTML = `Result is: ${result}`;
}

function sum() {
  if (checkIfNumber(num1) && checkIfNumber(num2)) {
    const result = num1 + num2;
    makeResultsColored(result);
  }
}
 
function subtraction() {
  if (checkIfNumber(num1) && checkIfNumber(num2)) {
    const result = num1 - num2;
    makeResultsColored(result);
  }
}
  
function multiplication() {
  if (checkIfNumber(num1) && checkIfNumber(num2)) {
    const result = num1 * num2;
    makeResultsColored(result);
  }
}
  
function division() {
  if (checkIfNumber(num1) && checkIfNumber(num2)) {
    if (num2 === 0) {
      document.getElementById("result").innerHTML = "ERROR, there's no way to divide a number by 0";
      document.getElementById("result").style.color = "red";
    } else {
      const result = num1 / num2;
      makeResultsColored(result);
    }
  }
}

// function to find Min & Max elements in array
const array = [233, 6, -9, 0, -252, 1025, 999, 125];
function findMin(array) {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  document.getElementById("resultMinMax").innerHTML = "Min element is: " + min;
}

function findMax(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  document.getElementById("resultMinMax").innerHTML = "Max element is: " + max;
}

