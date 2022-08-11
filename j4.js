// items.style.backgroundColor = '#f4f4f4';
//this wont work because this is an html ARRAY or html collection
//you have to use a for loop to iterate through it to do it on multiple elements
var items = document.getElementsByClassName('list-group-item');
for(var i = 0; i < items.length; i++)  {
    items[i].style.backgroundColor = '#f4f4f4';
}
//MISTAKE did not identify node to be modified in DOM 

//GETELEMENTSBY TAG NAME



