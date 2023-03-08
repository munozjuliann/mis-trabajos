var queryString = window.location.search;
var urlParanse = new URLSearchParams (queryString);
var locacion = urlParanse.get('locacion');

var queryString2 = window.location.search;
var urlParanse2 = new URLSearchParams (queryString2);
var valor = urlParanse.get('valor');


console.log(locacion)


function getLocacion (ep){
    const locaciones = fetch("https://rickandmortyapi.com/api/location/?name=" + locacion);
    locaciones
        .then(response => response.json())
        .then(data => {
        ep(data)
    });

    

}



getLocacion(data => {
        console.log(data);
        a = data.results[0].residents;
        a= a.map(e=> e.split ("/").reverse()[0]);
        a= a.map(e=> e.split ("/").reverse()[0]).join(",")
//cortar lista 
var tamanoPorcion = 29;
var listaPartida = [];

for (var i=0; i<a.length; i+=tamanoPorcion){
    var porcion = a.slice(i, i+ tamanoPorcion);
    listaPartida.push(porcion);
}


console.log(listaPartida)

    
        data.results.forEach(locaciones => {
            const article = document.createRange().createContextualFragment(`
              <div class="col-12">
                    <div class="text-center" style="background-color:#fff;
                    -webkit-box-shadow: 2px 2px 5px #999;
                    -moz-box-shadow: 2px 2px 5px #999;
                    filter: shadow(color=#999999, direction=135, strength=2);">
                        <h5 class="card-title">${locaciones.name}</h5>
                        <p class="card-text">Tipo:${locaciones.type} </p>
                        <p class="card-text">Dimension:${locaciones.dimension} </p>
                        <p class="card-text">Residentes:</p>
                        <a href="locacion.html?locacion=${locaciones.name}&valor=${++valor}" class="btn btn-primary">Siguiente personajes</a>
                    </div>
                    
             </div>
             <div class="col-12" id="personajes">
            
            </div>
        `);

        
        const main = document.querySelector("main");
        main.append(article);
        
        });
      
function getCharacters (done){
    const results = fetch( "https://rickandmortyapi.com/api/character/"+listaPartida[valor]);
    results
        .then(response => response.json())
        .then(data2 => {
        done(data2)
    });
  }
    getCharacters(data2 => {
        console.log("lsita corta", data2)
            data2.forEach(personajes => {
                const article2 = document.createRange().createContextualFragment(`
                <div class="col-3">
                    <div class="card">
                    <img src="${personajes.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${personajes.name}</h5>
                        <p class="card-text">Genero:${personajes.gender} </p>
                        <p class="card-text">Estado:${personajes.status} </p>
                        <p class="card-text">Especie:${personajes.species} </p>
                        <p class="card-text">Origen:${personajes.origin.name} </p>
                    </div>
                </div>
            `);
        
            const main = document.querySelector("main");
            main.append(article2);
            
            });
          
            
    })
})
  

  