export default class movieCard{
    constructor(movie){
        this.title = movie.title || 'ingen titel'
        this.description = movie.description || 'ingen beskrivelse'
        this.poster = movie.poster || 'https://picsum.photos/200/300'
        this.year = movie.year || 'xxxx'
        this.genre = movie.genre || 'undefinded'
        this.type = movie.type || 'none'

    }
}

