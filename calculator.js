let input = document.getElementById("input_box");
let buttons = document.querySelectorAll("button");

// Function to handle button clicks
function handleClick(event) {
  const buttonValue = event.target.innerText;

  if (buttonValue === "=") {
    try {
      input.value = eval(input.value);
    } catch (error) {
      input.value = "Error";
    }
  } else if (buttonValue === "AC") {
    input.value = "";
  } else if (buttonValue === "DEL") {
    input.value = input.value.slice(0, -1);
  } else {
    input.value += buttonValue;
  }
}

// Adding event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

// Toggle dark mode
document.querySelector('.Dark').addEventListener('click', function () {
  document.body.classList.add('dark-mode');
  document.getElementById('calculator-style').href = 'calculator1.css';
});

// Toggle light mode
document.querySelector('.Light').addEventListener('click', function () {
  document.body.classList.remove('dark-mode');
  document.getElementById('calculator-style').href = 'calculator2.css';
});
