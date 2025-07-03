// question-1
// const input1a = Number(document.getElementById("number1a"));
// const input1b = Number(document.getElementById("number1b"));
const solution1a = Number(document.getElementById("solution1a"));

const solutionClick1 = document.getElementById("solution-click1");
solutionClick1.addEventListener("click", findEven);

function findEven() {
  let evenNumbers = [];
  {
    const number1a = Number(document.getElementById("number1a").value);
    const number1b = Number(document.getElementById("number1b").value);

    for (let i = number1a; i <= number1b; i++) {
      if (i % 2 === 0) {
        evenNumbers.push(i);
      }
    }

    console.log("Even numbers:", evenNumbers);
  }
  document.getElementById("solution1a").value = evenNumbers;
}

// question-2

const solutionClick2 = document.getElementById("solution-click2");
solutionClick2.addEventListener("click", findOdd);

function findOdd() {
  let oddNumbers = [];
  {
    const number2a = Number(document.getElementById("number2a").value);
    const number2b = Number(document.getElementById("number2b").value);

    for (let i = number2a; i <= number2b; i++) {
      if (i % 2 != 0) {
        oddNumbers.push(i);
      }
    }

    console.log("oddNumbers:", oddNumbers);
  }
  document.getElementById("solution2a").value = oddNumbers;
}

// question-3

const solutionClick3 = document.getElementById("solution-click3");
solutionClick3.addEventListener("click", findPrime);

function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

function findPrime() {
  let primeNumbers = [];
  {
    const number3a = Number(document.getElementById("number3a").value);
    const number3b = Number(document.getElementById("number3b").value);

    for (let i = number3a; i <= number3b; i++) {
      if (isPrime(i)) {
        primeNumbers.push(i);
      }
    }

    console.log("primeNumbers:", primeNumbers);
  }
  document.getElementById("solution3a").value = primeNumbers;
}
