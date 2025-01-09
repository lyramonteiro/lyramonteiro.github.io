// ? CYCLE WORDS
function cycleWords() {
    const wordsArray = ['Desenvolvedora Front-End', 'Web Designer', 'Detalhista e Criativa'];
    const wordSpan = document.getElementById('js--cycle-word');
    let currentIndex = 0;

    function updateWord() {
        wordSpan.textContent = wordsArray[currentIndex];
        currentIndex = (currentIndex + 1) % wordsArray.length;
    }

    updateWord();
    setInterval(updateWord, 2000); // ? mesma duração da animação no CSS
}

// Iniciar
cycleWords();
