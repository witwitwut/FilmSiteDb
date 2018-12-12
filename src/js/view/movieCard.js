export default class movieCard{
    constructor(movie){
        this.title = movie.title || 'ingen titel'
        this.description = movie.description || 'ingen beskrivelse'
        this.poster = movie.poster || 'https://picsum.photos/200/300'
        this.year = movie.year || '1900'
        this.genre = movie.genre || 'Romance'
    }
}

