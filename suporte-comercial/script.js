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


//Aqui começa as funcoes de cada Campus

//Aqui começa a Graduação
const gradEc = async () => {
    const newUrl = `${url}/pageGradEc.html`;
    const response = await fetch(newUrl).then(r => r.text());

    demo2.innerHTML = `${response}`
}






//Aqui começa as funcoes da ed basica
const edBasicaSp = async () => {
    const newUrl = `${url}/teste.html`;
    const response = await fetch(newUrl).then(r => r.text());

    demo2.innerHTML = `${response}`
}
