function calcularGastos(){
    
    let select = document.getElementById('serieOptions');
    let qualSerie;
    let valorMensalidade = document.getElementById('valorMensalidade');

    console.log( typeof valorMensalidade)
    let valorMensal = parseInt(valorMensalidade.value);
    
    
    qualSerie = select.value;
    let alunoSerie = parseInt(qualSerie)
    console.log(alunoSerie);
    
    console.log( typeof alunoSerie);

    let soma = (alunoSerie * 12) * valorMensal;
    alert(soma);

        

    
}