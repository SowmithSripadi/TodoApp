const addBtn = document.querySelector(".add-btn");
const inputText = document.querySelector(".input-text");
const taskList = document.querySelector(".task-list");
const taskitem = document.querySelector(".task-item");
const tasktext = document.querySelector(".task-text");
const circle = document.querySelector(".circle");
const darkmode = document.querySelector(".darkmode-label");

darkmode.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

const addTaskFunc = function () {
  let val = inputText.value;
  if (val === "") {
    alert("Enter an input value");
  } else {
    const html = `<li class="task-item">
      <div class="circle"></div>
      <span class="task-text">${
        val.charAt(0).toUpperCase() + val.slice(1)
      }</span><span class="cross-btn">\u00d7</span>
        </li>`;
    taskList.innerHTML += html;
    saveData();
  }
  inputText.value = "";
};

addBtn.addEventListener("click", addTaskFunc);
inputText.addEventListener("keyup", (e) => {
  if (e.code === "Enter") addTaskFunc();
});

taskList.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("task-text") ||
    e.target.classList.contains("circle")
  ) {
    let taskItem = e.target.closest(".task-item");
    let taskText = taskItem.querySelector(".task-text");
    let circle = taskItem.querySelector(".circle");
    let crossbtn = taskItem.querySelector(".cross-btn");

    taskText.classList.toggle("checked-text");
    circle.classList.toggle("checked-circle");
    crossbtn.classList.toggle("checked-cross-btn");
    saveData();
  } else if (e.target.classList.contains("cross-btn")) {
    e.target.closest(".task-item").remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", taskList.innerHTML);
}

function showTask() {
  taskList.innerHTML = localStorage.getItem("data");
}
showTask();
