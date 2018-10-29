// I CREAT MY OBJECTS ???? QUAILS AND MY SIGHT(VISEUR)

class Quail {
  constructor(quailX, quailY, quailWidth, quailHeight) {
    this.x = quailX;
    this.y = quailY;
    this.width = quailWidth;
    this.height = quailHeight;
    this.shoots = false;
  }
};

class Sight{
  constructor(sightX, sightY, sightWidth, sightHeight) {
    this.x = sightX;
    this.y = sightY;
    this.width = sightWidth;
    this.height = sightHeight;
  }
};

// F***ING BIRDS IMAGES
var quail1Img = new Image();   // Crée un nouvel élément Image
quail1Img.src = "./images/quail1.png"; // Définit le chemin vers sa source
var quail2Img = new Image();   // Crée un nouvel élément Image
quail2Img.src = "./images/quail2.png"; // Définit le chemin vers sa source
var quail3Img = new Image();   // Crée un nouvel élément Image
quail3Img.src = "./images/quail3.png"; // Définit le chemin vers sa source
var quail4Img = new Image();   // Crée un nouvel élément Image
quail4Img.src = "./images/quail4.png"; // Définit le chemin vers sa source
var quail5Img = new Image();   // Crée un nouvel élément Image
quail5Img.src = "./images/quail5.png"; // Définit le chemin vers sa source
var quail6Img = new Image();   // Crée un nouvel élément Image
quail6Img.src = "./images/quail6.png"; // Définit le chemin vers sa source
var quail7Img = new Image();   // Crée un nouvel élément Image
quail7Img.src = "./images/quail7.png"; // Définit le chemin vers sa source
var quail8Img = new Image();   // Crée un nouvel élément Image
quail8Img.src = "./images/quail8.png"; // Définit le chemin vers sa source
var quail9Img = new Image();   // Crée un nouvel élément Image
quail9Img.src = "./images/quail9.png"; // Définit le chemin vers sa source
var quail10Img = new Image();   // Crée un nouvel élément Image
quail10Img.src = "./images/quail10.png"; // Définit le chemin vers sa source

// Function for Drawing the birds
drawMe: function (){
  ctx.drawImage(quail1Img, this.x, this.y, this.width, this.height);
  };






var allQuails = [
  new Quail(650, 0, 30, 250),
  new Quail(800, 350, 30, 200),
  new Quail(970, 0, 30, 250),
  new Quail(1120, 300, 30, 250),
  new Quail(1270, 0, 45, 200),
  new Quail(1420, 300, 30, 250),
  new Quail(970, 0, 30, 250),
  new Quail(1120, 300, 30, 250),
  new Quail(1270, 0, 45, 200),
  new Quail(1420, 300, 30, 250),
];


//var canvas = document.querySelector(".my_canvas");
//var ctx = canvas.getContext("2d");



//FUNCTION FOR : Hit Detection Mouse Touch Over Object Arrays
function initCanvas(){
  var ctx = document.getElementById('my_canvas').getContext('2d');
  ctx.canvas.addEventListener('mousedown', function(event) {
      var mX = event.clientX - ctx.canvas.offsetLeft;
      var mY = event.clientY - ctx.canvas.offsetTop;
      for(var i = 0; i < arrayOfQuails.length; i++){
          var b = arrayOfQuails[i];
          if(mX >= b.x && mX < b.x+b.w && mY >= b.y && mY < b.y+b.h){
              document.getElementById('status').innerHTML = "You touched "+b.id;
          }
      }
  });
  var arrayOfQuails = [    {"id":"quail1","x":100,"y":100,"w":50,"h":50,"bg":"magenta"},
                    {"id":"quail2","x":100,"y":100,"w":50,"h":50,"bg":"magenta"},
                    {"id":"quail3","x":100,"y":100,"w":50,"h":50,"bg":"magenta"},
                    {"id":"quail4","x":100,"y":100,"w":50,"h":50,"bg":"magenta"},
                    {"id":"quail5","x":100,"y":100,"w":50,"h":50,"bg":"magenta"},
                    {"id":"quail6","x":100,"y":100,"w":50,"h":50,"bg":"magenta"},
                    {"id":"quail7","x":100,"y":100,"w":50,"h":50,"bg":"magenta"},
                    {"id":"quail8","x":100,"y":100,"w":50,"h":50,"bg":"magenta"},
                    {"id":"quail9","x":100,"y":100,"w":50,"h":50,"bg":"magenta"},
                    {"id":"quail10","x":100,"y":100,"w":50,"h":50,"bg":"magenta"},
  ];
  for(var i = 0; i < arrayOfQuails.length; i++){
      var b = arrayOfQuails[i];
      ctx.fillStyle = b.bg;
      ctx.fillRect(b.x,b.y,b.w,b.h);
  }
}
window.addEventListener('load', function(event) {
  initCanvas();
});







