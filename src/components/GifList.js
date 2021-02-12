import React, { Component } from 'react'

export default class GifList extends Component {

    render() { 
       
        return(
            <ul>
                {this.props.gifs.map(({id, url, title}) => 
                    <li key={id}><img src={url} alt={title} /></li>)}
            </ul>
        )

    }


}