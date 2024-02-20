const indexUrl = location.href.lastIndexOf('/');
const url = location.href.substring(0, indexUrl);
const demo = document.getElementById('demo');
const demo2 = document.getElementById('demo2');

const graduacao = async () => {
    const newUrl = `${url}/modGrad.html`;
    
    const response = await fetch(newUrl).then(r => r.text());
    demo.innerHTML = `${response}`;
    demo2.innerHTML = ` `
}

const posGraduacao = async () => {
    const newUrl = `${url}/pagePos.html`;
    const response = await fetch(newUrl).then(r => r.text());

    demo.innerHTML = `${response}`

    demo2.innerHTML = ` `
}

const educacaoBasica = async () => {
    const newUrl = `${url}/modEdBasica.html`;
    const response = await fetch(newUrl).then(r => r.text());

    demo.innerHTML = `${response}`

    demo2.innerHTML = ` `
}

const mestrado = async () => {
    const newUrl = `${url}/modMestrado.html`;
    const response = await fetch(newUrl).then(r => r.text());

    demo.innerHTML = `${response}`

    demo2.innerHTML = ` `
}

const cursosLivres = async () => {
    const newUrl = `${url}/modCursosLivres.html`;
    const response = await fetch(newUrl).then(r => r.text());

    demo.innerHTML = `${response}`

    demo2.innerHTML = ` `
}


//Aqui começa as funcoes de cada Campus

//Aqui começa a Graduação
const gradEc = async () => {
    const newUrl = `${url}/pageGradEc.html`;
    const response = await fetch(newUrl).then(r => r.text());

    demo2.innerHTML = `${response}`
}

const gradHt = async () => {
    const newUrl = `${url}/pageGradHt.html`;
    const response = await fetch(newUrl).then(r => r.text());

    demo2.innerHTML = `${response}`
}

const gradSp = async () => {
    const newUrl = `${url}/pageGradSp.html`;
    const response = await fetch(newUrl).then(r => r.text());

    demo2.innerHTML = `${response}`
}

const gradEAD = async () => {
    const newUrl = `${url}/pageGradEAD.html`;
    const response = await fetch(newUrl).then(r => r.text());

    demo2.innerHTML = `${response}`
}



//Aqui começa as funcoes da ed basica
const edBasicaEc = async () => {
    const newUrl = `${url}/pageEdBasicaEc.html`;
    const response = await fetch(newUrl).then(r => r.text());

    demo2.innerHTML = `${response}`
}

const edBasicaHt = async () => {
    const newUrl = `${url}/pageEdBasicaHt.html`;
    const response = await fetch(newUrl).then(r => r.text());

    demo2.innerHTML = `${response}`
}

const edBasicaSp = async () => {
    const newUrl = `${url}/pageEdBasicaSp.html`;
    const response = await fetch(newUrl).then(r => r.text());

    demo2.innerHTML = `${response}`
}


//Aqui começa as funções do Mestrado

const mestradoEc = async () => {
    const newUrl = `${url}/mestradoEc.html`;
    const response = await fetch(newUrl).then(r => r.text());

    demo2.innerHTML = `${response}`
}

const mestradoSp = async () => {
    const newUrl = `${url}/mestradoSp.html`;
    const response = await fetch(newUrl).then(r => r.text());

    demo2.innerHTML = `${response}`
}



//Aqui começa as funções dos cursos Livres








const d = new Date();
let year = d.getFullYear();
document.getElementById("anoAtual").innerHTML = year;