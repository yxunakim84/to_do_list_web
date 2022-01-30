const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");

const toDoInput = toDoForm.querySelector("input");
// const toDoList = document.querySelector("#todo-form input");

let toDos = [];

const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}


function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.className = "buttonStyle";
    button.innerText = "delete";
    button.addEventListener("click", deleteTodo);
    
    li.appendChild(span);
    li.appendChild(button);
    
    toDoList.appendChild(li);

}

function handleToDoSubmit(event){

    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item){
//     console.log("This is the turn of ", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    // forEach 함수는 이 paintToDo를 parsedToDos 배열의 요소마다 실행한다.

    // 1) parsedTodos.forEach(sayHello);
    // 2) parsedTodos.forEach((item) => console.log("this is the turn of ", item));
    // 2)의 방법은 1) parsedTodos.forEach(sayHello); 와 같은 기능. sayHello함수를 만들지 않아도 됨.
}