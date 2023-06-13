
const productos =[
    {
        id:1,
        marca:"HIKVISION",
        modelo:"DS-7216HGHI",
        nombre:"dvr 16ch",
        precio: 95250.99,
    },

    {
        id:2,
        marca:"HIKVISION",
        modelo:"DS-7208HGHI",
        nombre:"dvr 8ch",
        precio: 65900.99,
    },

    {
        id:3,
        marca:"HIKVISION",
        modelo:"DS-7204HGHI",
        nombre:"dvr 4ch",
        precio: 45500.50,
    },

    {
        id:4,
        marca:"HIKVISION",
        modelo:"DS-2CE16DOT-IPF",
        nombre:"Camára Bullet",
        precio: 12350.99
    },

    {
        id:5,
        marca:"HIKVISION",
        modelo:"DS-2CE56DOT-IRMF",
        nombre:"Camára Domo",
        precio: 16300.60
    }

];

let usuario = prompt("Ingrese Nombre de Usuario");
let clave = prompt ("Ingrese Contraseña");
if(!usuario || !clave){

    if (usuario === ""){
        alert("nombre de usuario no valido");
    
    }  
    if(clave === ""){
        alert("clave incorrecta");
    }
}else {
    alert("bienvenido " + usuario);
}

if(usuario && clave){
 for(const producto of productos){
        console.table(producto);
    }
    

    let buscar = prompt("Para continuar y ver nombre, precio de productos oprime s-si \n Para finalizar  n-no ");

    if (buscar === "n" ){
            alert("OK adios!!👋");

    }else if (buscar === "s") {
            const nombreYprecio = productos.map((buscar) =>{
     
            return{
                nombre: buscar.nombre,
                precio: buscar.precio
            }    
        });
            console.table(nombreYprecio,);

    
     let total= parseFloat(prompt("Ingrese un monto maximo a pagar por los equipos"));

     const precioProductos = productos.filter((producto) => producto.precio <= total);

     console.table(precioProductos); 




     const totalPrecios = precioProductos.reduce((acumulador,producto)=>acumulador + producto.precio, 0);
     console.log("El total de los precios es " + totalPrecios);
 
 
     function calacularIva(){
         let suma = totalPrecios * 1.21;
         console.log("Precio con IVA es $ " + suma);
     }
 
     calacularIva(totalPrecios)

    };
     
   
};
    


     
    