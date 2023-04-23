class CustomSearchBar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/components/SearchBar/style.css" />
      <div class="input-container">
        <img src="/images/search.svg" />
        <input type="text" />
      </div>
    `;
  }

  connectedCallback() {
    const placeholder = this.hasAttribute("placeholder") ? this.getAttribute("placeholder") : "원하는 정보를 검색하세요";
    const input = this.shadowRoot.querySelector("input");

    input.setAttribute("placeholder", placeholder);
  }
}

customElements.define("search-bar", CustomSearchBar);
