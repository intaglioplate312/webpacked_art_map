import React, { Component } from 'react';

class SearchForm extends Component{
    render(){
        return(
            <div>
                <form name="type_search" action="/search" method="post">  
                <label>
                Type of Artwork:
                    <input type="text" name="type" placeholder="Mural, Sculpture, Statue, Graffiti, Performance, Other"/>
                </label>
                    <input type="submit" name="Submit" id= "submitBox"/>
                </form>
            </div>
        )
    }
}

export default SearchForm;