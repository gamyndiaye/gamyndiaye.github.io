$(document).ready(function(){

/////////////////
// initialization
/////////////////

// this section initializes some variables that will be used throughout the program
var doubleMaxSpeed = 5;
var maxCircles = 10;
var $board = $('#board');
var boardWidth = $($board).width();
var boardHeight = $($board).height();
var circles = [];
var circleRadius = 10;


//////////
// startup
//////////

// this gets the whole thing going
for (var i = 0; i < maxCircles; i++){
    var newId = getId(i);
    var newCircle = makeCircle(newId);
    circles.push(newCircle);

    addNewCircleElement(newCircle, newId);
}

setInterval(update, 1000/60);


///////////////////////////
// startup helper functions
///////////////////////////

// this creates a circle object and returns it
// note: it only creates an object; it does not create a circle in the HTML
function makeCircle(id){
    var circle = {};

    var maxX = boardWidth - circleRadius*2;
    var maxY = boardHeight - circleRadius*2;

    circle.id = "#" + id;
    circle.x = Math.random() * maxX + circleRadius;
    circle.y = Math.random() * maxY + circleRadius;
    circle.speedX = decideSpeed();
    circle.speedY = decideSpeed();

    return circle;
}

// this generates a random speed value
function decideSpeed(){
    return Math.random() * doubleMaxSpeed/2 - doubleMaxSpeed;
}

// this generates an id for a circle given the circle's number
function getId(number){
    return "circle" + number;
}

// this adds a circle into the HTML
function addNewCircleElement(circle, id){
    var $circle = $('<div>').attr('id', id)
        .css('left', circle.x)
        .css('top', circle.y)
        .addClass("circle");

    $circle.appendTo($board);  
}

//////////////////
// update function
//////////////////

// this should move all of the circles
function update(){
    for (var i = 0; i < maxCircles; i++){
        var circle = circles[i];
        moveCircle(circle);
        bounceCircle(circle);
        updateCircleOnScreen(circle);
    }
}


//////////////////////////
// update helper functions
//////////////////////////

// this moves circles in memory but doesn't update them on the screen
function moveCircle(circle){
    circle.x += circle.speedX;
    circle.y += circle.speedY;
}

// this bounces circles if they hit a wall
function bounceCircle(circle){
    if (circle.x < 0){
        circle.x -= circle.speedX;
        circle.speedX *= -1;
    }
    else if (circle.x > boardWidth){
        circle.x -= circle.speedX;
        circle.speedX *= -1;
    }
    if (circle.y < 0){
        circle.y -= circle.speedY;
        circle.speedY *= -1;
    }
    else if (circle.y > boardHeight){
        circle.y -= circle.speedY;
        circle.speedY *= -1;
    }
}

// this redraws the circle's position on the screen
function updateCircleOnScreen(circle){

    $(circle.id).css('left', circle.x);
    $(circle.id).css('top', circle.y);
}

});