
// Canvas Tennis

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');


var background = new Image();
background.src = "./images/tennis-court.png"
var backgroundPlayer1Win = new Image();
backgroundPlayer1Win.src = "./images/player1WinBackground.png"
var backgroundPlayer2Win = new Image();
backgroundPlayer2Win.src = "./images/player2WinBackground.png"



var menuMusic = new Audio();
menuMusic.src ="./musics/ole.mp3"
var ballBouncingSound = new Audio();
ballBouncingSound.src ="./musics/ballbouncing.mp3"
var applauseSound = new Audio();
applauseSound.src ="./musics/applause.mp3"
var endingsong = new Audio();
endingsong.src ="./musics/Endingsong.mp3"



// Make sure the image is loaded first otherwise nothing will draw.


// Key Codes
var W = 87;
var S = 83;
var UP = 38;
var DOWN = 40;

// Keep track of pressed keys
var keys = {
W: false,
S: false,
UP: false,
DOWN: false
};


var quailLeftImg = new Image();
quailLeftImg.src = "./images/quail1.png";

var quailRightImg = new Image();
quailRightImg.src = "./images/quail2.png";

var ballImg = new Image();
ballImg.src = "./images/ball.png";

function drawQuail(x, y, width, height, speed, quailImg){
return {
  x: x,
  y: y,
  w: width,
  h: height,
  s: speed,
  i: quailImg,
  draw: function() {
    if (!quailImg) {
      context.fillStyle = '#000000';
      context.fillRect(this.x, this.y, this.w, this.h);
    }
    else {
      context.drawImage(this.i, this.x, this.y, this.w, this.h);
    }
  }
};
}


function drawBall(x, y, width, height, speed, ballImg){
return {
  x: x,
  y: y,
  w: width,
  h: height,
  s: speed,
  i: ballImg,
  draw: function() {
    if (!ballImg) {
      context.fillStyle = '#000000';
      context.fillRect(this.x, this.y, this.w, this.h);
    }
    else {
      context.drawImage(this.i, this.x, this.y, this.w, this.h);
    }
  }
};
}




// Create the Quails
var paddleWidth = 120;
var paddleHeight = 100;
var leftPaddle = drawQuail(25, canvas.height / 2 - paddleHeight / 2, paddleWidth, paddleHeight, 5, quailLeftImg);
var rightPaddle = drawQuail(canvas.width - paddleWidth - 25, canvas.height / 2 - paddleHeight / 2, paddleWidth, paddleHeight, 5, quailRightImg);

// Keep track of the score
var leftScore = 0;
var rightScore = 0;

// Create the ball
var ballLength = 15;
var ballSpeed = 2;
var ball = drawBall(0, 0, ballLength, ballLength, ballSpeed, ballImg);

// Modify the ball object to have two speed properties, one for X and one for Y
ball.sX = ballSpeed;
ball.sY = ballSpeed / 2;

// Randomize initial direction
if (Math.random() > 0.5) {
ball.sX *= -1;
}
// Randomize initial direction
if (Math.random() > 0.5) {
ball.sY *= -1;
}

// Reset the ball's position and speed after scoring
function resetBall() {
ball.x = canvas.width / 2 - ball.w / 2;
ball.y = canvas.height / 2 - ball.w / 2;
ball.sX = ballSpeed;
ball.sY = ballSpeed / 2;
}

// Bounce the ball off of a paddle
function bounceBall() {
  ballBouncingSound.play();
// Increase and reverse the X speed
if (ball.sX > 0) {
  ball.sX += 1;
  // Add some "spin"
  if (keys.UP) {
    ball.sY -= 1;
  } else if (keys.DOWN) {
    ball.sY += 1;
  }
} else {
  ball.sX -= 1;
  // Add some "spin"
  if (keys.W) {
    ball.sY -= 1;
  } else if (keys.S) {
    ball.sY += 1
  }
}
ball.sX *= -1;
}

// Listen for keydown events
canvas.addEventListener('keydown', function(e) {
if (e.keyCode === W) {
  keys.W = true;
}
if (e.keyCode === S) {
  keys.S = true;
}
if (e.keyCode === UP) {
  keys.UP = true;
}
if (e.keyCode === DOWN) {
  keys.DOWN = true;
}
});

// Listen for keyup events
canvas.addEventListener('keyup', function(e) {
if (e.keyCode === W) {
  keys.W = false;
}
if (e.keyCode === S) {
  keys.S = false;
}
if (e.keyCode === UP) {
  keys.UP = false;
}
if (e.keyCode === DOWN) {
  keys.DOWN = false;
}
});

// Show the menu
function menu() {
erase();

context.drawImage(background, 0, 0);
menuMusic.play();
// Show the menu
context.fillStyle = '#fff';
context.font = '24px Sniglet';
context.textAlign = 'center';
context.fillText('SUPER QUAIL TENNIS', canvas.width / 2, canvas.height / 4);
context.font = '18px Sniglet';
context.fillText('Click to Start', canvas.width / 2, canvas.height / 3);
context.font = '14px Sniglet';
context.textAlign = 'left';
context.fillText('Player 1: W (up) and S (down)', 5, (canvas.height / 3) * 2);
context.textAlign = 'right';
context.fillText('Player 2: UP (up) and DOWN (down)', canvas.width - 5, (canvas.height / 3) * 2);

// Start the game on a click
canvas.addEventListener('click', startGame);
}

// Start the game
function startGame() {
menuMusic.pause()
// Don't accept any more clicks
canvas.removeEventListener('click', startGame);
// Put the ball in place
resetBall();
// Kick off the game loop
draw();
}

// Show the end game screen
function endGame() {
erase();
context.drawImage(backgroundPlayer1Win, 0, 0);
context.fillStyle = '#fff';
context.font = '24px Sniglet';
context.textAlign = 'center';
var winner = 1;
if (rightScore === 5) {
  winner = 2;
  context.drawImage(backgroundPlayer2Win, 0, 0)
}
context.fillText('Player ' + winner + ' wins!', canvas.width/2, canvas.height/2);
applauseSound.play();
endingsong.play();
}

// Clear the canvas
function erase() {
//context.fillStyle = '#FFFFFF';
context.fillRect(0, 0, canvas.width, canvas.height);
}

// Main draw loop
function draw() {
erase();
// Move the paddles
if (keys.W) {
  leftPaddle.y -= leftPaddle.s;
}
if (keys.S) {
  leftPaddle.y += leftPaddle.s;
}
if (keys.UP) {
  rightPaddle.y -= rightPaddle.s;
}
if (keys.DOWN) {
  rightPaddle.y += rightPaddle.s;
}
// Move the ball
ball.x += ball.sX;
ball.y += ball.sY;
// Bounce the ball off the top/bottom
if (ball.y < 0 || ball.y + ball.h > canvas.height) {
  ball.sY *= -1;
}
// Don't let the paddles go off screen
[leftPaddle, rightPaddle].forEach(function(paddle) {
  if (paddle.y < 0) {
    paddle.y = 0;
  } 
  if (paddle.y + paddle.h > canvas.height) {
    paddle.y = canvas.height - paddle.h;
  }
});
// Bounce the ball off the paddles
if (ball.y + ball.h/2 >= leftPaddle.y && ball.y + ball.h/2 <= leftPaddle.y + leftPaddle.h) {
  if (ball.x <= leftPaddle.x + leftPaddle.w) {
    bounceBall();
  }
} 
if (ball.y + ball.h/2 >= rightPaddle.y && ball.y + ball.h/2 <= rightPaddle.y + rightPaddle.h) {
  if (ball.x + ball.w >= rightPaddle.x) {
    bounceBall();
  }
}
// Score if the ball goes past a paddle
if (ball.x < leftPaddle.x) {
  rightScore++;
  resetBall();
  ball.sX *= -1;
} else if (ball.x + ball.w > rightPaddle.x + rightPaddle.w) {
  leftScore++;
  resetBall();
  ball.sX *= -1;
}
// Draw the paddles and ball
context.drawImage(background, 0, 0);
leftPaddle.draw();
rightPaddle.draw();
ball.draw();
// Draw the scores
context.fillStyle = '#ffffff';
context.font = '24px Sniglet';

context.textAlign = 'left';
context.fillText('Score: ' + leftScore, 5, 24);
context.textAlign = 'right';
context.fillText('Score: ' + rightScore, canvas.width - 5, 24);
// End the game or keep going
if (leftScore === 5 || rightScore === 5) {
  endGame();
} else {
  window.requestAnimationFrame(draw);
}
}

// Show the menu to start the game
menu();
canvas.focus();

