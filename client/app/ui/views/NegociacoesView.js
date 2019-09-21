class NegociacoesView {

  constructor(seletor) {
    this._elemento = document.querySelector(seletor)
  }

  update(negociacoes) {
    this._elemento.innerHTML = this.template(negociacoes)
  }

  template(negociacoes) {
    return `
     <table>
    
          <thead>
              <tr>
                  <th>DATA</th>
                  <th>QUANTIDADE</th>
                  <th>VALOR</th>
                  <th>VOLUME</th>
              </tr>
          </thead>

          <tbody>
              ${negociacoes.paraArray().map(negociacao => {
                  return `
                    <tr>
                      <td>${DataConverso.paraTexto(negociacao.data)}</td>
                      <td>${negociacao.quantidade}</td>
                      <td>${negociacao.valor}</td>
                      <td>${negociacao.volume}</td>
                    </tr>
                  `
                }).join('')
              }
          </tbody>

          <tfoot>
              <tr>
                  <td colspan="3"></td>
                  <td>${negociacoes.volumeTotal}</td>
              </tr>
          </tfoot>
      </table>
    `
  }
}



