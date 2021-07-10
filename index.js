//var let const declarar variables

var nombre="pedro";

if(true){
    nombre="pepito"
}
const personas=[];
const persona ={

    nombre:"carlos",
    apellido:"arias",
    edad:29,
    nombrecompleto(){
        return `${this.nombre} ${this.apellido}`;

    }

}
/*personas.push(persona);
personas.push(persona);
personas.push(persona);
personas.push(persona);*/

let dato="esto es un texto";
let dato2="este es otro dato"

console.log(dato.length);
console.log(dato.toUpperCase());
console.log(dato.toLowerCase());
console.log(dato.concat(dato2));
console.log(dato.indexOf("es"));
console.log(dato.includes("es"));
console.log(dato.trimStart());
console.log(dato.trimEnd());
console.log(dato.replace("es","son"));
console.log(dato.length);


console.log(persona.nombrecompleto);