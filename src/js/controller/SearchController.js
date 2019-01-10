
import { createSearchView } from "../view/SearchView";
import { searchMovie } from "../model/Api";

export function setupSearchSection(){
 
    
    let SearchViewHTML =  createSearchView()

    document.body.insertAdjacentHTML('afterbegin', SearchViewHTML)


    const  searchInput = document.getElementById('Searchbar')
    searchInput.addEventListener('keydown', (event) => {
        if (event.keyCode === 13 ) {
           searchMovie(searchInput.value).then(
               response => console.log(response.Search)
           )

        }
    })

    
}