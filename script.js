function Accumulator(initialValue) {
    this.num = initialValue;
  
    this.increment = function() {
        this.num++;
    };

    this.decrement = function() {
        this.num--;
    };
}

function CancelableAccumulator(initialValue) {
    Accumulator.call(this, initialValue); // creates prototype of Accumulator
  
    // returns initial value     
    this.clear = function() {
      this.num = initialValue; 
    };
}

let userInput = Number(prompt("Please enter initial value:"));
  
//usage of Accumulator
let acc = new Accumulator(userInput);
console.log(acc.num); //shows initial value entered by user

acc.increment();
console.log(acc.num); //shows initial value incremented by 1

acc.increment();
console.log(acc.num); //shows  previous value incremented by 1

acc.decrement();
console.log(acc.num); //shows previous value decremented by 1

acc.decrement();
console.log(acc.num); //shows previous value decremented by 1

acc.decrement();
console.log(acc.num); //shows previous value decremented by 1

//usage of CancelableAccumulator  
let cancelAcc = new CancelableAccumulator(userInput);
console.log(cancelAcc.num); 

cancelAcc.increment();
console.log(cancelAcc.num); 

cancelAcc.decrement();
console.log(cancelAcc.num); 

cancelAcc.clear();
console.log(cancelAcc.num); 