class Cardnews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card-left");

    const autor = document.createElement("span");
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymus");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-url");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("contet");

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card-right");
    const newsImage = document.createElement("img");
    newsImage.src = this.getAttribute("photo") || "assets/darteVader.png";
    newsImage.src = "assets/darteVader.png";
    newsImage.alt = "Foto da Noticia";

    cardRight.appendChild(newsImage);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
    
.card {
    width: 80%;
    /* border: 1px solid gray; */
    -webkit-box-shadow: 10px 8px 13px 3px #000000; 
    box-shadow: 10px 8px 13px 3px #000000;;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.card-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
}

.card-left a {
    margin-top: 15px;
    font-size: 25px;
    color: black;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
}

.card-left p {
    color: gray;
}

.card-left span {
    font-weight: bold;
}
    `;

    return style;
  }
}

customElements.define("card-news", Cardnews);
