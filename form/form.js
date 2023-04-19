function saveUser(name, email, phone) {
  const user = name + "," + email + "," + phone;
  const users = localStorage.getItem("users") || "";
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
    alert("Please enter name , email and phone number");
    return;
  }

  saveUser(name, email, phone);
  displayUsers();
  form.reset();
});

displayUsers();
