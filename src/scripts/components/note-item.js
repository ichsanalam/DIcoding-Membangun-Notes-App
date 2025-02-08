class NoteItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    set note(note) {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    padding: 15px;
                    border-radius: 8px;
                    background: white;
                    box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
                }
                h3 {
                    margin: 0;
                    font-size: 1.2em;
                }
                p {
                    font-size: 0.9em;
                    color: #555;
                }
            </style>
            <h3>${note.title}</h3>
            <p>${note.body}</p>
            <p><small>${new Date(note.createdAt).toLocaleDateString()}</small></p>
        `;
    }
}

customElements.define('note-item', NoteItem);
