const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');



const randonNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

//Função Callback
function handleTryClick(event){
    event.preventDefault();

    const inputNumber = document.getElementById('inputNumber')

    if(Number(inputNumber.value) == randonNumber){
        screen1.classList.add('hide');
        screen2.classList.remove('hide')

        document.querySelector('.screen2 h2').innerText = `Acertou em ${xAttempts} vezes`
    }
    
    inputNumber.value = "";
    xAttempts++
    
}


//Eventos


btnTry.addEventListener('click', handleTryClick);

btnReset.addEventListener('click', function(){
    screen1.classList.remove('hide');
    screen2.classList.add('hide');

    xAttempts = 1;
})