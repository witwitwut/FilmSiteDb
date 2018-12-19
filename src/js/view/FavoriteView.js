import MovieCard from './MovieCard'
import {store} from '../model/Store'

export default class FavoriteView{
    constructor(store){
        this.store = store
    }

    // render(){
    //     return `
    // <section id="favoriteSection">
    //     <header class="py-2">
    //         <div class="container">
    //             <h2 class="text-light">Favorite Movies</h2>
    //         </div>
    //     </header>
    //     <div class="bg-dark py-2">
    //         <div class=" container my-4">
    //             <div class="row">
    //             </div>
    //         </div>
    //     </div>
    // </section>`
    // }

    populateWithMovies(){
        store.forEach(movieObject => {
             new MovieCard(movieObject).render()
        });
    }
}
