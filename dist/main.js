(async function () {
  const api = await fetch("../config.json")
    .then(response => response.json())
    .then(config => `http://${config.api_host}:${config.api_port}/${config.location}/api` );

  fetch(api).catch(error => {
        document.querySelector("#api_error").removeAttribute('hidden');
    });
})();
