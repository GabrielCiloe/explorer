const randonNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

function handleClick(event){
    event.preventDefault();

    const inputNumber = document.getElementById('inputNumber')

    if(Number(inputNumber.value) == randonNumber){
        document.querySelector('.screen1').classList.add('hide');
        document.querySelector('.screen2').classList.remove('hide')

        console.log(`acertou em ${xAttempts} tentativas`);
    }
    
    xAttempts++
    console.log(xAttempts);
}