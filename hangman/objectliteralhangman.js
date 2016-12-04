(function() {

    var hangman = {
        words: ['KRUKA', 'KALSONGER', 'ENCYKLOPEDI', 'FALUKORV', 'ALTAN', 'BALKONG', 'MOROT'],
        init: function() {
            this.cacheDom();
            this.bindEvents();
            this.render();
        },
        cacheDom: function() {
            this.images = document.getElementById('images');
            this.wordbox = document.getElementById('wordbox');
            this.wrong = document.getElementById('wrong');
            this.resetButton = document.getElementById('resetButton');
            this.counter = 0;
        },
        bindEvents: function() {
            this.resetButton.addEventListener('click', this.resetState);
            document.onkeydown = this.guess;
        },
        render: function() {
            var words = {words: this.words};
            var word = this.words[Math.floor(Math.random() * this.words.length)];
            for (var i = 0; i < this.word.length; i++) {
                this.wordbox.innerHTML += '<div><span class="' + this.word.charAt(i) + '" style="opacity: 0">' + this.word.charAt(i) + '</span></div>';
            }
        },
        guess: function(event) {
            if (counter < 7) {
                var key_press = String.fromCharCode(event.keyCode);
            	var key_code = event.keyCode;
                var letters = document.querySelectorAll('.' + key_press);

                if (letters[0] && (letters[0].style.opacity !== '1')) {
                    for (var i = 0; i < letters.length; i++) {
                        letters[i].style.opacity = '1';
                    }
                } else if (letters[0] === undefined) {
                        counter++;
                        this.images.innerHTML = '<img src="' + counter + '.png" />';
                        this.wrong.innerHTML += key_press;
                }
            } else {
                this.images.innerHTML = 'Du är död och den.<br />';
                this.resetButton.style.display = 'inline';
            }
        },
        resetState: function() {
            this.counter = 0;
            this.wordbox.innerHTML = '';
            this.wrong.innerHTML = '';
            this.images.innerHTML = '';
            this.resetButton.style.display = 'none';
        }
    };

    hangman.init();

})();
