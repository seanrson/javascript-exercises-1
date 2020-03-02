function add (a,b) {
	return a+b;
}

function subtract (a, b) {
	return a-b;
}

function sum (array) {
	let total = 0;
	for (i=0; i<array.length; i++)
		total+= array[i];
	return total;
}

function multiply (array) {
  if (array.length == 0) return;
  let total = 1;
  for (i=0; i<array.length; i++)
	total*= array[i];
  return total;

}

function power(a, b) {
	return a**b;
}

function factorial(n) {
	if (n < 0)
    return "Integer must be positive!"
  else if (n == 0) // base case
    return 1;
  return n*factorial(n - 1); // recursive call
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
  power,
	factorial
}