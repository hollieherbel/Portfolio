import React from 'react'
import Coffee from '../photos/coffee.jpg'

export default function homepage(props) {



    return (
        <div className='homepage-wrapper'>
            <div className='intro'>
                <img src={Coffee} alt="Coffee"></img>
                <h3 className="intro-name">Hello... <br/> I'm Hollie, <br /> a Website Developer</h3>
                    <div className="link"> Click here for my work!</div>
            </div>
        </div>
    )
}