import React from 'react'

import Card from '../components/Card'
import Welcome from '../components/Welcome'

class IndexMenu extends React.Component{
    render(){
        return(<div>
            <Welcome
                username="Patricia"
            />
            <Card 
                title="Llistat de pel·licules"
                description="Llistat de totes les pel·licules vistes durant el confinament"
                image="movies.png"
                bgColor="#a42514"
                path="/movies/list"
            />
            <Card 
                title="Afegir pel·lícules"
                description="Formulari per afegir una nova pel·lícula"
                image="addmovie.png"
                bgColor="#A47114"
                path="/movies/add"
            />
            <Card 
                title="Pel·lícules que vull veure"
                description="Formulari per afegir pel·lícules que voldré veure en un futur"
                image="video.png"
                bgColor="#0D6B53"
                path="/movies/wishlist"
            />
        </div>)
    }
}

export default IndexMenu