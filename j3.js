// var header = document.getElementById('main-header');

// header.style.borderBottom = 'solid 3px #000';

//Get elements by class names
// it is elements plural 

var items = document.getElementsByClassName('list-group-item');
//changing one item in the list of items on the page...
console.log(items);
console.log(items[1]);
items[1].textContent = 'hello sdfdsfds2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';


//MISTAKE capitalization