const analyzer = {
  getWordCount: function (text) {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    if (!text) {
      return 0;
    }
    const words = text.trim().split(/\s+/);
    return words.length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const textWithoutSpaces = text.replace(/\s+/g, '');
    return textWithoutSpaces.length;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.trim().split(/\s+/).filter(word => word !== '');
    const totalLength = words.reduce((acc, word) => acc + word.length, 0);

    if (words.length === 0) {
      return "0.00"; // No hay palabras, retorna 0.00 como cadena
    }

    const averageLength = totalLength / words.length;
    return averageLength.toFixed(2);
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numbers = text.match(/\d+/g);
    return numbers ? numbers.length : 0;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numbers = text.match(/\d+/g);
    if (numbers) {
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) {
        sum += parseFloat(numbers[i]);
      }
      return sum.toFixed(2);
    }
    return 0;
  },
};

export default analyzer;
