var headerTitle = document.getElementById('header-title');
var titleElements = document.getElementsByClassName('title');
var items = document.getElementsByClassName('list-group-item');

headerTitle.style.border = "4px solid black";

for (var i = 0; i < titleElements.length; i++) {
    titleElements[i].style.fontWeight = "bold";
    titleElements[i].style.color = "green";
 }

items[1].style.backgroundColor = 'green';
items[2].style.display = 'none';

for (var i = 0; i < items.length; i++) {
    items[i].style.fontWeight = "bold";
}

var newItem = document.createElement('li');
newItem.textContent = "New item";
var list = document.getElementById('list');
list.appendChild(newItem);


var newItem1 = document.getElementsByClassName('list-group')[0].getElementsByClassName('new-item')[0];
newItem1.textContent = "New item using getElementsByClassName()";


var list = document.getElementsByTagName('ul')[0];
var newItem2 = document.createElement('li');
newItem2.textContent = "New item using getElementsByTagName()";
list.appendChild(newItem2);