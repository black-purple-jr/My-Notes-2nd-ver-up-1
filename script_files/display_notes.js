"use strict";

import { notes } from './saved_notes.js';
const cardsContainer = document.querySelector('.cards-container');

cardsContainer.innerHTML = "";
for (let note of notes) {
    if (note.title === "") {
        cardsContainer.innerHTML += `
        <a href="note_preview.html?id=${note.id}">
            <div class="card">
                <div class="card-title" title="Untitled">untitled</div>
                <div class="card-content">${note.content}</div>
                <div class="card-date" title="${note.date}">${note.date}</div>
            </div>
        </a>`;
    }
    else {
        cardsContainer.innerHTML += `
        <a href="note_preview.html?id=${note.id}">
            <div class="card">
                <div class="card-title" title="${note.title}">${note.title}</div>
                <div class="card-content">${note.content}</div>
                <div class="card-date" title="${note.date}">${note.date}</div>
            </div>
        </a>`;
    }
};