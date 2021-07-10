function sumar(numero, numero2){
    return numero+numero2;
}

console.log(sumar(3,4));

const imprimir= function(){
    console.log("imprimiendo datos");
    return 0;

}

const imprimir2= ()=>{
    console.log("imprimiendo datos2");
    return 0;

}

const imprimir3= ()=> console.log("imprimiendo datos3");
const imprimir4= ()=> "imprimiendo datos4";
const imprimir5= (nombre, edad)=>{
    edad+=10;
    return "saludos";

}

console.log(imprimir());
console.log(imprimir2());
console.log(imprimir3());
console.log(imprimir4());