export default class movieCard{
    constructor(movie){
        this.title = movie.title || 'ingen titel'
        this.description = movie.description || 'ingen beskrivelse'
        this.poster = movie.poster || 'https://picsum.photos/200/300'
        this.year = movie.year || 'xxxx'
        this.genre = movie.genre || 'undefinded'
        this.type = movie.type || 'none'

    }
    render(){
        return `<div class="col-md-3">
        <article class="card mb-3">
            <img class="card-img-top" src="${this.poster}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">${this.description}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </article>
    </div>`
    }

    addToFavorite(){

    }
}

