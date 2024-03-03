const formEl = document.getElementById("todo-form");
const inputField = document.getElementById("todo-input");
const listPlace = document.getElementById("todo-list");
formEl.addEventListener("submit", onSubmitFn);

function onSubmitFn(event) {
  event.preventDefault();
  if (!inputField.value) {
    return;
  }

  const liElement = document.createElement("li");
  liElement.textContent = inputField.value;
  addDelete(liElement);
  addLine(liElement);
  listPlace.appendChild(liElement);
  inputField.value = "";
}

function addDelete(element) {
  element.addEventListener("dblclick", deleteEl);
}
function addLine(element) {
  element.addEventListener("click", addLineFn);
}

function addLineFn(event) {
  const element = event.target;
  if (element.style.textDecoration === "line-through") {
    element.style.textDecoration = "none";
  } else {
    element.style.textDecoration = "line-through";
  }
}

function deleteEl(event) {
  const el = event.target;
  el.remove();
}
