import React from 'react'
import IndexMenu from '../pages/IndexMenu'
import MoviesAdd from '../pages/MoviesAdd'
import MoviesList from '../pages/MoviesList'
import MoviesWishList from '../pages/MoviesWishList'

import { BrowserRouter, Route } from 'react-router-dom'


function App(props){

    return(<BrowserRouter>

                <Route exact path="/" component={IndexMenu} />
                <Route exact path="/movies/list" component={MoviesList} />
                <Route exact path="/movies/add" component={MoviesAdd} />
                <Route exact path="/movies/wishlist" component={MoviesWishList} />

            </BrowserRouter>)
}

export default App