class footerBar extends HTMLElement {

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
            :host {
                display: block;
                width: 100%;
                background: #27445D;
                color: white;
                text-align: center;
            }


            div p {
                font-size: 18px;
                font-family: 'Arial', sans-serif;
                margin: 0;
                padding: 15px;
            }

            .footer-link a {
                color: inherit;
                text-decoration: none;
            }

        </style>

        <div>
            <p>
                © 2025 <span class="footer-link"><a href="">Ichsan Alam Fadillah</a></span>
            </p>
        </div>
        `;
    }

}

customElements.define('footer-bar', footerBar);