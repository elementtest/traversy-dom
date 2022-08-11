//query selector all

var titles = document.querySelectorAll('.title');

console.log(titles);
//again you can put anything in here classes ids tags etc

//MISTAKE mistyped did not add dot when you needed to

titles[0].textContent = 'DTripD';

var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#f4f4f4';
};

var even = document.querySelectorAll('li:nth-child(even)');

for (var i = 0; i < even.length; i++) {
    even[i].style.backgroundColor = '#ccc';
}