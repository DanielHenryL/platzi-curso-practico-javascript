// const lista1= [
//     100,
//     200,
//     500,
//     400,
// ];


function esPar(numero){
    if(numero % 2===0){
        return true;
    }else{
        return false;
    }
}

// function compareNumbers(lista){
//     return lista.sort((a,b) => a-b);
// }

function CalcularMediana(lista1){
    const lista=lista1.sort(function(a,b){
        return a-b;
    })
    const mitadLista=parseInt(lista.length/2);
    
    let mediana;
    if(esPar(lista.length)){
        const elemento1= lista[mitadLista];
        const elemento2= lista[mitadLista-1];
    
        mediana= (elemento1+elemento2)/2
    
    }else{
        mediana = lista[mitadLista];
    }
    return mediana
}