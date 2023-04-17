var headerTitle = document.getElementById('header-title');
var titleElements = document.getElementsByClassName('title');
headerTitle.style.border = "4px solid black";
for (var i = 0; i < titleElements.length; i++) {
    titleElements[i].style.fontWeight = "bold";
    titleElements[i].style.color = "green";
  }