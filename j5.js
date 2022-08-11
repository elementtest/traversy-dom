//QUERY SELECTOR
var header = document.querySelector('#main-header');
//query selector can use anything you want in here tags list item you can grab a class you can use any css selector 
console.log('this is header' + header);
//note you can NOT use slashes - with dom nodes... in the original css to style the border you would use border-bottom but here you have to used the camel case borderBottom
var input = document.querySelector('input');
input.value = 'hellow worlsdj';
//adds text also called 'value' to the input text box under item lister
var submit = document.querySelector('input[type="submit"]')
submit.value="HIJOHN";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'coral';





