//Temos GSAP tem 3 principais methods para cirar "Twins" e opcionalmente adicionar eles a Timeline
//Uma Tween pode mudar uma única propriedade de um único objeto por vez

//Example: gsap.to(".star", {x: 750, duration: 3});
//.star é o target de onde vai ser animado; {Objeto} em questão são variaveis que serao mudadas

gsap.to('h1', {
    x: 400,
    duration: 3
})