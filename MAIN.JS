
 let usuario = prompt("Ingrese Nombre de Usuario");
 let clave = prompt ("Ingrese Contraseña");

while (usuario === "") {

    if (usuario === ""){
        alert("nombre de usuario no valido");
    
    }
    else if(clave === ""){
        alert("clave incorrecta");
    }

    else {
        alert("bienvenido " + usuario);
    }  
    
    
}


const productos1 =[
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

  //productos1.forEach((element) => {console.log1(element);});

     for(const producto of productos1){
        console.log(producto);
    }
    

    let buscar = prompt("Ver solo nombre y precio de productos");

    if (buscar === "" ){
            console.log("producto no seleccionado");

    }else if (buscar !== "") {
            const nombreYprecio = productos1.map((buscar) =>{
     
            return{
                nombre: buscar.nombre,
                precio: buscar.precio
            }    
});
            console.table(nombreYprecio,);

    }
    
     let total= parseFloat(prompt("ingrese un monto maximo a pagar por los equipos"));

     const precioProductos = productos1.filter((producto) => producto.precio <= total);

     console.table(precioProductos);

     

     const totalPrecios = precioProductos.reduce((acumulador,producto)=>acumulador + producto.precio, 0);
    console.log("El total de los precios es " + totalPrecios);  



    
    
     //let valorProducto = parseFloat(prompt("Para ver precio final con iva, por favor ingrese el total de los precios en pantalla"));
     
    function calacularIva(){
        let suma = totalPrecios * 1.21;
        console.log("Precio con IVA es $ " + suma);
    }

    calacularIva(totalPrecios) 

    


     
    