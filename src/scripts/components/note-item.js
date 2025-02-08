class NoteItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    set note(note) {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    flex-direction: column;
                    padding: 15px;
                    border-radius: 8px;
                    background: white;
                    box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
                }

                h2 {
                    margin: 0;
                    font-size: 20px;
                }

                .body {
                    font-size: 16px;
                    color: #27445D;
                }

                .time {
                    font-size: 14px;
                    color: #E52020;
                    align-self: flex-end;
                    margin-top: auto;
                }

            </style>
            <h2>${note.title}</h3>
            <p class='body'>${note.body}</p>
            <p class='time'>${new Date(note.createdAt).toLocaleDateString()}</p>
        `;
    }
}

customElements.define('note-item', NoteItem);
