const cards = document.querySelectorAll('.cards');
let hasFlipedCard = false;
let firstCard, secondCard;

function flipCard(){
    this.classList.add('flip');
    if(!hasFlipedCard){
        hasFlipedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlipedCard = false;
    checkMatch();
}

function checkMatch(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
        return;
    }

    unFlipCards();
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unFlipCards(){
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 1500);
}


cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})

