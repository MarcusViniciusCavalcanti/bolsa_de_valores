class NegociacaoController {

  constructor() {
    const $ = document.querySelector.bind(document);

    this._inputData = $('#data')
    this._inputQuantidade = $('#valor')
    this._inputValor = $('#quantidade')
  }

  adiciona(event) {
    // cancelando a submissão do formulário
    event.preventDefault()

    const negociacao = this._criaNovaNegociacao()

    console.log(negociacao)
  }

  _criaNovaNegociacao() {
    const quantidade = parseInt(this._inputQuantidade.value)
    const valor = parseFloat(this._inputValor.value)

    const data = new Date(...this._inputData.value.split('-')
      .map((elemento, indice) => elemento - indice % 2)
    )

    const diaMesAno = DataConverso.pataTexto(data)

    console.log(diaMesAno)

    return new Negociacao(data, valor, quantidade)
  }
}



