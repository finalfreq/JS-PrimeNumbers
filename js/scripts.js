var isPrime = function(number) {
  if (number < 2) {
    return false
  }
  var isPrime = true

  for (var x = 2; x <= Math.sqrt(number); x++) {
   if (number % x === 0) {
     isPrime = false
   }
 }
  return isPrime
}


var primeNumbers = function(number) {
 var primes = []
  for(var i = 2; i <= number; i++) {
    if (isPrime(i)) {
      primes.push(i)
    }
  }
    debugger;
  return primes;
}

primeNumbers
