function materialIncluso(){
    var matIncluso = true;
    var matNaoIncluso = false;
    
    if (matIncluso === true){
        materialInclusoBtn.classList.add('btnActive');
        materialNaoInclusoBtn.classList.remove('btnActive');
        alert('funcionando')
    } else if(matNaoIncluso === true){
        materialInclusoBtn.classList.remove('btnActive');
        materialNaoInclusoBtn.classList.add('btnActive');
    }

}

function materiaNaolIncluso(){
    var matIncluso = false;
    var matNaoIncluso = true;

    if (matIncluso === true){
        materialInclusoBtn.classList.add('btnActive');
        materialNaoInclusoBtn.classList.remove('btnActive');
    } else if(matNaoIncluso === true){
        materialInclusoBtn.classList.remove('btnActive');
        materialNaoInclusoBtn.classList.add('btnActive');
    }
}


var materialInclusoBtn = document.getElementById('materialIncluso');
var materialNaoInclusoBtn = document.getElementById('materialNaoIncluso');

function calcularGastos(){
    
    let select = document.getElementById('serieOptions');
    let valorMensalidade = document.getElementById('valorMensalidade');
    
    
    let qualSerie;

    console.log( typeof valorMensalidade);
    let valorMensal = parseInt(valorMensalidade.value);
    
    qualSerie = select.value;
    let alunoSerie = parseInt(qualSerie)
    console.log(alunoSerie);
    
    console.log( typeof alunoSerie);


    /**
     * Aqui vai ser o valor da mensalidade * (a quantidade de anos * 12) = soma
     */
    let soma = (alunoSerie * 12) * valorMensal;
    alert(soma);


    
    


        

    
}