// question-1
// const input1a = Number(document.getElementById("number1a"));
// const input1b = Number(document.getElementById("number1b"));
const solution1a = Number(document.getElementById("solution1a"));

const solutionClick1 = document.getElementById("solution-click1");
solutionClick1.addEventListener("click", findArea);

function findArea() {
  let area = null;
  {
    const triangle1a = Number(document.getElementById("triangle1a").value);
    const triangle1b = Number(document.getElementById("triangle1b").value);

    area = 0.5 * (triangle1a * triangle1b);

    console.log("Area:", area);
  }
  document.getElementById("solution1a").value = area;
}

// question-2
const errorElement = document.getElementById("scalene-error");
const clearButton = document.getElementById("scalene-clear");

const solutionClick2 = document.getElementById("solution-click2");
solutionClick2.addEventListener("click", findScaleneArea);
function findScaleneArea() {
  const triangle2a = Number(document.getElementById("triangle2a").value);
  const triangle2b = Number(document.getElementById("triangle2b").value);
  const triangle2c = Number(document.getElementById("triangle2c").value);
  console.log("first");
  let area = null;
  // console.log(typeof triangle2a);
  if (
    triangle2a + triangle2b <= triangle2c ||
    triangle2a + triangle2c <= triangle2b ||
    triangle2b + triangle2c <= triangle2a
  ) {
    console.log("Invalid triangle input");
    errorElement.classList.remove("hidden");
    clearButton.classList.remove("hidden");
  }
  const sp = (triangle2a + triangle2b + triangle2c) / 2;
  console.log(sp);
  area = Math.sqrt(
    sp * (sp - triangle2a) * (sp - triangle2b) * (sp - triangle2c)
  );
  document.getElementById("solution2a").value = area;
}

document.getElementById("scalene-clear").addEventListener("click", () => {
  document.getElementById("triangle2a").value = null;
  document.getElementById("triangle2b").value = null;
  document.getElementById("triangle2c").value = null;

  errorElement.style.display = "none"; // hide error again
  clearButton.style.display = "none"; // hide error again
});
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
