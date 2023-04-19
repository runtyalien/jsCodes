function saveUser(name, email) {
  const user = name + "," + email;
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
      li.appendChild(document.createTextNode(`${user[0]} (${user[1]})`));
      usersList.appendChild(li);
    }
  });
}

const form = document.getElementById("my-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (name === "" || email === "") {
    alert("Please enter both name and email");
    return;
  }

  saveUser(name, email);
  displayUsers();
  form.reset();
});

displayUsers();