var demo = document.getElementById('demo');
var comTransporteBtn = document.getElementById('comTransporte');
var semTransporteBtn = document.getElementById('semTransporte');
var comMaterialBtn = document.getElementById('comMaterial');
var semMaterialBtn = document.getElementById('semMaterial');
var comCursoIdiomasBtn = document.getElementById('comCursoIdiomas');
var semCursoIdiomasBtn = document.getElementById('semCursoIdiomas');
var queroCursoIdiomasBtn = document.getElementById('queroCursoIdiomas');
var comCursoExtracurricularBtn = document.getElementById('comCursoExtracurricular')
var semCursoExtracurricularBtn = document.getElementById('semCursoExtracurricular')
var queroCursoExtracurricularBtn = document.getElementById('queroCursoExtracurricular')

function comTransporte(comTransporteBtn){
    var comTransporteBtn = true;
    

    if(comTransporteBtn == true){
        alert('funcionou');
        comTransporteBtn.classList.add('active');
    } else{
        alert('Nao funcionou')
    }
}



function calcularGastos(){
    var opcoesSerie = parseInt (document.getElementById('serieOptions').value);
    var valorMensalidade = parseInt ( document.getElementById('valorMensalidade').value);

    if(opcoesSerie === 0){
        alert ('Por favor insira um valor válido na série');
    }
    
    alert()
    console.log(valorMensalidade);

}