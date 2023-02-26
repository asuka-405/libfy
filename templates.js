const only_connected = `class component_name_shadow extends HTMLElement {\nconstructor(){\nsuper()\n}\nconnectedCallback(){\nshadowRoot = this.attachShadow({mode: 'open'})\nshadowRoot.appendChild(component_name)\n}\n}\ncustomElements.define("component_name-shadow", component_name_shadow)`

module.exports = {
    only_connected
}