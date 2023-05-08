
// document.getElementById('intro').addEventListener('click' ,abc);


// function abc()
// {
// document.getElementById('intro').classList.add('xyz');

// }





//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listener
todoButton.addEventListener("click", addTodo);

//Functions
function addTodo(event) {
    event.preventDefault();

    //creating div with class name todo
    const todoDiv =document.createElement('div');
    todoDiv.classList.add('todo');

    //creating li with class name newTodo
    const newTodo = document.createElement('li');
    newTodo.innerText= todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //completed CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    // completedButton.innerHTML='<i class="fa-solid fa-plus"></i>';
    completedButton.innerText='checked';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);


    //completed TRAsh MARK BUTTON
    const trashButton = document.createElement('button');
    // trashButton.innerHTML='<i class="fa-solid fa-plus"></i>';
    trashButton.innerText='trash';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //append to ul list
    todoList.appendChild(todoDiv);


    //clear input value
    todoInput.value='';

    }