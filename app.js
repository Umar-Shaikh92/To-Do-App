let arrOfTodoList = [];
let inputElem = document.querySelector("input");
let listElem = document.querySelector("#list");
const submitBtn = document.querySelector("#submitBtn");
let currentEditIndex = null;

function renderList() {
  listElem.innerHTML = "";
  arrOfTodoList.forEach((todo, index) => {
    const myDiv = document.createElement("div");
    myDiv.setAttribute("id", index);
    myDiv.innerHTML = `<p>${todo}</p>
          <button onclick="editHandler(this)" style="cursor: pointer; border:none; padding:0;font-size:18px;color:#00246b;padding-right:7px;"><i class="fa-solid fa-pen-to-square"></i></button>
          <button onclick="deleteHandler(this)" style="cursor: pointer; border:none; padding:0;font-size:18px;color:red;"><i class="fa-solid fa-trash-can"></i></button>`;
    listElem.appendChild(myDiv);
  });
}

function submitHandler() {
  if (inputElem.value.trim() === "") return;

  if (currentEditIndex !== null) {
    arrOfTodoList[currentEditIndex] = inputElem.value;
    currentEditIndex = null;
    submitBtn.textContent = "Submit";
    submitBtn.onclick = submitHandler;
  } else {
    arrOfTodoList.push(inputElem.value);
  }

  inputElem.value = "";
  renderList();
}

function deleteHandler(button) {
  const index = Number(button.parentElement.id);
  arrOfTodoList.splice(index, 1);
  renderList();
}

function editHandler(button) {
  const index = Number(button.parentElement.id);
  currentEditIndex = index;
  inputElem.value = arrOfTodoList[index];
  submitBtn.textContent = "Update";
  submitBtn.onclick = submitHandler;
}
