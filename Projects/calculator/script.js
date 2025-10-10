const display = document.getElementById('display');

function addValue(input){
  display.value += input;
}

function clearDisplay(){
  display.value = "";
}

function calculate(){
  try {
    // Safely evaluate the expression
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
