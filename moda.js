// const lista1=[
//     1,
//     2,
//     3,
//     1,
//     3,
//     2,
//     1,
//     2,
//     2,
//     4,
//     1,
// ];

const listaCount = {};
function CalcularModa(lista1){
    lista1.map(
        function(elemento){
            if(listaCount[elemento]){
                listaCount[elemento] += 1;
            }else{
                listaCount[elemento] = 1;
            }
        }
    );
    //object.entries se usa para cambiar de un objeto a un array
    const lista1Array= Object.entries(listaCount).sort(
        function (valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1]
        }
    );
    const moda = lista1Array[lista1Array.length-1]
    return moda[0];
}




