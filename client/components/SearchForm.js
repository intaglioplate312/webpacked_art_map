import React, { Component } from 'react';

class SearchForm extends Component{
    render(){
        return(
            <div>
                <form name="type_search" action="/search" method="post">  
                    <label>
                        Search for a type of artwork:
                    <select name="type" value="type">
                        <option name="type" value="mural">Mural</option>
                        <option name="type" value="sculpture">Sculpture</option>
                        <option name="type" value="statue">Statue</option>
                        <option name="type" value="graffiti">Graffiti</option>
                        <option name="type" value="performance">Performance</option>
                        <option name="type" value="other">Other</option>
                        </select>
                    </label>
                    <input type="submit" name="Submit" id= "submitBox"/>
                </form>
            </div>
        )
    }
}

export default SearchForm;