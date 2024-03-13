


let select = document.getElementById('serieOptions');
let valorMensalidade = document.getElementById('valorMensalidade').value;


let qualSerie;
let valorMes;
select.onchange = function(){
    qualSerie = this.value;
    let alunoSerie = parseInt(qualSerie)
    console.log(alunoSerie);
    
    console.log( typeof alunoSerie);

    let soma = alunoSerie*valorMes;
    console.log(soma)
}
