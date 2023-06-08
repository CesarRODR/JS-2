
let usuario = prompt("Ingrese Nombre de Usuario");
let clave = prompt ("Ingrese Contraseña");

while (usuario == " ") {

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
    for(const producto of productos1){
        console.table(productos1);
    }