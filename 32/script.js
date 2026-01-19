const result = document.getElementById("result");
const cols = document.querySelectorAll(".col");

let expression = "";

function updateDisplay(value) {
  result.innerText = value || "0";
}

function calculate() {
  try {
    const formatted = expression.replace(/X/g, "*");
    expression = eval(formatted).toString();
    updateDisplay(expression);
  } catch {
    updateDisplay("Error");
    expression = "";
  }
}

// button click handling
cols.forEach(col => {
  col.addEventListener("click", () => {
    const value = col.innerText;

    switch (value) {
      case "C":
        expression = "";
        updateDisplay("");
        break;

      case "CE":
        expression = expression.slice(0, -1);
        updateDisplay(expression);
        break;

      case "=":
        calculate();
        break;

      case "sqrt":
        if (expression) {
          expression = Math.sqrt(Number(expression)).toString();
          updateDisplay(expression);
        }
        break;

      case "%":
        if (expression) {
          expression = (Number(expression) / 100).toString();
          updateDisplay(expression);
        }
        break;

      default:
        expression += value;
        updateDisplay(expression);
    }
  });
});

// initial display
updateDisplay("");
