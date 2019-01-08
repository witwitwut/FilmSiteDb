
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
                console.log(event.target.dataset.id)
                // store.removeFromStore(event.target.dataset.id)
                event.target.parentElement.parentElement.parentElement.remove()
            }
        } )


    }
    addMovie(){



    }
    removeMovieCard(){

    }
    updateView(){
        
    }
}