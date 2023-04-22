Array.prototype.pow = function(n) {
  const result = [];
  for (let i = 0; i < this.length; i++)  {
    result.push(Math.pow(this[i], n));
  }
  return result;
}

const arr = [2, 12, 25];
const arrPow = arr.pow(2);

console.log(arrPow);


function check() {
  alert("It works!");
}

Function.prototype.defer = function (n) {
  let fnctn = this;

  setTimeout(function() {
    fnctn();
  }, n)
}

check.defer(2000);