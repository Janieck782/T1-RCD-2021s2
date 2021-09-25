(async function () {
  const api = await fetch("../config.json")
    .then(response => response.json())
    .then(config => `http://${config.api_host}:${config.api_port}/${config.location}/api/` );

  fetch(api + "separar/rafael morales venegas")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
})();
