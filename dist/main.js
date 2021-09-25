(async function () {
  const api = await fetch("../config.json")
    .then(response => response.json())
    .then(config => `http://${config.api_host}:${config.api_port}/${config.location}/api` );

  fetch(api).catch(error => {
        document.querySelector("#api_error").removeAttribute('hidden');
    });

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (!form.checkValidity()) {
          event.stopPropagation();
        }
        else if(form.id == "separar_nombres") {
            const nombre = form.querySelector('#nombre_input').value;
            fetch(api + "/separar/" + nombre)
            .then(response => response.json())
            .then(data => { console.log(data); });
        }
        else if(form.id == "validar_rut"){

        }

        form.classList.add('was-validated');

      }, false);
    });
})();

function separarnombres(element){
    const string = element.value;
    const array = string.split(' ');
    if(array.length < 3){
        return element.setCustomValidity("Se necesitan al menos 3 palabras")
    }
    return element.setCustomValidity("");
}