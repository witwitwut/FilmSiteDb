import movieCard from "./MovieCard";


export function createSearchView(){
    const searchbar = createSearchbar()

    document.body.insertAdjacentHTML('beforeend', searchbar)

    document.body.insertAdjacentHTML('beforeend', createSearchSection())
}


export function createSearchbar(){
    
    return    `
                   <div class="row justify-content-center">
                        <div class="col-12 col-md-10 col-lg-8">
                            <div class="card card-sm">
                                <div class="card-body row no-gutters align-items-center">
                                    <div class="col-auto">
                                        <i class="fas fa-search h4 text-body"></i>
                                    </div>
                                    <!--end of col-->
                                    <div class="col">
                                        <input id="Searchbar" class="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords">
                                    </div>
                                    <!--end of col-->
                                    <div class="col-auto">
                                        <button class="btn btn-lg btn-success" type="submit">Search</button>
                                    </div>
                                    <!--end of col-->
                                </div>
                            </div>
                        </div>
                        <!--end of col-->
                    </div>`
}


export function createSearchSection(){
    return `
        <section class="container">
            <div id="searchSection" class="row">
            </div>
        </section>
    `
}

export function SearchView(searchresult){
    let searchHTML = ''
    searchresult.forEach(movieobject => {
        searchHTMLn += new movieCard(searchresult).render()
    });

    return `
        <section class="container">
            <div id="searchSection" class="row">
            ${searchHTML}
            </div>
        </section>
    
    `
}