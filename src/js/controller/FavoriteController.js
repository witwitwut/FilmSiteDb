import {store}  from '../model/Store'
import FavoriteView from '../view/FavoriteView'

class FavoriteController{
    constructor(){

    }

    setupView(store){
        let HTMLelement =  document.getElementById('favoriteSection')
        let movieCardHTML = new FavoriteView().populateWithMovies()

        HTMLelement.insertAdjacentHTML('beforeend', movieCardHTML)
    }
    addMovie(){

    }
    removeMovieCard(){

    }
    updateView(){
        
    }
}