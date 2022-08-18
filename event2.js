var button = document.getElementById('button')

// button.('click, runEvent');
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
//mouse down event does not wait for the mouse to be re released as soon as the mouse button is pressed DOWN it goes off as compared to a click where a down press and the preceding up release of the mouse is required before the even is completed
// button.addEventListener('mouseup', runEvent);
//waits for the mouse button to be released from its pressed down state to trigger an event 
var box = document.getElementById('box');
box.addEventListener('mouseenter', runEvent);
//every time your mouse enters the pink box on the page the event listener will be triggered 
box.addEventListener('mouseleave', runEvent);
//every time your mouse leaves the box the event will be triggered in the console

function runEvent(e) {
    console.log('event type: '+e.type);
    //logs the type of event to the log
}
