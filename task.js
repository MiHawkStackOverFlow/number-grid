(function () {
    let gamesBoard = document.getElementsByClassName('game-board')[0];
    var sorted = true;

    function shuffle() {
        sorted = false;
        for (let i = gamesBoard.children.length; i > 0; i--) {
            gamesBoard.appendChild(gamesBoard.children[Math.random() * i | 0]);
        }
    }

    function sort() {
        if (!sorted) {
            const items = [...gamesBoard.children];
            items.sort((a, b) => a.innerHTML - b.innerHTML);
            items.forEach(it => gamesBoard.appendChild(it));
            sorted = true;
        } else {
            alert('Already sorted. Please shuffle to unsort');
        }
    }

    const shuffleButton = document.getElementById('shuffle-button');
    shuffleButton.addEventListener("click", shuffle);

    const sortButton = document.getElementById('sort-button');
    sortButton.addEventListener("click", sort);
})();