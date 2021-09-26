class nombre {
  constructor(nombre, apellidoP, apellidoM) {
    this.nombre = [];
    this.apellidoM = "";
    this.apellidoP = "";
  }
}

class rut {
  constructor(entero, dv) {
    this.entero = 0;
    this.dv = "";
  }
}

let rut_ = new rut();
let nom_ = new nombre();
let api = "";

(function () {
  fetch("./js/config.json")
    .then((response) => response.json())
    .then((data) => {
      api = `${data.api_host}:${data.api_port}/${data.location}/`;
    })
    .then(() => {
      console.log(api);
    });
})();

function guardarRut(enlace) {
  let in_r = document.getElementById(`rut_aux`).value;
  let in_d = document.getElementById("rut_dv").value;
  var valoresAceptados = /^[0-9]+$/;
  let run = [];
  run[0] = in_r;
  run[1] = in_d;
  if (
    run[0].match(valoresAceptados) &&
    (run[1].match(valoresAceptados) || run[1] == "k" || run[1] == "K")
  ) {
    rut_.entero = parseInt(run[0]);
    rut_.dv = run[1].toLowerCase();
  } else {
    alert("Formato de RUT no valido.");
  }
}

function guardarNombre(enlace) {
  let in_n = document.getElementById("nombre_aux").value;
  if (in_n.indexOf(" ") == -1) {
    alert("El nombre no es lo bastante largo para ser un nombre completo");
  } else {
    let name = in_n.split(" ");
    console.log(name);
    if (name.length > 2) {
      nom_.apellidoM = name.pop();
      nom_.apellidoP = name.pop();
      nom_.nombre = name;
      console.log(nom_);
    } else {
      alert("El nombre no es lo bastante largo para ser un nombre completo");
    }
  }
}
