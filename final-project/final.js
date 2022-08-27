var form = document.getElementById('addForm');
//box to left of black submit button 

var itemList = document.getElementById('items');
//list of items 1,2,3,4 etc with red boxes

form.addEventListener('submit', addItem);
function addItem(e) {
   e.preventDefault();

   var newItem = document.getElementById("item").value;

   var li = document.createElement("li");
   li.className = "list-group-item";


   li.appendChild(document.createTextNode(newItem));

   itemList.appendChild(li);



}