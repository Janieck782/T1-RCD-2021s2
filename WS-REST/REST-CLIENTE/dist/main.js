(async function () {
  const api = await fetch("../config.json")
    .then((response) => response.json())
    .then(
      (config) =>
        `http://${config.api_host}:${config.api_port}/${config.location}/api`
    );

  // Compruebo que se pueda conectar a la API. Sino, despliego error.
  fetch(api).catch((error) => {
    document.querySelector("#api_error").removeAttribute("hidden");
  });

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        event.preventDefault();
        if (!form.checkValidity()) {
          event.stopPropagation();
        } else if (form.id == "separar_nombres") {
          // Esta seccion corresponde a split.html

          const nombre = form.querySelector("#nombre_input").value;
          fetch(api + "/separar/" + nombre)
            .then((response) => response.json())
            .then((data) => {
              // Selecciono listas de nombres y apellidos, y las vacio.
              const listaNombres = document.querySelector("#nombres");
              listaNombres.innerHTML = "";

              const listaApellidos = document.querySelector("#apellidos");
              listaApellidos.innerHTML = "";

              // Se agregan los nombres
              data.nombres.forEach((nombre) => {
                const li_nombre = document.createElement("li");
                li_nombre.textContent = nombre;
                listaNombres.appendChild(li_nombre);
              });

              // Se agregan los apellidos
              const paterno = document.createElement("li");
              paterno.innerHTML =
                "<strong>Paterno: </strong>" + data.apellidos.paterno;

              const materno = document.createElement("li");
              materno.innerHTML =
                "<strong>Materno: </strong>" + data.apellidos.materno;

              listaApellidos.appendChild(paterno);
              listaApellidos.appendChild(materno);
            });
        } else if (form.id == "validar_rut") {
          const rut = form.querySelector("#rut_input").value;
          const dv = form.querySelector("#dv_input").value;
          fetch(`${api}/validar/${rut}/${dv}`)
            .then((response) => response.json())
            .then((data) => {
              if (data.valid) {
                document.querySelector("#valid").removeAttribute("hidden");
                document
                  .querySelector("#not_valid")
                  .setAttribute("hidden", true);
              } else {
                document.querySelector("#not_valid").removeAttribute("hidden");
                document.querySelector("#valid").setAttribute("hidden", true);
              }
            });
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

function separarnombres(element) {
  const string = element.value;
  const array = string.split(" ");
  if (array.length < 3) {
    return element.setCustomValidity("Se necesitan al menos 3 palabras");
  }
  return element.setCustomValidity("");
}

function validar_input_rut(element) {
  const string = element.value;
  if (isNaN(string)) {
    return element.setCustomValidity("Este espacio debe ser un numero");
  }
  return element.setCustomValidity("");
}

function validar_input_dv(element) {
  if (element.value.length > 1) {
    element.value = element.value[1];
  }
  const string = element.value;
  const reg = new RegExp("[0-9kK]");
  if (!reg.test(string)) {
    return element.setCustomValidity(
      "El digito verificador solo puede ser un numero o la letra K"
    );
  }
  return element.setCustomValidity("");
}
