"use strict";

export var notes = JSON.parse(localStorage.getItem('Notes')) || [];

const noteTitle = document.getElementById('title');
const noteContent = document.getElementById('content');
const saveButton = document.getElementById('save');
const cancelButton = document.getElementById('cancel');

// const toastContainer = document.querySelector('.toastContainer');
// const alert = "Error";
// const alertMessage = "You can't save empty notes";
// const success = "Success";


function goToHomePage() { window.location.href = 'homePage.html' };

// from codate.io
export function getFormattedDate() {
    const date = new Date();
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// function showToast(type, msg) {
//     let toast = document.createElement('div');
//     toast.classList.add('toast');
//     toast.innerHTML = `
//         <div class="toastType">${type}</div>
//         <div class="toastMessage">${msg}</div>
//     `
//     toastContainer.innerHTML += toast;
// }

function saveNote() {
    var note = {
        'id': crypto.randomUUID(),
        'title': noteTitle.value,
        'content': noteContent.value,
        'date': getFormattedDate()
    };
    if (note.title === "" && note.content === "") {
        goToHomePage();
    }
    else{
        notes.push(note);
        localStorage.setItem('Notes', JSON.stringify(notes));
    }
}

if (saveButton !== null) { saveButton.onclick = () => { saveNote(); goToHomePage() } };
if (cancelButton !== null) { cancelButton.onclick = () => goToHomePage() };