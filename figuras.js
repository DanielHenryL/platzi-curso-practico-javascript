//El codigo del cuadrado
console.group("Cuadrado")
// const ladoCuadrado = 5;
// console.log("los lados del cuadrado miden: " + ladoCuadrado +"cm");

function perimetroCuadrado(lado){
    return lado*4;
}
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado*lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado+ "cm^2");


console.groupEnd();

//El codigo del triangulo
console.group("Triangulo")
// const ladoTriangulo1= 6;
// const ladoTriangulo2= 6;
// const baseTriangulo= 4;


// console.log(
//     "los lados del triangulo miden: " 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, "
//     + baseTriangulo 
//     + "cm"
// );
// const alturaTriangulo= 5.5;
// console.log("La altura del triangulo es de :" + alturaTriangulo+ "cm");

function perimetroTriangulo(lado1,lado2,base){
    return (lado1 + lado2 + base);
}
function areaTriangulo(altura,base){
    return altura*base*0.5;
}

// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

// const areaTriangulo= 0.5*(baseTriangulo*alturaTriangulo);
// console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//El codigo del circulo
console.group("Circulo")

// const radioCirculo=8;
// console.log("El radio del circulo es: "+ radioCirculo + "cm");

function diametroCircunferencia(radio){
    return 2*radio;
}

function perimetroCirculo(radioa){
    const diametro = diametroCircunferencia(radioa)
    return diametro*Math.PI;
} 
// console.log("El perimetro del circulo es:"+ perimetroCirculo + "cm");

function areaCirculo(radio){
    return radio*radio*Math.PI;
} 
// console.log("el area del circulo es: " + areaCirculo + "cm^2")


console.groupEnd();

function CalcularAltura(lado1,lado2,base){
    if(lado1==lado2){
        const altura=Math.sqrt((lado2**2)-((base*0.5)**2))
        return altura
    }
    else{
        
        return alert("No es un isoseles")
    }

}



//Aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input= document.getElementById("InputCuadrado");
    const value= input.value;


    const perimetro= perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input= document.getElementById("InputCuadrado");
    const value= input.value;


    const area= areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const input1 =document.getElementById("InputTrianguloLado1");
    const input2 =document.getElementById("InputTrianguloLado2");
    const input3 =document.getElementById("InputTrianguloBase");
    
    const value1=Number(input1.value);
    const value2=Number(input2.value);
    const value3=Number(input3.value);
    

    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const input1 =document.getElementById("InputTrianguloBase");
    const input2 =document.getElementById("InputTrianguloAltura");
    const value1=input1.value;
    const value2=input2.value;

    const area=areaTriangulo(value1,value2);
    alert(area)
}

function calcularDiametroCirculo(){
    const input=document.getElementById("InputCirculo");
    const value=input.value;

    const Diametro=diametroCircunferencia(value);
    alert(Diametro);
}

function calcularPerimetroCirculo(){
    const input =document.getElementById("InputCirculo");
    const value=input.value

    const Perimetro=perimetroCirculo(value);
    alert(Perimetro);
}
function calcularAreaCirculo(){
    const input=document.getElementById("InputCirculo");
    const value=input.value

    const Area=areaCirculo(value);
    alert(Area)
}

function CalcularSiIsoseles(){
    const input1=document.getElementById("InputLado1")
    const input2=document.getElementById("InputLado2")
    const input3=document.getElementById("InputBase")

    const value1=input1.value
    const value2=input2.value
    const value3=input3.value

    const Altura=CalcularAltura(value1,value2,value3)
    alert(Altura)
}