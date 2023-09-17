// This is the main component that renders the game and sets up Redux.
import React from 'react';
import './Ant.css';
import Ant from './Ant';

function App() {
// Variables that generate random # of ants 
    const minAnts = 1;
    const maxAnts = 60;
    const numberOfAnts = Math.floor(Math.random() * (maxAnts - minAnts + 1)) + minAnts;

//Array of Ant components w/ random positions
    const ants = Array.from({ length: numberOfAnts }, (v,i) => {
        //Random x and y coordinates for each ant
        const randomX = Math.random() * (window.innerWidth - 40);
        const randomY = Math.random() * (window.innerHeight -40);

        //Style object to position ants 
        const antStyle = {
            position: 'absolute',
            left: `${randomX}px`,
            top: `${randomY}px`
        };

    return <div key={i} className='ant-container' style={antStyle}><Ant /></div>;
    });

    return (
        <div className='App'>
            {ants}
        </div>
    );
}

export default App;