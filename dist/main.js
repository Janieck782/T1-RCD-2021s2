(async function () {
  const api = await fetch("../config.json")
    .then(response => response.json())
    .then(config => `http://${config.api_host}:${config.api_port}/${config.location}/api` );

  fetch(api).catch(error => {
        document.querySelector("#api_error").removeAttribute('hidden');
    });
})();

(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault()
        if (!form.checkValidity()) {
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
function validar(){
    
}