function calcularGastos(){
    
    let select = document.getElementById('serieOptions');
    let valorMensalidade = document.getElementById('valorMensalidade');
    
    let materialIncluso = document.getElementById('materialIncluso');
    let materialNaoIncluso = document.getElementById('materialNaoIncluso');
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


    materialIncluso = function(){
        let materialInclusoRes = alunoSerie * 12;

        alert (materialInclusoRes)
    }
    


        

    
}