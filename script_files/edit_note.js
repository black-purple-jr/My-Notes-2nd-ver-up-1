"use strict";
import { notes, getFormattedDate } from "./saved_notes.js";

const urlParams = new URLSearchParams(window.location.search);
const noteId = urlParams.get('id');

const noteTitleInput = document.getElementById("editNoteTitle");
const noteContentInput = document.getElementById("editNoteContent");
const noteSaveButton = document.getElementById("editNoteSaveButton");
const noteDeleteButton = document.getElementById("editNoteDeleteButton");

let currentNote;

function goToHomePage() { window.location.href = 'home_page.html' };

for (let note of notes) {
    if (note.id === noteId) {
        currentNote = { id: note.id, content: note.content, title: note.title, date: note.date };
        noteContentInput.value = note.content;
        noteTitleInput.value = note.title;
        break
    }
}

function deleteNote() {
    const newNotes = notes.filter((note) => note.id !== currentNote.id);
    localStorage.setItem('Notes', JSON.stringify(newNotes));
    noteContentInput.value = "";
    noteTitleInput.value = "";
    goToHomePage();
}

noteDeleteButton.onclick = () => deleteNote();

// ! Go back later for this:

// function checkIfSaveIsEnabled() {
//     if (currentNote.noteTitle === noteTitleInput.value || currentNote.noteContent === noteContentInput.value) {
//         noteSaveButton.disabled = true;
//     }
//     else if (noteContentInput !== currentNote.noteContent || noteTitleInput !== currentNote.noteTitle) {
//         noteSaveButton.removeAttribute('disabled');
//     }
// }

// checkIfSaveIsEnabled();

if (noteSaveButton !== null) {
    noteSaveButton.onclick = () => {
        saveEditedNote();
        goToHomePage();
    }
}

function saveEditedNote() {
    let noteIndex;
    for (let note of notes) {
        if (note.id === currentNote.id) {
            noteIndex = notes.indexOf(note);
        }
    }
    let date = new Date();
    let time = date.toLocaleTimeString();
    notes[noteIndex] = {
        id: currentNote.id,
        content: noteContentInput.value,
        title: noteTitleInput.value,
        date: `Edited on ${getFormattedDate()} at ${time}`,
    }

    // if (notes[noteIndex].noteContent === "" && notes[noteIndex].noteTitle === "") {
    //     notes.splice(noteIndex, 1); 
    // }

    localStorage.setItem('Notes', JSON.stringify(notes));
}