//helpers
function esPar(numerito){
    if (numerito % 2===0){
        return true;
    }else{
        return false;
    }
}
//Calculadora de mediana
function medianaSalarios(lista){
    const mitad=parseInt(lista.length/2);

    if(esPar(lista.length)){
        const personitaMitad=(lista[mitad]+lista[mitad-1])/2
        return personitaMitad;
    }else{
        const personitaMitad=lista[mitad];
        return personitaMitad;
    }
        
}

//calculo de la mediana general
const salariosPer= peru.map(
    function(personita){
        return personita.salary;
    }
);

const salariosPerSorted= salariosPer.sort(
   function(salaryA,salaryB){
        return  salaryA-salaryB;
   } 
);



const medianaGeneralPeru=medianaSalarios(salariosPerSorted);
//Mediana top 10%

const spliceStart = (salariosPerSorted.length * 90) / 100;
const spliceCount = salariosPerSorted.length - spliceStart ;

const SalariosPerTop10=salariosPerSorted.splice(spliceStart,spliceCount);

const medianaTop10Per=medianaSalarios(SalariosPerTop10);

console.log({
    medianaGeneralPeru,
    medianaTop10Per,
});
