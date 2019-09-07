
  class DataConverso {

    constructor() {
      throw new Error('Esta classe não pode se instanciada')
    }

    //.. métodos estáticos omitidos



    static paraTexto(data) {
      if (data instanceof Date) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
      }

      throw new Error('Data inválida')
    }

    static paraData(texto) {
      return new Date(...texto.split('-').map((item, indice) => {
        return item - indice % 2
      }))
    }

  }


