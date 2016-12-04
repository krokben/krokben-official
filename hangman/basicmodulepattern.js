var hangmanGame = (function() {

    // Global variables
    var hangman = document.getElementById('hangman');
    var wordbox = document.getElementById('wordbox');
    var wrong = document.getElementById('wrong');
    var resetButton = document.getElementById('resetButton');

    var words = ['KRUKA', 'KALSONGER', 'ENCYKLOPEDI', 'FALUKORV', 'ALTAN', 'BALKONG', 'MOROT'];
    var word = '';
    var counter = 0;
    var points = 0;

    // Event listeners
    resetButton.addEventListener('click', resetState);
    document.onkeydown = guess;
    document.addEventListener('keypress', resetEnter);

    // Init
    createWord();
    fillWord();

    function createWord() {
        word = words[Math.floor(Math.random() * words.length)];
    }

    function fillWord() {
        for (var i = 0; i < word.length; i++) {
            wordbox.innerHTML += '<div><span class="' + word.charAt(i) + '" style="opacity: 0">' + word.charAt(i) + '</span></div>';
        }
    }

    function resetState() {
        resetButton.style.display = 'none';
        counter = 0;
        points = 0;
        wordbox.innerHTML = '';
        wrong.innerHTML = '';
        hangman.innerHTML = '';
        createWord();
        fillWord();
        document.onkeydown = guess;
    }

    function guess(event) {
        // If less than 7 guesses has been made, make the guess
        if (counter < 7) {
            var key_press = String.fromCharCode(event.keyCode);
        	var key_code = event.keyCode;
            var letters = document.querySelectorAll('.' + key_press);

            // If guess is correct, show letter
            if (letters[0] && (letters[0].style.opacity !== '1')) {
                for (var i = 0; i < letters.length; i++) {
                    letters[i].style.opacity = '1';
                    points++;

                    // Check to see if game is won
                    if (points === wordbox.childNodes.length) {
                        hangman.innerHTML = 'Grattis, du har vunnit!';
                        resetButton.style.display = 'block';
                        document.onkeydown = null;
                    }
                }

            // If guess is incorrect, change image and add to wrong guesses counter
            } else if (letters[0] === undefined && wrong.innerHTML.search(key_press) === -1) {
                    console.log(wrong.innerHTML.search(key_press));
                    counter++;
                    hangman.innerHTML = '<img src="' + counter + '.png" />';
                    wrong.innerHTML += key_press;
            }

        // If user has made 8 incorrect guesses, show "game over"-message and reset button
        } else {
            hangman.innerHTML = 'Du är död och den.';
            resetButton.style.display = 'block';
        }
    }

    // Make reset button clickable with Enter key on keyboard
    function resetEnter(e) {
            var key = e.which || e.keyCode;
            if (key === 13 && resetButton.style.display === 'block') { // 13 is enter
              resetState();
            }
    }

})();

hangmanGame();
