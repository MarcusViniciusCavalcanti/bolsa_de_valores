class DataConverso {

  constructor() {
    throw new Error('Esta classe não pode se instanciada')
  }

  static paraTexto(data) {
    if (data instanceof Date) {
      return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
    }

    throw new Error('Data inválida')
  }

  static paraData(texto) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(texto)) {
      throw new Error('Deve estar no formato aaaa-mm-dd');
    }

    return new Date(...texto.split('-').map((item, indice) => {
      return item - indice % 2;
    }));

  }

}


