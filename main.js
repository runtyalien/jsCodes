var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click' , removeItem);
// Filter Event
filter.addEventListener('keyup', filterItems);


//Add item
function addItem(e){
  e.preventDefault();

  //Get Input Value
  var newItem = document.getElementById('item').value;
  var newDescription = document.getElementById('description').value;

  //create new li element
  var li = document.createElement('li');
  //Add class
  li.className = 'list-group-item';
 // Add text node with input value and description
 li.innerHTML = '<span class="item-name">' + newItem + '</span><br><span class="item-description">' + newDescription + '</span>'; 
 
  
  //li.appendChild(document.createTextNode(newItem));

  //Create del button element
  var deleteBtn = document.createElement('button');
  var editBtn = document.createElement('button');

  // Add classes to delete button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  editBtn.className = 'btn btn-danger btn-sm float-right delete';
  //Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  editBtn.appendChild(document.createTextNode('Edit'));
  //Append button to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

  //Append li to li
  itemList.appendChild(li);

  
  itemList.appendChild(li);
}

//Remove Item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are you sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//filter items
function filterItems(e){
  //convert text to lowercase
  var text = e.target.value.toLowerCase();
  //Get list
  var items = itemList.getElementsByTagName('li');
  //convert to array
  Array.from(items).forEach(function(item){
    var itemName = item.querySelector('.item-name').textContent;
    var itemDesc = item.querySelector('.item-description').textContent;
    if(itemName.toLowerCase().indexOf(text) != -1 || itemDesc.toLowerCase().indexOf(text) != -1){
      item.style.display= 'block';
    }else{
      item.style.display = 'none';
    }
  })
}