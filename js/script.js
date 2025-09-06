let todoList = [];

function validateInput () {
    const taskInput = document.getElementById('task-input').value;
    const taskDate = document.getElementById('task-date').value;

    if (taskInput === '' || taskDate === '') {
        alert('Please fill in both the task and date fields.');
    }
    else {
        addTask(taskInput, taskDate);
    }
}

function addTask (todo, date) {
    const todoItem = {
        task: todo,
        dueDate: date,
        completed: false
    };
    todoList.push(todoItem);
    rendertodolist();

}

function toggleFilter() {
  const filterInput = document.getElementById('filter-date');
  filterInput.classList.toggle('hidden');

  filterInput.addEventListener('change', () => {
    const filterDate = filterInput.value;
    const todoListContainer = document.getElementById('task-list');
    todoListContainer.innerHTML = '';

    const filtered = todoList.filter(item => item.dueDate === filterDate);

    if (filtered.length === 0) {
      todoListContainer.innerHTML = `<li class="text-white">Tidak ada task untuk tanggal ${filterDate}</li>`;
    } else {
      filtered.forEach(item => {
        todoListContainer.innerHTML += `<li>${item.task} - Due: ${item.dueDate}</li>`;
      });
    }
  });
}

function deleteTasks () {
    todoList = [];
    rendertodolist();

}

function rendertodolist() {

    const todoListContainer = document.getElementById('task-list');
    todoListContainer.innerHTML = '';

    todoList.forEach((item, index) => {
    todoListContainer.innerHTML += `
        <p>${item.task} - Due: ${item.dueDate}</p>
    `;
});


}