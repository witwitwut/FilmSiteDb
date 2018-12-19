class Store{
    constructor(){
        let movieDB = {}

        if (!localStorage.getItem('movieDB')) {
           console.log("åh åh det er ikke noget Data i localstorage")
        }  else{
            movieDB = localStorage.getItem('movieDB')
        }
    }

    addToStore(){

    }
    
    removeFromStore(){

    }

    loadStore(){
      return movieDB = this._loadFromLocalStorage()
    }

    _saveToLocalStorage(){
        localStorage['movieDB'] = JSON.stringify(movieDB)
    }

    _loadFromLocalStorage(){
        return JSON.parse(localStorage['movieDB'])
    }    
}


export let store = new Store()
