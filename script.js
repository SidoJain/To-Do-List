const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const toDoList = document.getElementById('toDoList');

let editToDo = null;

addBtn.addEventListener('click', () => {
    const inputText = inputBox.value.trim();
    if (inputText.length === 0)
        alert('You must write something in the To Do.');

    else {
        if (addBtn.value === 'Edit') {
            editToDo.target.previousElementSibling.previousElementSibling.innerHTML = inputText;
            addBtn.value = 'Add';
            inputBox.value = '';
        }
        else {
            const li = document.createElement('li');
            const p = document.createElement('p');
            p.innerHTML = inputText;
            li.appendChild(p);

            const deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'Del';
            deleteBtn.classList.add('btn');
            deleteBtn.classList.add('deleteBtn');
            li.appendChild(deleteBtn);

            const editBtn = document.createElement('button');
            editBtn.innerText = 'Edit';
            editBtn.classList.add('btn');
            editBtn.classList.add('editBtn');
            li.appendChild(editBtn);

            toDoList.appendChild(li)
            inputBox.value = '';
        }
        saveData();
    }
});

toDoList.addEventListener('click', (e) => {
    if (e.target.innerHTML === 'Del') {
        toDoList.removeChild(e.target.parentElement);
        saveData();
    }
    if (e.target.innerHTML === 'Edit') {
        inputBox.value = e.target.previousElementSibling.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value = 'Edit';
        editToDo = e;
        saveData();
    }
});

function saveData() {
    localStorage.setItem('data', toDoList.innerHTML);
}

function getData() {
    toDoList.innerHTML = localStorage.getItem('data');
}
getData()