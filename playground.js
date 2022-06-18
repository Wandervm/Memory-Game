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
    ligthScreen();
   
}

function changeClass(){
    
    body.classList.toggle( 'lightMode');
   
}
function darkButton(){
  
    buttonLight.classList.toggle( 'darkButton');
    if(body.classList.contains('lightMode')){
        buttonLight.style.backgroundColor = "black";
        return;
    }
    if(body.classList.contains('darkMode')){
        buttonLight.style.backgroundColor = "#f1f1f1";
        return;
    }
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

function ligthScreen(){
    if(body.classList.contains('lightMode')){
        playScreen.classList.remove('darkScreen');
        playScreen.classList.add('ligthScreen');
        return;
    }
    if(body.classList.contains('darkMode')){
        playScreen.classList.add('darkScreen');
        playScreen.classList.remove('ligthScreen');
        return;
    }
}