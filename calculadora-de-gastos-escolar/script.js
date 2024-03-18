var matIncluso = false, matNaoIncluso = false;

var trsOff = false, trsOn = false, trsParte = false;

var idmIn = false, idmOff = false, idmOn = false;

var extIn = false, extOff = false, extOn = false;

/* Atribuição das variáveis que irão ter o estilo inserido quando clicadas */

var materialInclusoBtn = document.getElementById('materialIncluso');
var materialNaoInclusoBtn = document.getElementById('materialNaoIncluso');

var trsOffBtn = document.getElementById('trsOff');
var trsOnBtn = document.getElementById('trsOn');
var trsParteBtn = document.getElementById('trsParte');

var idmInBtn = document.getElementById('idmIn');
var idmOffBtn = document.getElementById('idmOff');
var idmOnBtn = document.getElementById('idmOn');

var extInBtn = document.getElementById('extIn');
var extOffBtn = document.getElementById('extOff');
var extOnBtn = document.getElementById('extOn');

/* Sobre o material escolar */

function materialIncluso(){
    
    if (matIncluso === false){
        matIncluso = true;
        matNaoIncluso = false;
        materialInclusoBtn.classList.add('btnActive');
        materialNaoInclusoBtn.classList.remove('btnActive');
        alert('funcionando')
    }

}

function materiaNaolIncluso(){

    if(matNaoIncluso === false){
        matNaoIncluso = true;
        matIncluso = false;
        materialInclusoBtn.classList.remove('btnActive');
        materialNaoInclusoBtn.classList.add('btnActive');
    }
}

/* Sobre o transporte escolar */

function transporteOff(){

    if(trsOff === false){
        trsOff = true;
        trsOn = false;
        trsParte = false;
        trsOffBtn.classList.add('btnActive');
        trsOnBtn.classList.remove('btnActive');
        trsParteBtn.classList.remove('btnActive');
    }
}

function transporteOn(){
    
    if (trsOn === false){
        trsOff = false;
        trsOn = true;
        trsParte = false;
        trsOffBtn.classList.remove('btnActive');
        trsOnBtn.classList.add('btnActive');
        trsParteBtn.classList.remove('btnActive');
    }

}

function transporteAParte(){
    
    if (trsParte === false){
        trsOn = false;
        trsOff = false;
        trsParte = true;
        trsOnBtn.classList.remove('btnActive');
        trsOffBtn.classList.remove('btnActive');
        trsParteBtn.classList.add('btnActive');
    }

}

/* Sobre curso de idiomas */

function idiomaIn(){

    if (idmIn === false){
        idmIn = true;
        idmOff = false;
        idmOn = false;
        idmInBtn.classList.add('btnActive');
        idmOffBtn.classList.remove('btnActive');
        idmOnBtn.classList.remove('btnActive');
    }
}

function idiomaOff(){

    if (idmOff === false){
        idmIn = false;
        idmOff = true;
        idmOn = false;
        idmInBtn.classList.remove('btnActive');
        idmOffBtn.classList.add('btnActive');
        idmOnBtn.classList.remove('btnActive');
    }
}

function idiomaOn(){

    if (idmOn === false){
        idmIn = false;
        idmOff = false;
        idmOn = true;
        idmInBtn.classList.remove('btnActive');
        idmOffBtn.classList.remove('btnActive');
        idmOnBtn.classList.add('btnActive');
    }
}

/* Sobre cursos extracurriculares */

function extracurricularIn(){

    if (extIn === false){
        extIn = true;
        extOff = false;
        extOn = false;
        extInBtn.classList.add('btnActive');
        extOffBtn.classList.remove('btnActive');
        extOnBtn.classList.remove('btnActive');
    }
}

function extracurricularOff(){

    if (extOff === false){
        extIn = false;
        extOff = true;
        extOn = false;
        extInBtn.classList.remove('btnActive');
        extOffBtn.classList.add('btnActive');
        extOnBtn.classList.remove('btnActive');
    }
}

function extracurricularOn(){

    if (extOn === false){
        extIn = false;
        extOff = false;
        extOn = true;
        extInBtn.classList.remove('btnActive');
        extOffBtn.classList.remove('btnActive');
        extOnBtn.classList.add('btnActive');
    }
}

/* Função de calcular o valor de gasto */

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