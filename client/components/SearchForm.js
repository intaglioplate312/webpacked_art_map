import React, { Component } from 'react';
import Nav from './Nav'

class SearchForm extends Component{
    render(){
        return(
            <div>
                <Nav/>
                <form name="type_search" action="/search" method="post">  
                <label>
                Type of Artwork:
                    <input id= "searchForm" type="text" name="typeSearch" placeholder="Mural, Sculpture, Statue, Graffiti, Performance, Other"/>
                </label>
                    <input type="submit" name="Submit" id= "submitBox"/>
                </form>
            </div>
        )
    }
}

export default SearchForm;