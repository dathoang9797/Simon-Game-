const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const nextSquence = () => {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);
  const audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
};

function add(a,b) {
  delay(10);
  return a + b;
}

const result = add(2,3);

result