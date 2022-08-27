var form = document.getElementById('addForm');
//box to left of black submit button 
var filter = document.getElementById('filter');






var itemList = document.getElementById('items');
//list of items 1,2,3,4 etc with red boxes

form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItems);

function addItem(e) {
   e.preventDefault();

   var newItem = document.getElementById("item").value;

   var li = document.createElement("li");
   li.className = "list-group-item";


   li.appendChild(document.createTextNode(newItem));

      
   var deleteBtn = document.createElement('button');


   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

   deleteBtn.appendChild(document.createTextNode('X'));

   li.appendChild(deleteBtn);



   itemList.appendChild(li);



}

function removeItem(e){
   if(e.target.classList.contains('delete')){
      if(confirm('Are you sure?')){
         var li = e.target.parentElement;
         itemList.removeChild(li);
         //item list is the list of items... you just remove child and remove child will remove the last child

      }
      //you are clicking the red button on the side.  the parent of the red button is the item3 or item2 or item1 whatever, so you are targeting that list item
      //you have the little red button and you are targeting and taking out the parent. easy way to target instead of trying to mess around with like item3 or item4 id.  just say the parent of the red button boom it knows 
   }
}

function filterItems(e){
   var text = e.target.value.toLowerCase();
   var items = itemList.getElementsByTagName('li');
    
    
   //there are certain things you cannot do with an html collection you need to turn it into an array 

   Array.from(items).forEach(function(item){
       var itemName = item.firstChild.textContent;
       if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
       } else {
        item.style.display = 'none';
       }
   });

}