import "./note-list.js";

class NoteInput extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }

                .formWrapper {
                    margin-top: 60px;
                }

                #note-form {
                    margin-top: 20px
                }
                    
                input {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    box-sizing: border-box;
                }

                textarea {
                    width: 100%;
                    padding: 10px 110px 50px 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    box-sizing: border-box;
                }

                label {
                    font-size: 20px;
                    display: block;
                    margin-bottom: 5px;
                }

                h1 {
                 margin: 0;
                }

                .body-wrapper {
                    margin-top: 20px;
                }

                button {
                    margin-top: 20px;
                    background: #497D74;
                    color: white;
                    border: none;
                    padding: 10px;
                    cursor: pointer;
                }
            </style>

            <div class="formWrapper">
                <h1>Tambah Catatan</h1>
                <form id="note-form">
                    <div class="title-wrapper">
                        <label for="title">Judul</label>
                        <input type="text" id="title" required />
                    </div>

                    <div class="body-wrapper">
                        <label for="body">Isi catatan</label>
                        <textarea id="body" catatan" required></textarea>
                    </div>

                    <button type="submit">Tambah Catatan</button>
                </form>
            </div>
        `;

        this.shadowRoot.querySelector("#note-form").addEventListener("submit", (event) => {
            event.preventDefault();
            const title = this.shadowRoot.querySelector("#title").value;
            const body = this.shadowRoot.querySelector("#body").value;

            if (title && body) {
                const newNote = {
                    id: `notes-${Date.now()}`,
                    title,
                    body,
                    createdAt: new Date().toISOString(),
                    archived: false,
                };

                const noteList = document.querySelector("note-list");

                if (noteList) {
                    const existingNotes = [...noteList.notes, newNote];
                    noteList.data = existingNotes;
                } else {
                    console.error("Elemen <note-list> tidak ditemukan di dalam dokumen.");
                }

                this.shadowRoot.querySelector("#note-form").reset();
            }
        });
    }
}

customElements.define("note-input", NoteInput);
