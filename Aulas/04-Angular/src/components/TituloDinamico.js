class TituloDinamico extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});

        // Base Component (<h1>Danilo</h1>)
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = "Danilo";

        // Estilizar Component
        const style = document.createElement("style");
        style.textContent = `
        h1{
            color: red;
        }
        `;
        // Enviar para Shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define("titulo-dinamico", TituloDinamico);