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
} else if (firstNumber < secondNumber) {
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









