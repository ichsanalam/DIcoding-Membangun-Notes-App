class NoteSearch extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .searchWrapper {
                    margin-top: 60px;
                }

                input {
                    padding: 10px;
                    border: 1px solid #ccc;
                    width: 40%;
                    border-radius: 5px;
                    margin-top: 10px;
                }

                h1 {
                    margin: 0;
                }

                @media (max-width: 639px) {
                input {
                    width: 70%;
                }
        }
            </style>

            <div class="searchWrapper">
                <h1>Daftar Catatan</h1>
                <input type="text" id="search" placeholder="Cari disini...">
            </div>
        `;

        const searchInput = this.shadowRoot.querySelector('#search');
        searchInput.addEventListener('input', (event) => {
            const searchEvent = new CustomEvent('search-note', {
                detail: event.target.value,
            })
            this.dispatchEvent(searchEvent);
        });
    }

}

customElements.define("note-search", NoteSearch);