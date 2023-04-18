/*var headerTitle = document.getElementById('header-title');
var titleElements = document.getElementsByClassName('title');
var items = document.getElementsByClassName('list-group-item');

headerTitle.style.border = "4px solid black";

for (var i = 0; i < titleElements.length; i++) {
    titleElements[i].style.fontWeight = "bold";
    titleElements[i].style.color = "green";
 }

 var secondItem = document.querySelectorAll('.list-group-item:nth-of-type(2)');
 secondItem[0].style.color = 'green';


for (var i = 0; i < items.length; i++) {
    items[i].style.fontWeight = "bold";
    if(i % 2 == 0){
        items[i].style.backgroundColor = 'green';
    }
}

var newItem = document.createElement('li');
newItem.textContent = "New item";
var list = document.getElementById('list');
list.appendChild(newItem);





var list = document.getElementsByTagName('ul')[0];
/*var newItem2 = document.createElement('li');
newItem2.textContent = "New item using getElementsByTagName()";
list.appendChild(newItem2);*/

var itemList = document.querySelector('#items');
/*console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement);*/

//child node
//console.log(itemList.childNodes);
//console.log(itemList.children);
//console.log(itemList.children[1]);


//FirstChild
//console.log(itemList.lastChild);
//last element child
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent = 'Hello 4';


//next Sibling
//console.log(itemList.nextSibling);
//next Element sibling
//console.log(itemList.nextElementSibling);
//previous sibling
//console.log(itemList.previousSibling);
//previous Element Sibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color = 'green';


//create element
//create a div
var newDiv = document.createElement('div');
//add class
newDiv.className = 'hello';
//add id
newDiv.id = 'hello1';
//add attr
newDiv.setAttribute('title','Hello Div');
//create a text node
var newDivText = document.createTextNode('hello World');
//Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);
container.insertBefore(newDiv, h1);