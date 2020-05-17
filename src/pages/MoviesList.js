import React from 'react'

import firebase from 'firebase/app'
import { DB_CONFIG } from '../config/config'
import 'firebase/database'

import MovieCard from '../components/MovieCard'

class MoviesList extends React.Component{
    constructor(){
        super();

        this.state = {
            movies: [

            ]
        }

        //Connectem a Firebase
        this.app =  !firebase.apps.length ? firebase.initializeApp(DB_CONFIG) : firebase.app();
        //Connectem a la col·lecció de dades movies
        this.db = this.app.database().ref().child('movies');
    }

    componentDidMount() {
        const { movies } = this.state;

        this.db.on('child_added', snap=>{
            movies.push({
                title: snap.val().title,
                img: snap.val().img,
                direction: snap.val().direction,
                rate: snap.val().rate
            })

            this.setState({movies})
        })
    }

    render(){
        return(
            <div className="container mt-5">
                <div className="row">
                    {
                        this.state.movies.map(movie => {
                            return(
                                <MovieCard
                                    title={movie.title}
                                    image={movie.img}
                                    direction={movie.direction}
                                    rate={movie.rate}
                                />
                            )
                        })
                    }

                </div>

            </div>
        );
    }
}

export default MoviesList