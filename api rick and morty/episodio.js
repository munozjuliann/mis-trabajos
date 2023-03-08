var queryString = window.location.search;
var urlParanse = new URLSearchParams (queryString);
var episodio = urlParanse.get('epi');


console.log(episodio)


function getEpisodes (ep){
    const episodios = fetch("https://rickandmortyapi.com/api/episode/" + episodio);
    episodios
        .then(response => response.json())
        .then(data => {
        ep(data)
    });
    

}



getEpisodes(data => {

    console.log(data);
    a = data.characters;
    a= a.map(e=> e.split ("/").reverse()[0]);
    a= a.map(e=> e.split ("/").reverse()[0]).join(",")
    document.getElementById("episodio").innerHTML= "Personajes del capitulo " + data.name + " " + data.episode
    function getCharacters (done){
        const results = fetch( "https://rickandmortyapi.com/api/character/"+a);
        results
            .then(response => response.json())
            .then(data => {
            done(data)
        });
      }
    
      getCharacters(data => {
        console.log(data);

    
        data.forEach(episodios => {
            const article = document.createRange().createContextualFragment(`
              <div class="col-3">
                    <div class="card">
                    <img src="${episodios.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${episodios.name}</h5>
                        <p class="card-text">Genero:${episodios.gender} </p>
                        <p class="card-text">Estado:${episodios.status} </p>
                        <p class="card-text">Especie:${episodios.species} </p>
                        <p class="card-text">Origen:${episodios.origin.name} </p>
                        <p class="card-text">Locacion:${episodios.location.name}<a href="locacion.html?locacion=${episodios.location.name}&valor=0" class="btn btn-primary">Ver locacion</a> </p>
                    </div>
                </div>
        `);
    
        const main = document.querySelector("main");
        main.append(article);
        
        });
      
      })
    
    /*data.characters.forEach(episodios => {

        
        const article = document.createRange().createContextualFragment(`
    <article>
       <div>${episodios} </div>
    </article>
    `);
    console.log(episodio)*/
    
    });
  

  