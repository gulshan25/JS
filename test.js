// Create a function to print any numbers Fibonacci

var n;
var fi = [];

fi[0] = 0;
fi[1] = 1;
for (n = 2; n <= 20; n++) {
  fi[n] = fi[n - 1] + fi[n - 2];
  console.log(fi[n]);
}

// Create a function to calculate even numbers

const num = prompt("Enter a number: ");

if (num % 2 == 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

// Create a function to calculate odd numbers

const number = prompt("Enter a number: ");

if (number % 1 != 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

// Showing both even and odd numbers

const i = prompt("Enter a number: ");

if (i % 2 == 0) {
  console.log("The number is even.");
} else if (i % 1 == 0) {
  console.log("The number is odd.");
} else {
  console.log("none");
}
