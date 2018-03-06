
function buscar(){
    var texto = document.querySelector("h2");

    axios("https://pacific-earth-39167.herokuapp.com/codigo/panqueca")
    .then(function(obj){
        console.log(obj);
        texto.textContent = "Latitude:"+ obj.data.cidade.lat +"\n Longitude: " + obj.data.cidade.long;
    })

}
