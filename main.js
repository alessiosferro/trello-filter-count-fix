const intervalId = window.setInterval(() => {
    if (!document.getElementById('board')) return;

    clearInterval(intervalId);

    const refreshButton = document.createElement('button');
    const board = document.getElementById('board');

    refreshButton.className = "refresh-button";
    refreshButton.textContent = "Fix count";

    refreshButton.onclick = () => {
        const lists = Array.from(document.querySelectorAll('.js-list'));

        lists.forEach(list => {
            const numCards = list.querySelector('.list-header-num-cards');

            const cards = Array.from(list.querySelector('.list-cards').children || []);

            numCards.textContent = `${cards.filter(card => !Array.from(card.classList).includes('hide')).length} schede`;
        });
    };

    board.appendChild(refreshButton);
}, 100);
