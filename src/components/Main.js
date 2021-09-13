
  

import React from 'react';
import HornedBeast from './HornedBeast'
import Data from '../assest/data.json'

class Main extends React.Component {

    render() {
        const Gallery = Data.map ( element => {
            return(        
            <HornedBeast
            image_url = { element.image_url } title = { element.title } description = { element.description }
            />)
        })
        return (
            <main>
                {
                    Gallery
                }
                
            </main>
        )
    }
}

export default Main;