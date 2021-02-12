import React, { Component} from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            gifs: []
        }
    }

    handleSearch = query => {
        console.log(this)
        console.log("query = ", query)

        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(query)}&api_key=DXGwLPBdZbkw7SxL4E2JMhCqlMPHILP5&rating=g`
        fetch(url)
        .then(response => response.json())
        // .then(gifs => {
        //     debugger;
        // })
        .then(gifsData => {
            // debugger;
            const gif = gifsData.data.slice(0,3).map(
                gif => {
                    return { 
                        title: gif.title,
                        id: gif.id,
                        url: gif.images.original.url
                    }
                })
            this.setState({
                gifs: gif
            })
        })
    }

    render() {
        return (
            <div>
                <h1>GifListContainer</h1>
                <GifSearch handleSearch={this.handleSearch} />
                <GifList gifs={this.state.gifs}/>
            </div>
        )

    }
}