class MensagemView {
  constructor(seletor) {
    this._elemento = document.querySelector(seletor)
  }

  template(model) {
    return model.texto ?
      `<p>${model.texto}</p>` :
      `<p></p>`
  }

  update(model) {
    this._elemento.innerHTML = this.template(model)
  }
}


