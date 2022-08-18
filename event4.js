var button = document.getElementById('button');
var box = document.getElementById('box');

box.addEventListener('mouseenter', runEvent);

box.addEventListener('mouseover', runEvent);

box.addEventListener('mousemove', runEvent);

var output = document.querySelector('.output');

//logs the mouse simply moving so will be hundreds or thousands of events 
function runEvent(e) {
    box.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+',40)';
    //

};
//CODE ABOVE  fun this will take the background color and use the x and why coordinates in an rgb style to change the color based on the position of the mouse.  pretty cool 
//when you move the mouse inside of the pink box on the webpage it will now display the x and y coordinates of the mouse, pretty cool

//MISTAKE single vs double quotes.. you did NOT put a quote in the right place, single and double quotes are the same thing choice of quoting style is up to the programmer... its the same to the cmputer it just is identified as a string