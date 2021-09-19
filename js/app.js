class nombre{
    constructor(nombre,apellidoP,apellidoM){
        this.nombre = [];
        this.apellidoM = "";
        this.apellidoP = "";
    }
}

class rut{
    constructor(entero,dv){
        this.entero = 0;
        this.dv = "";
    }
}

let rut_ = new rut;
let nom_ = new nombre;

function guardarRut(enlace){
    let in_r = document.getElementById(`rut_aux`).value;
    var valoresAceptados = /^[0-9]+$/;
    if (in_r.indexOf("-") == -1){
        alert("Formato de RUT no valido.");
    }
    else{
        let run = in_r.split("-");
        if(run[0].match(valoresAceptados) && (run[1].match(valoresAceptados) || run[1] == "k" || run[1] == "K")){
            rut_.entero = parseInt(run[0]);
            rut_.dv = run[1].toLowerCase();
            console.log(rut_);
        }else{
            alert("Formato de RUT no valido.");
        }
    }
}

function guardarNombre(enlace){
    let in_n = document.getElementById("nombre_aux").value;
    if(in_n.indexOf(" ") == -1){
        alert("El nombre no es lo bastante largo para ser un nombre completo");
    }
    else{
        let name = in_n.split(" ");
        console.log(name);
        if (name.length > 2 ){
            nom_.apellidoM = name.pop();
            nom_.apellidoP = name.pop();
            nom_.nombre = name;
            console.log(nom_);
        }
        else{
            alert("El nombre no es lo bastante largo para ser un nombre completo");
        }
    }
}