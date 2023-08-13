let name1 = document.getElementById("name");
let email = document.getElementById("email");
let number = document.getElementById("number");
let submit = document.getElementById("submit");

submit.addEventListener("click", addBtn);

function addBtn(e) {
  e.preventDefault();

  //adding user details to ui
  let items = document.getElementById("items");
  let newELement = document.createElement("li");
  newELement.innerHTML = `<span>${name1.value}</span> <span>${email.value} </span><span>${number.value}</span>`;

  //adding delete button and edit button
  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.className = "btn btn-danger mr-2";

  //edit btn
  let editBtn = document.createElement("button");
  editBtn.innerHTML = "Edit";
  editBtn.className = "btn btn-dark mr-2";

  //user input
  let obj = {
    name: name1.value,
    email: email.value,
    number: number.value,
  };
  axios
    .post("https://crudcrud.com/api/05f6f57cecf149e4880d09f199bdd9cd/user", obj)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  let userDetails = JSON.stringify(obj);
  // console.log(userDetails);

  if (email.value !== "") {
    items.appendChild(newELement);

    localStorage.setItem(obj.email, userDetails);
    newELement.appendChild(deleteBtn);
    newELement.appendChild(editBtn);
  } else {
    alert("Please fill all fields ");
  }

  //adding delete button
  deleteBtn.addEventListener("click", deleteBtnClick);

  function deleteBtnClick(e) {
    e.preventDefault();
    deleteBtn.parentElement.remove();
    console.log(obj.email);

    localStorage.removeItem(obj.email);
    // document.getElementById('items').innerHTML=emailLocal
  }

  //edit button

  editBtn.addEventListener("click", edit);

  function edit(e) {
    console.log("edit");
    editBtn.parentElement.remove();
    name1.value = obj.name;
    email.value = obj.email;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("https://crudcrud.com/api/05f6f57cecf149e4880d09f199bdd9cd/user")
    .then((response) => {
      for (let i = 0; i < response.data.length; i++) {
        let items = document.getElementById("items");
        let newELement = document.createElement("li");
        newELement.innerHTML = `<span>${JSON.stringify(
          response.data[i].name
        )}</span>${JSON.stringify(
          response.data[i].email
        )} <span></span>${JSON.stringify(
          response.data[i].number
        )}<span></span>`;
        items.appendChild(newELement);
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.className = "btn btn-danger mr-2";

        //edit btn
        let editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";
        editBtn.className = "btn btn-dark mr-2";
        newELement.appendChild(deleteBtn);
        newELement.appendChild(editBtn);

        deleteBtn.addEventListener("click", deleteBtnClick);

        function deleteBtnClick(e) {
          e.preventDefault();
          deleteBtn.parentElement.remove();

          console.log(response.data[i]._id);
          //deleting from CrudCrud///////////////////////////////////////
          //deleting from CrudCrud///////////////////////////////////////
          //deleting from CrudCrud///////////////////////////////////////
          axios
          .delete(`https://crudcrud.com/api/05f6f57cecf149e4880d09f199bdd9cd/user/${response.data[i]._id}`)
          .then((response) => {
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
         
        }

        //edit button

        editBtn.addEventListener("click", edit);

        function edit(e) {
          console.log("edit");
          editBtn.parentElement.remove();
          name1.value = obj.name;
          email.value = obj.email;
        }
      }

      // console.log(response.data._id);
    })
    .catch((err) => {
      console.log(err);
    });
});