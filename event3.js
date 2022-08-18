var button = document.getElementById('button');
var box = document.getElementById('box');

box.addEventListener('mouseenter', runEvent);

box.addEventListener('mouseover', runEvent);

box.addEventListener('mousemove', runEvent);

var output = document.querySelector('.output');

//logs the mouse simply moving so will be hundreds or thousands of events 
function runEvent(e) {
    console.log('event type:'+e.type);

    output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+ '</h3>';

}
//when you move the mouse inside of the pink box on the webpage it will now display the x and y coordinates of the mouse, pretty cool 