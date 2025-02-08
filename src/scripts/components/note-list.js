import './note-item.js';

class NoteList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.notesData = [];
        this.filteredData = [];
    }

    set data(notesData) {
        this.notesData = notesData;
        this.filteredData = notesData;
        this.render()
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
            #notes-container {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 15px;
                margin: 50px 0;
            }
        </style>
        <div id="notes-container"></div>
    `;

    const container = this.shadowRoot.querySelector('#notes-container');
    container.innerHTML = '';

    this.filteredData.forEach(note => {
        const noteItem = document.createElement('note-item');
        noteItem.note = note;
        container.appendChild(noteItem);
    });

    }

    searchNotes(notes) {
        const searchQuery = notes.detail.toLowerCase();
        this.filteredData = this.notesData.filter(
          (note) =>
            note.title.toLowerCase().includes(searchQuery) ||
            note.body.toLowerCase().includes(searchQuery)
        );
        this.render();
    }
}

customElements.define('note-list', NoteList);
