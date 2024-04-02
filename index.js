 

const mainContainer = document.querySelector("main")
const addButton = document.getElementById("addBtn")
const todoInput = document.getElementById("todoInput")
 let todo_list = ["anything",]

function paintUI() {
    let new_inner_html = ""
    for (let i =0; i < todo_list.length; i++) {
        const todo = todo_list[i]
        new_inner_html += ` <div class="todoItem">
        <p>${todo}</p>
        <div class="actionsContainer">
            <button><i class="fa-solid fa-pen-to-square"></i></button>
            <button><i class="fa-solid fa-trash"></i></button>
        </div>
    </div>`
    }
    mainContainer.innerHTML = new_inner_html
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



