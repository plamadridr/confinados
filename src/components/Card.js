import React from 'react'

import movies from '../img/movies.png'

import 'bootstrap/dist/css/bootstrap.css'
import './styles/Card.css'

import { Link } from 'react-router-dom'

class Card extends React.Component{

    render(){

        const {title, description, image, bgColor, path} = this.props

        return (
            <Link to={path} >
                <div className="cardMovies mx-auto mt-4" style={{
                    backgroundColor: bgColor
                }}>
                    <div>
                        <img src={require(`../img/${image}`)} />
                    </div>

                    <div className="text">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </Link>
        )
    }
}

export default Card