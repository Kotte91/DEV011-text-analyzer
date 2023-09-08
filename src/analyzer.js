const analyzer = {
  getWordCount: function (text) {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    if (!text) {
      return 0;
    }

    let wordCount = 0;
    let isWord = false;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];

      // Verifica si el carácter actual es una letra o un apóstrofe (para palabras como "don't")
      if (/[a-zA-Z']/i.test(char)) {
        isWord = true;
      } else {
        // Si el carácter no es una letra ni un apóstrofe y estábamos en una palabra, incrementa el recuento
        if (isWord) {
          wordCount++;
          isWord = false;
        }
      }
    }

    // Verifica si la última palabra termina al final del texto
    if (isWord) {
      wordCount++;
    }

    return wordCount;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const textWithoutSpaces = text.replace(/[\s,.0-9]/g, '');
    return textWithoutSpaces.length;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.trim().split(/\s+/).filter(word => word !== '');
    const totalLength = words.reduce((acc, word) => acc + word.length, 0);

    if (words.length === 0) {
      return 0.00;
    }

    const averageLength = totalLength / words.length;
    return parseFloat(averageLength.toFixed(2));
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numbers = text.match(/\b\d+\.\d+\b|\b\d+\b/g);

    const validNumbers = numbers ? numbers.filter(number => !isNaN(Number(number))) : [];

    return validNumbers.length;
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numbers = text.match(/\b\d+\.\d+\b|\b\d+\b/g);

    // Suma los números y devuelve el resultado como un número
    const sum = numbers
      ? numbers.reduce((acc, number) => acc + parseFloat(number), 0)
      : 0;

    return parseFloat(sum.toFixed(2));
  },
};

export default analyzer;
