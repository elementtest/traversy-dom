//CREATING STUFF DOM ELEMENTS AND INSERTING THEM 
//create element

//create a div
var newDiv = document.createElement('div');

console.log(newDiv);

newDiv.className = 'DTRIPD';
//when you log now it it now has a class of hello

newDiv.id = 'droopy';
//when you console log this it will now display the class and id name in the console.  

//add attribute
newDiv.setAttribute('title', 'hello div');

//everythign above is just editing the div tag, right now you do not have any content inside of it.  

//to modify it you have to create a a text node

// create a text node 
var newDivText = document.createTextNode('DTRIPD YO');
//
//add text to div
//now want to append or add it to the div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('#main-header');
console.log(h1);
console.log(container);
// container.insertBefore(newDiv, h1);

//insertbefore takes two parementers
//one is gonna be what we are inserting which is newDiv
//one is gonna be what we are inserting before which is... ?

bod = document.body

h1.append(newDiv);