import movieCard from './MovieCard'

// export default class FavoriteView{

//     // render(){
//     //     return `
//     // <section id="favoriteSection">
//     //     <header class="py-2">
//     //         <div class="container">
//     //             <h2 class="text-light">Favorite Movies</h2>
//     //         </div>
//     //     </header>
//     //     <div class="bg-dark py-2">
//     //         <div class=" container my-4">
//     //             <div class="row">
//     //             </div>
//     //         </div>
//     //     </div>
//     // </section>`
//     // }

//     populateWithMovies(){
//         console.log('Store i FavoriteView', store)

//         let movies = ''
//         store.forEach(movieObject => {
//             console.log(movieObject)
//             movies += new MovieCard(movieObject).render()
//         })
//         return movies
//     }
// }


export function createFavouriteView(store){
    let movieCardHTML = ''
    if (store) {
        console.log(store)
        Object.values(store).forEach(movieObject => {
            movieCardHTML += new movieCard(movieObject).render()            
        });
    }

    return `
        <section id="favoriteSection">
            <header class="py-2">
                <div class="container">
                    <h2 class="text-light">Favorite Movies</h2>
                </div>
            </header>
            <div class="bg-dark py-2">
                <div class=" container my-4">
                    <div class="row">
                      ${movieCardHTML}
                    </div>
                </div>
            </div>
        </section>
    `
}