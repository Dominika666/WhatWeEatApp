const addBtn = document.querySelector('.add');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
const deleteBtn = document.getElementsByClassName('.delete');
const deleteAllBtn = document.querySelector('.delete-all');

const noteArea = document.querySelector('.note-area');
const notePanel = document.querySelector('.note-panel');
const category = document.querySelector('#category');
const textArea = document.querySelector('#text');
const error = document.querySelector('.error');

let selectedValue;
let cardID = 0;

const openPanel =()=> {
    notePanel.style.display = 'flex';
}

const closePanel =()=> {
    notePanel.style.display = 'none';
    error.style.visibility = 'hidden';
    textArea.value = '';
    category.selectedIndex = 0;
}

const addNote  =()=> {
    if(textArea.value !=='' && category.options[category.selectedIndex].value !== '0'){
        createNote();
        error.style.visibility = 'hidden'
    } else {
        error.style.visibility = 'visible'
    }
}

const createNote =()=> {
    const newNote = document.createElement('div');
    newNote.classList.add('note');
    newNote.setAttribute('id', cardID);

    newNote.innerHTML = 
    `<div class="note-header">
    <h3 class="note-title">${selectedValue}</h3>
    <button class="delete-note" onclick='deleteNote(${cardID})'>
        <i class="fas fa-times icon"></i>
    </button>
</div>

<div class="note-body"> ${textArea.value}
</div>`

    noteArea.appendChild(newNote);
    cardID++;
    textArea.value = '';
    category.selectedIndex = 0;
    notePanel.style.display = 'none';
    checkColor(newNote);
}

const selectValue = () => {
    selectedValue = category.options[category.selectedIndex].text;
}

const checkColor = note => {
    switch(selectedValue) {
        case 'Poniedziałek':
            note.style.backgroundColor = 'rgb(107, 235, 52)';
            break;
        case 'Wtorek':
            note.style.backgroundColor = 'rgb(190, 100, 250)';
            break;
        case 'Środa':
            note.style.backgroundColor = 'rgb(42, 209, 201)';
            break;
        case 'Czwartek':
            note.style.backgroundColor = 'rgb(250, 195, 100)';
            break;
        case 'Piątek':
            note.style.backgroundColor = 'rgb(82, 217, 145)';
            break;
        case 'Sobota':
            note.style.backgroundColor = 'rgb(247, 242, 82';
            break;
        case 'Niedziela':
            note.style.backgroundColor = 'rgb(252, 68, 80)';
            break;
    }
}

const deleteNote = id => {
    const noteToDelete = document.getElementById(id);
    noteArea.removeChild(noteToDelete);
}

const deleteAllNotes = () => {
    noteArea.textContent = '';
}


addBtn.addEventListener('click', openPanel);
cancelBtn.addEventListener('click', closePanel);
saveBtn.addEventListener('click', addNote);
deleteAllBtn.addEventListener('click', deleteAllNotes);
