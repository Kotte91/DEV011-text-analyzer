import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const textarea = document.querySelector('textarea');
const wordCountElement = document.querySelector('[data-testid="word-count"]');
const characterCountElement = document.querySelector('[data-testid="character-count"]');
const characterNoSpacesCountElement = document.querySelector('[data-testid="character-no-spaces-count"]');
const numberCountElement = document.querySelector('[data-testid="number-count"]');
const numberSumElement = document.querySelector('[data-testid="number-sum"]');
const wordLengthAverageElement = document.querySelector('[data-testid="word-length-average"]');
const resetButton = document.getElementById('reset-button');

function updateResults() {
  const text = textarea.value;

  wordCountElement.textContent = `Recuento de palabras: ${analyzer.getWordCount(text)}`;
  characterCountElement.textContent = `Recuento de caracteres: ${analyzer.getCharacterCount(text)}`;
  characterNoSpacesCountElement.textContent = `Recuento de caracteres (sin espacios ni puntuación): ${analyzer.getCharacterCountExcludingSpaces(text)}`;
  numberCountElement.textContent = `Recuento de números: ${analyzer.getNumberCount(text)}`;
  numberSumElement.textContent = `Suma total de números: ${analyzer.getNumberSum(text)}`;
  wordLengthAverageElement.textContent = `Longitud media de palabras: ${analyzer.getAverageWordLength(text)}`;
}

document.getElementsByName("user-input")[0].addEventListener('keyup', function () {
  // Código para manejar el evento keyu en el elemento con name "user-input"p
});
textarea.addEventListener('input', updateResults);

resetButton.addEventListener('click', () => {
  textarea.value = ''; // Limpiar el textarea
  updateResults(); // Actualizar resultados vacíos
});

// Actualizar resultados iniciales
updateResults();