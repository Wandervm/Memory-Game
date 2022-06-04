const setModal = document.getElementById("modalGame");
const closeModal = setModal;
const cards = document.querySelectorAll('.cards');
let hasFlippedCard = false;
let firstCard, secondCard;


function flipCard() {
    this.classList.add('flip');
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;

    checkMatch();
}

cards.forEach((card) =>{
    card.addEventListener('click', flipCard)
})




















document.getElementById("btn").onclick = function(){
    setModal.style.display = "block";
    
}
document.getElementById("close").onclick = function(){
    setModal.style.display = "none"
}




