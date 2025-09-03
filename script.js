const num1 = 10;
const num2 = 20;

const sum = num1 + num2;

//document.getElementById('result').textContent = `The sum of ${num1} and ${num2} is: ${sum}`;
const title = document.getElementById("title")
const add = document.getElementById("add")
//const edit = doccument.getElementById("update")
//const del = doccument.getElementById("delete")
const taskList = document.getElementById("taskList")

let tasks = [];


add.addEventListener('click', () => {
  const task = title.value
  if (task) {
    tasks.push(task)
    renderTask()
    title.value = ''
  }

})

function renderTask() {
  taskList.innerHTML = ''
  tasks.forEach((task, index) => {
    const li = document.createElement('li')
    li.innerHTML = `
    <span>${task}</span>
    <div class='action-based'>
    <button class='edit' onclick = "editTask(${index})">edit</button>
    <button class='delete' onclick = "deleteTask(${index})">delete</button>
    </div>

    `;
    taskList.appendChild(li)
  })

}

function editTask(index) {
  const newTask = prompt("Edit task:", tasks[index]);
  if (newTask) {
    tasks[index] = newTask
    renderTask()
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTask();

}









