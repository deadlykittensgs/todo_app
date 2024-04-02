 

let mainContainer = document.querySelector("main")
let addButton = document.getElementById("addBtn")
let todoInput = document.getElementById("todoInput")
 let todo_list = localStorage.getItem("todo-list") ? 
 JSON.parse(localStorage.getItem("todo-list")).
 todo_list : []

function paintUI() {
    let new_inner_html = ""
    for (let i =0; i < todo_list.length; i++) {
        const todo = todo_list[i]
        new_inner_html += ` <div class="todoItem">
        <p>${todo}</p>
        <div class="actionsContainer">
            <button onclick="editTodo(${i})" ><i class="fa-solid fa-pen-to-square"></i></button>
            <button onclick="deleteTodo(${i})"><i class="fa-solid fa-trash"></i></button>
        </div>
    </div>`
    }
    mainContainer.innerHTML = new_inner_html
    saveData()
}

paintUI()

function addTodo () {
    let current_todo = todoInput.value
    if (!current_todo){return}
    todo_list.push(current_todo)
    todoInput.value = ""
    paintUI()
  

}
addButton.addEventListener("click", addTodo)


function deleteTodo(index) {
    let new_todo_list = todo_list.filter((current_value, current_index) =>{
    return current_index !== index
    })
    todo_list = new_todo_list
    paintUI()
}

function editTodo(index) {
    let current_todo = todo_list[index]
    todoInput.value = current_todo
    deleteTodo(index)
}

function saveData() {
localStorage.setItem( "todo-list", JSON.stringify
({todo_list}))
}
