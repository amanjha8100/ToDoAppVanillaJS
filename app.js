//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
//Event listeners
todoButton.addEventListener('click',addTodo);
//Functions
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();

    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create ListItem
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    //list item under div tag by appending child
    todoDiv.appendChild(newTodo);

    //Checkmark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    //added completed button to div tag
    todoDiv.appendChild(completedButton);


    //Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    //added trash button to div tag
    todoDiv.appendChild(trashButton);

    //APPEND TO LIST
    todoList.appendChild(todoDiv);

    //Clear Todo input value
    todoInput.value="";
}