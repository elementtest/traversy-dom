var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');

itemInput.addEventListener('paste', DtripD);
//add event listener listening for paste. when paste event happens DtripD function executed 
function DtripD(dong){
    console.log('event type is what??:'+dong.type);
    //log what type of event happened in console
    document.body.style.display = 'none';
    //make everything go POOF the entire webpage vanishes
    //dong is just a placeholder for what the addeventlistener found... which is paste... so dong is just a placeholder for the paste event 
    //same thing as keydown keydown is different because it will log each of the keys pressed if you do a target.value on it.  with paste the only thing that dong is linking to is simply paste.  

}