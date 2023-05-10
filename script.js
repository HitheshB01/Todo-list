
// document.getElementById('intro').addEventListener('click' ,abc);


// function abc()
// {
// document.getElementById('intro').classList.add('xyz');

// }





//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter');

//event listener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deletecheck);
filterOption.addEventListener("click", filtering)
// todoList.addEventListener("click",check)


//Functions
function addTodo(event) {
    event.preventDefault();

    //creating div with class name todo
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //creating li with class name newTodo
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //completed CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    // completedButton.innerText='checked';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);


    //completed TRAsh MARK BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa-sharp fa-solid fa-trash"></i>';
    // trashButton.innerText='trash';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //append to ul list
    todoList.appendChild(todoDiv);


    //clear input value
    todoInput.value = '';

}




function deletecheck(e) {
    const item = e.target;

    //delete todo
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.classList.add("fall");


        //animation first then delete
        // addEventListener('transitioned', function(){
        //     todo.remove();
        // });

        addEventListener("transitionend", (event) => {
            todo.remove()
        });


    }
    //  striking out checklist check in
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }


}

// function check(e){
//     const citem= e.target;

//     //check todo
//     if(citem.classList[0] === "complete-btn"){
//         const note = document.querySelector('.todo-item');
//         note.style.textDecoration= 'line-through';
//      //   note.parentElement.style.opacity='0.5';
//             note.style.opacity='0.5';

//     }

// }


function filtering(e) {
    const todos = todoList.childNodes;

    console.log(todos);
    // todos.forEach(function (todo) {
    //     switch (e.target.value) {
    //         case "all":
    //             todo.display = 'flex';
    //             break;
    //         case "completed":
    //             if (todo.classList.contains("completed")) {
    //                 todo.style.display = "flex";
    //             }
    //             else {
    //                 todo.style.display = "none";
    //             }
    //             break;
    //     }
    // });
}
