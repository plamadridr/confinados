import React from 'react'

import './styles/MovieCard.css'

class MovieCard extends React.Component{

    render(){

        const {title, image, rate, direction} = this.props

        return (
            <div className="mt-4 col-4" >
                <div className="movieCard" style={{ backgroundImage: `url(${image})`}}>
                    <div className="row movieInfo">
                        <div className="col-2 rate">{rate}</div>
                        <div className="col-10">
                            <div className="row">
                                <h3>{title}</h3>
                                <p>{direction}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard
