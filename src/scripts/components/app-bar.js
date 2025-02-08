class AppBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['title'];
    }

    attributeChangedCallback(name) {
        if (name === 'title') {
            this.render();
        }
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const title = this.getAttribute('title') || 'Notes App';
        this.shadowRoot.innerHTML = `
          <style>
              :host {
                  display: block;
                  width: 100%;
                  background: #27445D;
                  color: white;
                  text-align: center;
                  font-size: 25px;
                  font-weight: bold;
                  font-family: 'Arial', sans-serif;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              }
              div {
                  padding: 15px;
              }
          </style>
          <div>${title}</div>
      `;
    }
}

customElements.define('app-bar', AppBar);