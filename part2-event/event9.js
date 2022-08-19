var iiinpuuu = document.querySelector('input[type = "text"]');
//i think you have to use double quotes around text because it matches the html document.  if you use single quotes it doesnt pick it up 
var form = document.querySelector('form');
var select = document.querySelector('select');

select.addEventListener('change', ssseeLectEvent);

function ssseeLectEvent(booog) {
    console.log('event type' +booog.type);
    console.log(booog.target.value);
    //logs value of the selector selector only has 3 options its a drop down menu next to the input text box.  1 2 and 3.  again using target.value will just take booog.  what is booog.  booog is the parameter of ssseeeLectEvent... What is sssseLectEvent... ssseeLectEvent is linked to select.  What is select?  select is the drop down box.  and select has an event listener that links to sselectEvent that listens for change.  what is change?  it is just looking for the drop down menu to change whatsoever then it executes the ssseLectEvent function
}


iiinpuuu.addEventListener()