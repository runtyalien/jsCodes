// Function to save user to the server and update the list
function saveUser(name, email, phone) {
    fetch('/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone }), // Changed from 'number' to 'phone'
      })
      .then(response => response.json())
      .then(data => {
        console.log('User created: ', data);
        displayUsers();
      })
      .catch(error => console.error('Error saving user:', error));
  }
  
  // Function to delete user from the server and update the list
  function deleteUser(id) {
    fetch(`/user/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        console.log('User deleted');
        displayUsers();
      })
      .catch(error => console.error('Error deleting user:', error));
  }
  
  // Function to display the list of users
  function displayUsers() {
    const usersList = document.getElementById('users');
    
    // Clear existing list items
    usersList.innerHTML = '';
  
    // Fetch the list of users from the server
    fetch('/user')
      .then(response => response.json())
      .then(users => {
        users.forEach(user => {
          const li = document.createElement('li');
          li.textContent = `${user.name} (${user.email}, ${user.phone})`;
  
          const deleteButton = document.createElement('button');
          deleteButton.appendChild(document.createTextNode('Delete'));
          deleteButton.addEventListener('click', function () {
            deleteUser(user.id);
          });
  
          li.appendChild(deleteButton);
          usersList.appendChild(li);
        });
      })
      .catch(error => console.error('Error fetching users:', error));
  }
  
  // Attach an event listener to the form submission
  const form = document.getElementById('my-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
  
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
  
    if (name === '' || email === '' || phone === '') {
      alert('Please enter name, email, and phone number.');
      return;
    }
  
    saveUser(name, email, phone);
    form.reset();
  });
  
  // Display initial list of users
  displayUsers();
  