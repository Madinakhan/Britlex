const todoInput = document.getElementById("todo");
const formElement = document.forms[0];
const submitBtn = document.querySelector(".submitBtn");
const clearBtn = document.querySelector(".clear");
const listWrapper = document.querySelector(".list");
//
const todos = []; // { id: 0, name: "arslonbek", isCompleted: false }
let editingTodo = null;

// Handler functions
function handleSubmit(e) {
	e.preventDefault();

	const todoName = todoInput.value;
	if (todoName.trim() === "") return alert("Please enter valid name");

	if (editingTodo) {
		editingTodo.name = todoName;
		editingTodo = null;
		submitBtn.innerText = "Add todo";
	} else {
		const todo = { name: todoName, id: todos.length, isCompleted: false };
		todos.push(todo);
	}

	todoInput.value = "";
	renderTodos();
}

function handleClear() {
	todos.splice(0);
	renderTodos();
}
function handleDelete(id) {
	const todoIdx = todos.findIndex((todo) => todo.id === id);
	if (todoIdx === -1) return alert("Please fixing index problem !!!");
	todos.splice(todoIdx, 1);
	renderTodos();
}

function handleEdit(id) {
	editingTodo = todos.find((todo) => todo.id === id);
	if (!editingTodo) return alert("Please fix index problem !!!");

	submitBtn.innerText = "Save Todo";
	todoInput.value = editingTodo.name;
	todoInput.focus();
	renderTodos();
}

function handleComplete(id) {
	const todo = todos.find((todo) => todo.id === id);
	if (!todo) return alert("Please fixing index problem !!!");

	todo.isCompleted = !todo.isCompleted;
	renderTodos();
}

// Render functions

function renderTodos() {
	[...listWrapper.children].forEach((elm) => elm.remove());

	for (let { name, id, isCompleted } of todos) {
		const todoElement = document.createElement("li");
		todoElement.className = "list-item";

		const nameElement = document.createElement("span");
		nameElement.innerText = name;
		nameElement.classList.toggle("completed", isCompleted);
		todoElement.appendChild(nameElement);

		const actionsElement = document.createElement("div");
		actionsElement.className = "actions";

		const actions = {
			Completed: handleComplete,
			Edit: handleEdit,
			Delete: handleDelete,
		};

		const isEditing = editingTodo?.id === id;
		for (let action in actions) {
			const actionBtn = document.createElement("button");
			actionBtn.innerText = action;
			actionBtn.disabled = isEditing;

			const handleFn = actions[action];
			actionBtn.addEventListener("click", () => handleFn(id));
			actionsElement.appendChild(actionBtn);
		}

		todoElement.appendChild(actionsElement);
		listWrapper.appendChild(todoElement);
	}
}

function init() {
	formElement.addEventListener("submit", handleSubmit);
	clearBtn.addEventListener("click", handleClear);
}

init();
