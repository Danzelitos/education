const inputer = document.querySelector('#inputer');
const addButton = document.querySelector('#btn-add');
const item = document.querySelector('#addItem');

addButton.addEventListener('click', function() {
  let listItem = document.createElement('li');
  listItem.textContent = inputer.value;
  item.append(listItem);
  inputer.value = ' ';
});


item.addEventListener('click', function checkCompleted(evt){
  const eventTarget = evt.target;
  eventTarget.classList.toggle('completed');
});

