// const precioOriginal=150;
// const descuento=30;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento= 100 - descuento;
    const precioConDescuento= (precio*porcentajePrecioConDescuento)/100;
    
    
    return precioConDescuento;    
}

function PriceDiscount(){
    const inputPrice= document.getElementById("InputPrice");
    const priceValue=inputPrice.value; 
    
    
    const inputCoupon= document.getElementById("InputCoupon");
    const couponValue=inputCoupon.value;

    const IsCounponValue=function(coupon){
        return coupon.name===couponValue;    
    };

    const userCoupon=coupons.find(IsCounponValue);
    if(!userCoupon){
        alert("el cupon" + couponValue+"no es valido")
    }else{
        const descuento=userCoupon.discount;
        
    // const NoResulPrice=document.getElementById("NoResulPrice");
    // if(!coupons.includes(couponValue)){
    //     NoResulPrice.innerText="El "+ couponValue +" no es valido"
    // }else if(couponValue==="descuento de 10%"){
    //     descuento=10;
    // }else if(couponValue==="descuento de 20%"){
    //     descuento=20;
    // }else if(couponValue==="descuento de 30%"){
    //     descuento=30;
    // }


    // let descuento;

    // switch(couponValue){
    //     case "descuento de 15%":
    //         descuento=15;
    //     break;

    //     case "descuento de 20%":
    //         descuento=20;
    //     break;

    //     case "descuento de 30%":
    //         descuento=30;
    //     break;    
    // }

        const precioConDescuento= calcularPrecioConDescuento(priceValue,descuento);

        const resultP=document.getElementById("ResulPrice");
        resultP.innerText="El precio con descuento es: $"+precioConDescuento;

    }
}
//Solucion numero 1

// const coupons=[
//     "descuento de 10%",
//     "descuento de 20%",
//     "descuento de 30%",
// ]

//Solucion numero 2

//Solucion numero 3
const coupons=[
    {
        name:"descuento de 10%",
        discount:15,
    },
    {
        name:"descuento de 20%",
        discount:20,
    },
    {
        name:"descuento de 30%",
        discount:30,
    },
];




// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// })