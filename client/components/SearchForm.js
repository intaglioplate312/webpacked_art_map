import React, { Component } from 'react';

class SearchForm extends Component{
    render(){
        return(
            <div>
                <form name="type_search" action="/search" method="post">  
                <label>
                Type of Artwork:
                <input id= "searchForm" type="text" name="type" placeholder="Mural, Sculpture, Statue, Graffiti, Performance, Other"/>                </label>
                    <input type="submit" name="Search" id= "submitBox"/>   
                    <a className="fake" href="/index.html">Return to Full Map</a>
                </form>
            </div>
        )
    }
}

export default SearchForm;