//TRAVERSING THE DOM
var itemList = document.querySelector('#items');
//parentnode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = 'pink';
//changes the parent node the div with the id of main to pink... however child node remains unchanged... still original color
console.log(itemList.parentNode.parentNode);
//gives us the container... surrounding this 
console.log(itemList.parentNode.parentNode.parentNode);
//gives us the body 
console.log(itemList.childNodes);
//with childnodes... it will log ALL OF THE TEXT BREAKS>...  this means if you press enter in your code... to seperate blocks it will log the enter you pressed as a text node, this is a fucking pain in the ass
//DO NOT USE CHILD NODES USE CHILDREN
console.log(itemList.children);
console.log(itemList.children[1]);
//selects the second child of the list of the children so selects item 2
itemList.children[1].style.backgroundColor = 'yellow';

console.log(itemList.firstChild);
//you think it is going to give us item 1 but nope... again this is the same thinga s the child nodes it is going to give us the fucking line breaks... it will give us the spaces.. 
//FIRST CHILD IS USELESS

//FIRST ELEMENT CHILD
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'DTRIPD';
//changes the text content of the first one to that 

itemList.lastElementChild.textContent = "SUP DTRIPD";



//SIBLINGS

//next sibling

console.log(itemList.nextSibling);
//again this shit is useless because it will log all the line breaks in your actual code (line breaks being when you hit the fucking enter key) as text nodes

//use next element sibling
console.log(itemList.nextElementSibling);
//this returns null because there is no next sibling but if you add a span or something 
//siblings are going to be on the same tabulation so think <ul> is the parent <li> are the children but if you just have ul and li the ul will NOT have a sibling 
//add a span tag at the same level as the ul and now the ul has a sibling 

//previous sibling 
console.log(itemList.previousSibling);
//again this is fucking worthless because it will only give us the text node because you decided that you wanted readable code you fucking bastard and hit the enter key 
console.log(itemList.previousElementSibling);
//gives us the h2... because that is the sibling before the ul

itemList.previousElementSibling.style.color = 'green';
//now styles that previous sibling as greeen
//you can select anything you want you dont necessarily need jquery
//using jquery for this stuff is like using a sledgehammer to kill a mosquito.  it'll work but you dont need it... so that is why we are studying the dom i guess.. so you can kill the mosquitoes

