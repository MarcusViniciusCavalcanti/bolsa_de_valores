
  class DataConverso {

    static pataTexto(data) {
      return `${data.getDay()}/${data.getMonth() + 1}/${data.getFullYear()}`
    }

    static paraData(texto) {
      return new Date(...texto.split('-').map((item, indice) => {
        return item - indice % 2
      }))
    }

  }


