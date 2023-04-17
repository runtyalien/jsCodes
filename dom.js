var headerTitle = document.getElementById('header-title');
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
var newItem2 = document.createElement('li');
newItem2.textContent = "New item using getElementsByTagName()";
list.appendChild(newItem2);