
import {createFavouriteView} from '../view/FavoriteView'
import {store} from '../model/Store'


export default class FavoriteController{
    

    setupView(){

        let favoriteSectionWithMovieCardHTML = createFavouriteView(store)

        document.body.insertAdjacentHTML('afterbegin', favoriteSectionWithMovieCardHTML)


       const favoriteSectionElement = document.getElementById("favoriteSection")

       console.log(favoriteSectionElement)


        // favoriteSectionWithMovieCardHTML.addEventListener('click', handler => alert("Alert"))

        favoriteSectionElement.addEventListener('click', (event) => {
            if (event.target.matches('.btn')) {
                this.removeMovieCard(event.target)
                console.log(event.target)
            }
        } )


    }
    addMovie(){



    }
    removeMovieCard(movieElement){
        
        console.log(movieElement.dataset.id)
        //skal finde fejlen ved removeFromStore funktionen
        // store.removeFromStore(movieElement.dataset.id)
        movieElement.parentElement.parentElement.parentElement.remove()

    }
    updateView(){
        
    }

    
}