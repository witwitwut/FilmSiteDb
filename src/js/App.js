import FavoriteController from './controller/FavoriteController'
import { store } from './model/Store';

class App{
    constructor(){
               

        const headerHTML = `
            <header class="py-2">
                <div class="container">
                    <h1 class="text-light">Personal Movie DB</h1>
                </div>        
            </header>
        `
        document.body.insertAdjacentHTML('afterbegin', headerHTML)

        // Search Section Needed


        const favoriteSection = new FavoriteController().setupView()

        

        const footerHTML = `
            <footer>
                <div class="container">
                    <p class="text-center text-light">Lorem</p>
                </div>
            </footer>
        `
        
        document.body.insertAdjacentHTML('beforeend', footerHTML)


        // window.addEventListener('beforeunload',(e) => store.saveToLocalStorage()) 
    }
}

document.addEventListener('DOMContentLoaded', (e) => new App())