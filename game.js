const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];
let start = false;
let level = 0;

const startOver = () => {
  start = false;
  level = 0;
  gamePattern.length = 0;
};

const checkAnswer = (currentLevel) => {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(() => {
      $("body").removeClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");
    }, 200);
    startOver();
  }
};

const playSound = (name) => {
  const audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
};

const animatePress = (currentColour) => {
  $("#" + currentColour).addClass("pressed");
  setTimeout(() => {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
};

const nextSequence = () => {
  userClickedPattern.length = 0;
  level++;
  $("#level-title").text("Level " + level);

  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
  animatePress(randomChosenColour);
};

$(".btn").click(function () {
  const userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

$(document).keypress(function () {
  if (!start) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});
