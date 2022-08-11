// console.dir(document);
// ABOVE CODEEXAMINE THE DOCUMENT OBJECT all the stuff you can do with teh document model is listed pretty much.  also can get this with console log document 

console.log(document.domain);
console.log(document.URL);
console.log(document);
console.log(document.title);
document.title = 123;
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
// console.log(document.all);
console.log(document.all[10]);
//dont use this method to select from dom because if you add element the entire order will be skewed
console.log(document.forms);
console.log(document.links);
//no links so returns empty array 
console.log(document.images);