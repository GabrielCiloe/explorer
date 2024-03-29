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

var calculoTransporte = 0;
var calculoMaterial = 0;
var calculoCursoIdiomas = 0;
var calculoCursoExtracurricular = 0;
var valorTotal = 0;

var totalCalculoTransporte, totalCalculoMaterial, totalCalculoCursoIdiomas, totalCalculoCursoExtracurricular;

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
    var valorMensalidade = parseFloat ( document.getElementById('valorMensalidade').value);

    totalCalculoTransporte = calculoTransporte*(opcoesSerie*12);
    totalCalculoMaterial = calculoMaterial*(opcoesSerie*12);
    totalCalculoCursoIdiomas = calculoCursoIdiomas*(opcoesSerie*12);
    totalCalculoCursoExtracurricular = calculoCursoExtracurricular*(opcoesSerie*12);
    valorMensalidade = valorMensalidade*(opcoesSerie*12);
    
    valorTotal = totalCalculoTransporte + totalCalculoMaterial + totalCalculoCursoIdiomas + totalCalculoCursoExtracurricular + valorMensalidade;
    
    console.log(totalCalculoTransporte);
    console.log(totalCalculoMaterial);
    console.log(totalCalculoCursoIdiomas);
    console.log(totalCalculoCursoExtracurricular);
    console.log(valorMensalidade);
    console.log(valorTotal);

    var geraResultado = document.getElementById('geraResultado');
    /*
    var testeCurrency;
    testeCurrency = valorTotal.toLocaleString('pr-BR',{style: "currency", currency: "BRL"});
    
    cartTotal.textContent = total.toLocaleString('pt-BR', {
        style: "currency",
        currency: "BRL"
    });
    */

    geraResultado.innerHTML = "";
    
    if(opcoesSerie === 0 || isNaN(valorMensalidade)){
        if(opcoesSerie === 0){
            alert ('Por favor insira um valor válido na série');
        }else{
            alert ('Por favor insira um valor válido de mensalidade');
        }
    }else {
        geraResultado.innerHTML = `<div class="resultado">
        <h2>Custo de gastos escolares</h2>
        <div>
          <div>
            <p>Valor transporte</p>
            <p>${totalCalculoTransporte.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p></div>
          <div>
            <p>Valor material escolar</p>
            <p>${totalCalculoMaterial.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
          </div>
          <div>
            <p>Valor curso de idiomas</p>
            <p>${totalCalculoCursoIdiomas.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
          </div>
        </div>
        <div>
          <div>
            <p>Valor curso extracurricular</p>
            <p>${totalCalculoCursoExtracurricular.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
          </div>
          <div>
            <p>Valor mensalidade</p>
            <p>${valorMensalidade.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
          </div>
          <div>
            <p>Valor total</p>
            <p>${valorTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
          </div>
        </div>
      </div>`;
    }
}