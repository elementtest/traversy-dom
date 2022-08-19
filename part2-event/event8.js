var Piiiput = document.querySelector('input[type = "text"]');

Piiiput.addEventListener('input', foothisFunction);
//MISTAKE dont put functions in quotes... 
function foothisFunction(foobedoo) {
   console.log('look here its the type of stuff'+foobedoo.type) ;
};
//input will run when you do anything with the text box... you start typing and it will trigger on anything the difference between input event listener and the key down (any key being pressed) is that input will also register things like copy and paste and
//bottom line input event listener will trigger any time the stuff inside the box that you've specified is changed, so shift wouldnt change it because the stuff inside doesnt change