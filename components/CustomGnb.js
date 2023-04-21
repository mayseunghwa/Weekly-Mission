import ProcessData from "/scripts/ProcessData.js";

class CustomGnb extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.isLogin = true;
  }

  render() {
    this.isLogin ? this.applyLoginTemplate() : this.applyDefaultTemplate();
  }

  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }

  applyDefaultTemplate() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url("/components/styles/CustomGnb.css");
      </style>
      <header>
        <div class="header-container">
          <a href="/">
            <img class="logo" src="./images/logo.png" alt="로고" />
          </a>
          <a href="/signin.html" class="button-login">로그인</a>
        </div>
      </header>
    `;
  }

  async applyLoginTemplate() {
    const processor = new ProcessData();
    const userData = await processor.fetchUserData();
    console.log(userData);

    this.shadowRoot.innerHTML = `
      <style>
        @import url("/components/styles/CustomGnb.css");
      </style>
      <header>
        <div class="header-container">
          <a href="/">
            <img class="logo" src="./images/logo.png" alt="로고" />
          </a>
          <div class="profile-container">
            <img class="profile" src="${userData.profileImageSource}" alt="${userData.name}" />
            <p class="profile-email">${userData.email}</p>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define("custom-gnb", CustomGnb);
