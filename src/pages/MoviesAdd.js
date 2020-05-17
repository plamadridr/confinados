import React from 'react'

import firebase from 'firebase/app'
import { DB_CONFIG } from '../config/config'
import 'firebase/database'

class MoviesAdd extends React.Component{
    constructor(){
        super();
        
        this.state = {}

        //Connectem a Firebase
        this.app =  !firebase.apps.length ? firebase.initializeApp(DB_CONFIG) : firebase.app();
        

        //Connectem a la col·lecció de dades movies
        this.db = this.app.database().ref().child('movies');
    }


    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)

        this.db.push().set(this.state);
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }


    render(){
        return (
            <div className="container mt-5">
            <form 
                onSubmit={this.handleSubmit}
            >
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Títol" 
                        name="title"
                        onChange={this.handleChange}
                        value={this.state.title}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Descripció" 
                        name="description"
                        onChange={this.handleChange}
                        value={this.state.description}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Direcció" 
                        name="direction"
                        onChange={this.handleChange}
                        value={this.state.direction}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Imatge (url)" 
                        name="img"
                        onChange={this.handleChange}
                        value={this.state.img}
                    />
                </div>
                <div className="form-row">
                <div className="col">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Nota (1-5)" 
                            name="rate"
                            onChange={this.handleChange}
                            value={this.state.rate}
                        />    
                    </div>
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Any" 
                            name="year"
                            onChange={this.handleChange}
                            value={this.state.year}
                        />
                    </div>
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Durada (min)" 
                            name="duration"
                            onChange={this.handleChange}
                            value={this.state.duration}
                        />    
                    </div>
                    
                </div>
                
                <button 
                    type="submit" 
                    className="btn btn-primary mt-3"
                >
                    Submit
                </button>
            </form>
        </div>
        )
    }

}

export default MoviesAdd