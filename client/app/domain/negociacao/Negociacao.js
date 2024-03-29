class Negociacao {

  constructor(_data, _valor, _quantidade) {
    Object.assign(this, { _valor, _quantidade})
    this._data = new Date(_data.getTime())
    Object.freeze(this)
  }

  get volume() {
    return this._valor * this._quantidade
  }

  get data() {
    return new Date(this._data.getTime())
  }

  get quantidade() {
    return this._quantidade
  }

  get valor() {
    return this._valor
  }
}
