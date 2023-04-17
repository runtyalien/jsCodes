var headerTitle = document.getElementById('header-title');
var titleElements = document.getElementsByClassName('title');
var items = document.getElementsByClassName('list-group-item');

headerTitle.style.border = "4px solid black";
for (var i = 0; i < titleElements.length; i++) {
    titleElements[i].style.fontWeight = "bold";
    titleElements[i].style.color = "green";
 }

items[2].style.backgroundColor = 'green';

    items[0].style.fontWeight = "bold";
    items[1].style.fontWeight = "bold";
    items[2].style.fontWeight = "bold";
    items[3].style.fontWeight = "bold";
 
