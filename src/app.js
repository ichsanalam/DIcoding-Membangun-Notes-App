import './scripts/components/app-bar.js';
import './scripts/components/note-search.js';
import './scripts/components/note-list.js';
import './scripts/components/note-input.js';
import './scripts/components/footer-bar.js';
import { notesData } from './scripts/data/notesData.js';

document.addEventListener('DOMContentLoaded', () => {
    const noteList = document.querySelector('note-list');
    noteList.data = notesData;

    const noteSearch = document.querySelector('note-search');
    noteSearch.addEventListener("search-note", (event) => {
        noteList.searchNotes(event, notesData);
    });
});
