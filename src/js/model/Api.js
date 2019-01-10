import{ secret } from '../secret'

const URI = 'http://www.omdbapi.com/'

const KEY = secret.KEY

export function searchMovie(movieSearch){
    try {
        const URL = URI
                  + `?`
                  + `s='${movieSearch}'`
                  + `&apikey=${KEY}`

        return fetch(URL)
            .then(response => response.json())
        
    } catch (error) {
        console.error(error)
    }
}
export async function getMovieFromId(imdbId){
    try {
        const URL = URI
                  + ''
    } catch (error) {
        
    }
} 