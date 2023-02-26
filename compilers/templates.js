const only_connected = `class component_name_shadow extends HTMLElement {
    constructor() {
      super()
    }
    connectedCallback() {
      shadowRoot = this.attachShadow({ mode: "open" })
      shadowRoot.appendChild(file)
    }
  }
  customElements.define("component_name-shadow", component_name_shadow)`

module.exports = {
    only_connected
}