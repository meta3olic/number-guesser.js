
//declaring variables

var min = 1;
var max = 10;

var gussesLeft = 3;

var randomNum = Math.round(min + Math.random() * (max - min));

var winningNumber = randomNum;

// UI values

const minimumNumber = document.querySelector('.min-num');
const maximumNumber = document.querySelector('.max-num');
const gussNumber = document.querySelector('.guess-num');
const gussButton = document.querySelector('.guess-btn');
const message = document.querySelector('.message');

minimumNumber.textContent = min;
maximumNumber.textContent = max;

gussButton.addEventListener('click', function () {
  var guss = parseInt(gussNumber.value);
  if (isNaN(guss) || guss < min || guss > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  } else {
    if(document.querySelector('.guess-btn').value !== "PLAY AGAIN"){
      if (guss === winningNumber) {
        gussNumber.style.borderColor = "green";
        setMessage(`${winningNumber} is correct, YOU WIN!`, 'green');
        document.querySelector('.guess-btn').value = "PLAY AGAIN";
      } else {
        gussesLeft -= 1;
        if (gussesLeft == 0) {
          setMessage(`Currect number is ${winningNumber},YOU LOSE`, 'red');
          gussNumber.style.borderColor = "red";
          document.querySelector('.guess-btn').value = "PLAY AGAIN";
        } else {
          setMessage(` ${gussNumber.value} is Wrong, you have ${gussesLeft} guess left.`, 'red');
          gussNumber.style.borderColor = "red";
        }
      }
    }else{
      gussNumber.style.borderColor = "grey";
      message.textContent = "";
      document.querySelector('.guess-btn').value = "SUBMIT";
      gussNumber.value = "";
      gussesLeft = 3
    }
  }
});
function setMessage(messageDemo, colour) {
  message.style.color = colour;
  message.textContent = messageDemo;
}
