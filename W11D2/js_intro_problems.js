//PHASE ONE

function madLib(verb, adjective, noun) {
  console.log(
    `We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}`)
}
// madLib('make', 'best', 'guac'); //=> "We shall MAKE the BEST GUAC."


function isSubstring(searchString, subString) {
  console.log(searchString.includes(subString))
}
// isSubstring("time to program", "time") //true
// isSubstring("Jump for joy", "joys") //false


//------------------------------------------------------------------------------------
//PHASE TWO 

function fizzBuzz(array) {
  let newArr = [];
  array.forEach( num => {
    if ((num % 3 === 0) ^ (num % 5 === 0)) {
      newArr.push(num);
    }
  });
  console.log(newArr)
}
// fizzBuzz([2,3,5,8,13,15,20,30,40]) //[3,5,20,40]


function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
// isPrime(2) //true
// isPrime(10) //false 
// isPrime(15485863) //true 
// isPrime(3548563) //false


function sumOfNPrimes(n) {
  let sum = 0;
  let count = 0;
  let i = 2;
  while (count < n) {
    if (isPrime(i)) {
      sum += i;
      count += 1;
    }
    i += 1;
  }
  console.log(sum);
  return sum;
}
// sumOfNPrimes(0) //0
// sumOfNPrimes(1) //2
// sumOfNPrimes(4) //17