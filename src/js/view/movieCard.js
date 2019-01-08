export default class movieCard{
    constructor(movie){
        this.title = movie.Title 
        this.description = movie.Plot 
        this.poster = movie.Poster 
        this.year = movie.Year
        this.genre = movie.Genre 
        this.type = movie.Type
        this.id = movie.imdbID 

    }

    render(){
        return `<div class="col-md-3">
        <article class="card mb-3">
            <img class="card-img-top" src="${this.poster}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">${this.description}</p>
                <a href="#" class="btn btn-primary" data-id="${this.id}">Go somewhere</a>
            </div>
        </article>
    </div>`
    }

    addToFavorite(){

    }
}

