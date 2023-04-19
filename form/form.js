function saveUser(name, email, phone) {
  const user = name + "," + email + "," + phone;
  let users = localStorage.getItem("users") || "";

  localStorage.setItem("users", users + ";" + user);
}

function displayUsers() {
  const usersList = document.getElementById("users");
  const users = localStorage.getItem("users") || "";

  usersList.innerHTML = "";

  users.split(";").forEach(function(userString) {
    if (userString !== "") {
      const user = userString.split(",");
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(`${user[0]} (${user[1]}, ${user[2]})`));

      const editButton = document.createElement("button");
      editButton.appendChild(document.createTextNode("Edit"));
      editButton.addEventListener("click", function(){
        deleteUser(userString);

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const phoneInput = document.getElementById("phone");

        nameInput.value = user[0];
        emailInput.value = user[1];
        phoneInput.value = user[2];

        // Update user information
        const saveButton = document.createElement("button");
        saveButton.appendChild(document.createTextNode("Save"));
        saveButton.addEventListener("click", function() {
          const newName = nameInput.value.trim();
          const newEmail = emailInput.value.trim();
          const newPhone = phoneInput.value.trim();

          if (newName === "" || newEmail === "" || newPhone === "") {
            alert("Please enter name, email, and phone number.");
            return;
          }

          saveUser(newName, newEmail, newPhone);
          displayUsers();
          form.reset();
        });
        li.appendChild(saveButton);
      });
      li.appendChild(editButton);

      const deleteButton = document.createElement("button");
      deleteButton.appendChild(document.createTextNode("Delete"));
      deleteButton.addEventListener("click", function() {
        deleteUser(userString);
        displayUsers();
      });
      li.appendChild(deleteButton);
      usersList.appendChild(li);
    }
  });
}

function deleteUser(userString) {
  const users = localStorage.getItem("users") || "";
  const updatedUsers = users.replace(userString + ";", "");
  localStorage.setItem("users", updatedUsers);

  if (localStorage.getItem("users") === "") {
    const usersList = document.getElementById("users");
    usersList.innerHTML = "";
  }
}

const form = document.getElementById("my-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();

  if (name === "" || email === "" || phone ==="") {
    alert("Please enter name, email, and phone number.");
    return;
  }

  saveUser(name, email, phone);
  displayUsers();
  form.reset();
});

displayUsers();

