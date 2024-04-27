/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function dibujarCirCuad(){
    var canvas = document.getElementById("myCanvas"); // get the canvas element
    var ctx = canvas.getContext("2d"); // return a drawing context on the canvas
    var xMax = canvas.width;
    var yMax = canvas.height;
    var margen = 5; // margen de 5 pixeles 
    ctx.fillStyle = "#333899"; // color azul
    ctx.fillRect(margen, yMax-40-margen, 40, 40); // fill a rectangle with the color, (x,y,width,height)
    ctx.arc(xMax/2, yMax/2, 20, 0, 2 * Math.PI);  // draw a circle (x,y,radius,startAngle,endAngle)
    ctx.stroke(); // draw the circle
    ctx.fillStyle = "#FF0000"; // color rojo
    ctx.fill(); // color rojo

}

var bandera; 
function dibujar(event){
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d"); 

    var posX = event.clientX; // get the horizontal coordinate of the mouse
    var posY = event.clientY; // get the vertical coordinate of the mouse
    console.log(posX, posY); // print the coordinates in the console

    canvas.onmousedown = function(){bandera = true}; // when the mouse is pressed
    canvas.onmouseup = function(){bandera = false}; // when the mouse is released

    if(bandera){
        ctx.fillRect(posX, posY, 5, 5);
        ctx.fill();
    }
}

function limpiarCanvas(){
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d"); 
    
    canvas.width = canvas.width; // clear the canvas
}

function dibujarCuadriculado(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var alturaMax = canvas.height;
    var anchoMax = canvas.width;

    //Dibujar lineas horizontales
    ctx.beginPath(); // begin a path
    for(var i=0; i<alturaMax; i+=20){
        ctx.moveTo(0, i); // move the path to the starting point
        ctx.lineTo(anchoMax, i); // draw a line from the starting point to the ending point
        ctx.strokeStyle = "#3e67d9"; // color 
        ctx.stroke(); // draw the line
    }
    ctx.closePath(); // close the path
    
    //Dibujar lineas verticales
    ctx.beginPath(); // begin a path
    for(var i=0; i<anchoMax; i+=20){
        ctx.moveTo(i, 0); // move the path to the starting point
        ctx.lineTo(i, alturaMax); // draw a line from the starting point to the ending point
        ctx.strokeStyle = "#3e67d9"; // color 
        ctx.stroke(); // draw the line
    }
    ctx.closePath(); // close the path

    //Eje X
    ctx.beginPath(); // begin a path
    ctx.moveTo(0, alturaMax/2); // move the path to the starting point
    ctx.lineTo(anchoMax, alturaMax/2); // draw a line from the starting point to the ending point
    ctx.strokeStyle = "red"; // color
    ctx.stroke(); // draw the line
    ctx.closePath(); // close the path

    //Eje Y
    ctx.beginPath(); // begin a path
    ctx.moveTo(anchoMax/2, 0); // move the path to the starting point
    ctx.lineTo(anchoMax/2, alturaMax); // draw a line from the starting point to the ending point
    ctx.strokeStyle = "red"; // color
    ctx.stroke(); // draw the line
    ctx.closePath(); // close the path
}

function dibujarImagen(posX,posY){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    
    console.log(posX,posY);
    var img = new Image();
    img.src = "images/auto.png";

    canvas.width = canvas.width; // clear the canvas

    img.onload = function(){ // when the image is loaded
        ctx.drawImage(img, posX, posY); // draw the image
    }
}

x=0;
dx=0.1;
function animarAuto(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width; // clear the canvas

    var img = new Image(); // create a new image
    img.src = "images/auto.png";

    img.onload = function(){
        ctx.drawImage(img, x, 100);
    }
    x+=dx;

    if(x>canvas.width-202){ // if the image is out of the canvas
        x=0;
    }
    
}
