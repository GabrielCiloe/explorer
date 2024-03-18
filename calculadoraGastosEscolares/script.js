var comTransporteVar = true, semTransporteVar = true;

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

function comTransporte(){
    
    if(comTransporteVar == true){
        comTransporteBtn.classList.add('active');
        semTransporteBtn.classList.remove('active');
        calculoTransporte = 500;
    } else{
        alert('Nao funcionou');
    }
}

function semTransporte(){
    
    if(semTransporteVar == true){
        comTransporteBtn.classList.remove('active');
        semTransporteBtn.classList.add('active');
        calculoTransporte = 0;
    } else{
        alert('Nao funcionou');
    }
}



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