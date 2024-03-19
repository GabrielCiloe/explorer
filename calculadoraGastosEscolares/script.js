var comTransporteVar = false, semTransporteVar = false;
var comMaterialVar = false, semMaterialVar = false;
var comCursoIdiomasVar = false, semCursoIdiomasVar = false, queroCursoIdiomasVar = false;
var comCursoExtracurricularVar = false, semCursoExtracurricularVar = false, queroCursoExtracurricularVar = false;

var demo = document.getElementById('demo');
var comTransporteBtn = document.getElementById('comTransporte');
var semTransporteBtn = document.getElementById('semTransporte');
var comMaterialBtn = document.getElementById('comMaterial');
var semMaterialBtn = document.getElementById('semMaterial');
var comCursoIdiomasBtn = document.getElementById('comCursoIdiomas');
var semCursoIdiomasBtn = document.getElementById('semCursoIdiomas');
var queroCursoIdiomasBtn = document.getElementById('queroCursoIdiomas');
var comCursoExtracurricularBtn = document.getElementById('comCursoExtracurricular');
var semCursoExtracurricularBtn = document.getElementById('semCursoExtracurricular');
var queroCursoExtracurricularBtn = document.getElementById('queroCursoExtracurricular');

var calculoTransporte;
var calculoMaterial;
var calculoCursoIdiomas;
var calculoCursoExtracurricular;

/* Funções de transporte */
function comTransporte(){
    
    if(comTransporteVar == false){
        comTransporteBtn.classList.add('active');
        semTransporteBtn.classList.remove('active');
        calculoTransporte = 500;
        comTransporteVar = true;
        semTransporteVar = false;
    }
}

function semTransporte(){
    
    if(semTransporteVar == false){
        comTransporteBtn.classList.remove('active');
        semTransporteBtn.classList.add('active');
        calculoTransporte = 0;
        comTransporteVar = false;
        semTransporteVar = true;
    }
}

/* Funções de Material */
function comMaterial(){
    
    if(comMaterialVar == false){
        comMaterialBtn.classList.add('active');
        semMaterialBtn.classList.remove('active');
        calculoMaterial = 500;
        comMaterialVar = true;
        semMaterialVar = false;
    }
}

function semMaterial(){
    
    if(semMaterialVar == false){
        comMaterialBtn.classList.remove('active');
        semMaterialBtn.classList.add('active');
        calculoMaterial = 0;
        comMaterialVar = false;
        semMaterialVar = true;
    }
}

/* Funções de Curso de idioma */
function comCursoIdiomas(){
    
    if(comCursoIdiomasVar == false){
        comCursoIdiomasBtn.classList.add('active');
        semCursoIdiomasBtn.classList.remove('active');
        queroCursoIdiomasBtn.classList.remove('active');
        calculoCursoIdiomas = 500;
        comCursoIdiomasVar = true;
        semCursoIdiomasVar = false;
        queroCursoIdiomasVar = false;
    }
}

function semCursoIdiomas(){
    
    if(semCursoIdiomasVar == false){
        comCursoIdiomasBtn.classList.remove('active');
        semCursoIdiomasBtn.classList.add('active');
        queroCursoIdiomasBtn.classList.remove('active');
        calculoCursoIdiomas = 0;
        comCursoIdiomasVar = false;
        semCursoIdiomasVar = true;
        queroCursoIdiomasVar = false;
    }
}

function queroCursoIdiomas(){
    
    if(queroCursoIdiomasVar == false){
        comCursoIdiomasBtn.classList.remove('active');
        semCursoIdiomasBtn.classList.remove('active');
        queroCursoIdiomasBtn.classList.add('active');
        calculoCursoIdiomas = 0;
        comCursoIdiomasVar = false;
        semCursoIdiomasVar = false;
        queroCursoIdiomasVar = true;
    }
}

/* Funções de Curso extracurricular */
function comCursoExtracurricular(){
    
    if(comCursoExtracurricularVar == false){
        comCursoExtracurricularBtn.classList.add('active');
        semCursoExtracurricularBtn.classList.remove('active');
        queroCursoExtracurricularBtn.classList.remove('active');
        calculoCursoExtracurricular = 500;
        comCursoExtracurricularVar = true;
        semCursoExtracurricularVar = false;
        queroCursoExtracurricularVar = false;
    }
}

function semCursoExtracurricular(){
    
    if(semCursoExtracurricularVar == false){
        comCursoExtracurricularBtn.classList.remove('active');
        semCursoExtracurricularBtn.classList.add('active');
        queroCursoExtracurricularBtn.classList.remove('active');
        calculoCursoExtracurricular = 0;
        comCursoExtracurricularVar = false;
        semCursoExtracurricularVar = true;
        queroCursoExtracurricularVar = false;
    }
}

function queroCursoExtracurricular(){
    
    if(queroCursoExtracurricularVar == false){
        comCursoExtracurricularBtn.classList.remove('active');
        semCursoExtracurricularBtn.classList.remove('active');
        queroCursoExtracurricularBtn.classList.add('active');
        calculoCursoExtracurricular = 0;
        comCursoExtracurricularVar = false;
        semCursoExtracurricularVar = false;
        queroCursoExtracurricularVar = true;
    }
}

/* Função de calcular */

function calcularGastos(){
    var opcoesSerie = parseInt (document.getElementById('serieOptions').value);
    var valorMensalidade = parseInt ( document.getElementById('valorMensalidade').value);

    if(opcoesSerie === 0){
        alert ('Por favor insira um valor válido na série');
    }
    valorMensalidade = (valorMensalidade*(opcoesSerie*12))+(calculoTransporte*(12*opcoesSerie));
    alert()
    console.log(valorMensalidade);
    
}