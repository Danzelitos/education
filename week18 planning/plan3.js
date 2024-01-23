const input = document.querySelector('.inputTask');
const button = document.querySelector('.acceptButton');
const addTask = document.querySelector('.addTask');
const error = document.querySelector('.error');
const noTasks = document.querySelector('.noTasks');
const removeLocalStorage = document.querySelector('.removeLocalStorage');

let taskerArray = JSON.parse(localStorage.getItem('tasks')) || [];

function addTaskToList(task) {
  let listItem = document.createElement('li');
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';
  checkbox.checked = task.completed; // Устанавливаем состояние чекбокса в соответствии с задачей
  listItem.className = 'list';
  listItem.innerText = task.task;
  listItem.append(checkbox);
  addTask.appendChild(listItem);
	noTasks.style.display = 'none';
	input.value = '';
};

function addToLocalStor() {
  let newTask = {task: input.value, completed: false}; // Создаем новую задачу со значением чекбокса по умолчанию (не завершена)
  taskerArray.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(taskerArray));
  addTaskToList(newTask); // Добавляем новую задачу в список
};

function updateLocalStorage() {
  const checkboxes = document.querySelectorAll('.checkbox');
  taskerArray.forEach(function(task, index) {
    task.completed = checkboxes[index].checked; // Обновляем состояние задач в массиве на основе состояния чекбокса
  });
  localStorage.setItem('tasks', JSON.stringify(taskerArray)); // Сохранение обновленных данных в локальное хранилище
}


window.addEventListener('load', function() {
  if (taskerArray.length > 0) {
    removeLocalStorage.disabled = false;
  } else {
    removeLocalStorage.disabled = true;
  }
  taskerArray.forEach(function(task) {
    addTaskToList(task); // Добавляем каждую задачу из массива в список при загрузке страницы
  });
  addTask.addEventListener('change', updateLocalStorage);
});

button.addEventListener('click', function() {
  if (input.value !== '') {
    addToLocalStor();
    removeLocalStorage.disabled = false;
    error.textContent = '';
  } else {
    error.textContent = 'error';
    error.style.color = 'red';
  }
});

removeLocalStorage.addEventListener('click', function() {
  localStorage.removeItem('tasks'); // Удаляем 'tasks' из локального хранилища
  addTask.innerHTML = ''; // Очищаем список
  taskerArray = []; // Очищаем массив
  removeLocalStorage.disabled = true;
	noTasks.style.display = 'flex';
});
