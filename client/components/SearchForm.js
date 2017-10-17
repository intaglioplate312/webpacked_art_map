import React, { Component } from 'react';
import Axios from  'axios'

class SearchForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }        
    }
   
    handleSearch(event) {
        event.preventDefault();
        // get the data from the field
        let name = event.target.name;
        let value = event.target.value;
        axios.post('/Search', {
            value
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log(this.state.searchTerm);
    }
    handleInputChange(event) {
        this.setState({
            searchTerm: event.target.value
        })
    }
    render(){
        return(
            <div>
                <form name="type_search" action="/search" method="post">  
                <label>
                Type of Artwork:
                    <input id= "searchForm" value={this.state.searchTerm} onChange={this.handleInputChange.bind(this)} type="text" name="typeSearch" placeholder="Mural, Sculpture, Statue, Graffiti, Performance, Other"/>
                </label>
                    <input type="submit" name="Submit" onClick={this.handleSearch.bind(this)}id= "submitBox"/>
                </form>
            </div>
        )
    }
}

export default SearchForm;