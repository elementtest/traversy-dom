//EVENT LISTENERS

// var button = document.getElementById('button').addEventListener('click', function() {
//     console.log(123);
// });

var button = document.getElementById('button').addEventListener('click', buttonClickT);
//this is ideal way of doing it... you want to listen for the event of click and upon hearing that you call the function buttonclick which is already defined below


function buttonClick() {
    // console.log('Button clicked');
    document.getElementById('header-title').textContent = 'changed';
    document.querySelector('#main').style.backgroundColor = 'orange'
};
//what is happening define var called button document get element by id is button... add an event listener which is a click it activates buttonClick function upon being pressed buttonclick funciton is called.... activates document. get elementby id header title, takes the textcontent and changes it to changed 
//then after that it takes the document.querySelector of main and it changes the background to orange

function buttonClickT(e) {
    console.log(e.target);
    console.log(e.target.id);
    console.log(e);
    console.log(e.target.className);
    var output = document.getElementById('output');
    output.innerHTML = '<h3>'+e.target.id+'</h3>';
    
    console.log(e.type);
    //will tell us what type of event it is.
    console.log(e.clientX);
    //MISTAKE Capitalization
    //clientX will return the mouse position of the button when it was clicked
    console.log(e.clientY);
    //Y is the position 
    console.log(e.offsetX);
    //position from the actual element inside of itself not the position relative to the page but relative to the element itself 
    //client is from the window, offset is from the actual window itself
    console.log(e.altKey);
    //see if the alt key is pressed when you click the button or not 
    //mistake capitalization
    console.log(e.ctrlKey);
    console.log(e.shiftKey);
    

}
//MISTAKE trying to find the element id of 'output' but it didn't exist.. fixed by just making a div with that id somewhere in the html so that it could latch on.  was returning a null error
//to get all the information about the event create a function with e name 
// i.e. function nameOfFunction(e) {
//  console.log(e)
// }
//pointer event information 