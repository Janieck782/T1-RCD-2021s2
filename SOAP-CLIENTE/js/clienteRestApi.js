class mens_vdv{
    constructor(nombre,apellidoP,apellidoM){
        resultado :1
    }
}


var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};
//`https://janieck.pythonanywhere.com/vdv/${dato}`

function comprobar(dato){
    getJSON(`https://janieck.pythonanywhere.com/vdv/${dato}`,function(err, data) {
        if (err !== null) {
          alert('Something went wrong: ' + err);
        } else {
          alert('Your query count: ' + data.query.count);
        }
      });
    
    
    console.log(request);
}