var inppput = document.querySelector('input[type = "text"]');
console.log(inppput);

inppput.addEventListener('keydown', doogleydoo);
//can listen to events such as key being pressed, anything being pasted, anything being copied... focus means focusing a box that's an interesting one.  blur is when you dont focus a box.  think of focus and blur with the / key you use when you go to youtube when you press / it focuses the search bar
function doogleydoo(doo) {
    document.body.style.display = 'none';
}