import React, { Component } from 'react'

export default class GifSearch extends Component {

    state = {
        search: ''
    }

    handleChange = event => {
        this.setState( {
            search: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.handleSearch(this.state.search)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Search Form</h1>
                <div className="input-group mb-1">
                 <input 
                    type="text" 
                    name="search"
                    className="form-control" 
                    placeholder="Search for Gif" 
                    onChange={this.handleChange}
                    value={this.state.search} 
                    aria-describedby="Search for Gif" />
                </div>

                <input type="submit" value="Search Gifs" className="btn btn-primary btn-lg"/>

            </form>
        )
    }
}