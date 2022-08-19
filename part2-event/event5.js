var itemInput = document.querySelector('input[type="text"]');
//targets input box on index.html
var form = document.querySelector('form');

itemInput.addEventListener('keydown', RrrunEvent);
//event listener:: listens to any key being pressed::: upon being pressed it starts the RrrrunEvent function below
function RrrunEvent(e) {
    console.log('event type:'+e.type);
//logs event type only one ANY KEY PRESSED 
    console.log(e.target.value);
    //logs what was pressed
    document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
//targets output id div on the bottom of page
//changes the html to the value of target.  the value of target is linked back to itemInput.  itemInput is the form.  so... it goes from the var itemInput the event listener is listening for input on that... it then is pussed to the function... the function finds the div id of output and changes the text inside using inner item to whatever was typed in the box
}
