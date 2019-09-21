class NegociacaoController {

  constructor() {
    const $ = document.querySelector.bind(document);

    this._inputData = $('#data')
    this._inputQuantidade = $('#quantidade')
    this._inputValor = $('#valor')
    this._negociacoes = new Negociacoes()

    this._negocoesView = new NegociacoesView('#negociacoes')
    this._negocoesView.update(this._negociacoes)

    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView('#mensagemView')
    this._mensagemView.update(this._mensagem)
  }

  adiciona(event) {
    // cancelando a submissão do formulário
    event.preventDefault()

    this._negociacoes.adiciona(this._criaNovaNegociacao())
    this._negocoesView.update(this._negociacoes)
    this._limpaFormulario()
    this._mensagem.texto = 'Negociação criada com sucesso';
    this._mensagemView.update(this._mensagem)
  }

  _criaNovaNegociacao() {
    const quantidade = parseInt(this._inputQuantidade.value)
    const valor = parseFloat(this._inputValor.value)
    const data = DataConverso.paraData(this._inputData.value)

    return new Negociacao(data, valor, quantidade)
  }

  _limpaFormulario() {
    this._inputData.value = ''
    this._inputQuantidade.value = 1
    this._inputValor.value = 0.0
    this._inputData.focus()
  }
}
