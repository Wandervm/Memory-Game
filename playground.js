const setModal = document.getElementById("modalGame");
const closeModal = setModal;


document.getElementById("btn").onclick = function(){
    setModal.style.display = "block";
    
}
document.getElementById("close").onclick = function(){
    setModal.style.display = "none"
}


//DarkMode and LigthMode

const buttonLight = document.getElementById('mode-select');
const body = document.getElementById('body');
const playScreen = document.getElementById('screenPlay');



buttonLight.addEventListener('click', modeChange);


function modeChange(){
    changeClass();
    darkButton();
    changetext();
   
}

function changeClass(){
    
    body.classList.toggle( 'lightMode');
   
}
function darkButton(){
  
    buttonLight.classList.toggle( 'darkButton');
}

function changetext(){
    if(body.classList.contains('lightMode')){
        buttonLight.innerHTML = 'Dark Mode';
        return;
    }
    if (body.classList.contains('darkMode')){
        buttonLight.innerHTML = "Light Mode";
        return;
        
    }
}