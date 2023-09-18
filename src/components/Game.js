// This component manages the game state, including the score and spawning ants.
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startGame, crushAnt } from '../actions/gameActions';

function Game({ ants }) {
    const dispatch = useDispatch();
    const { score, isGameStarted } = useSelector((state) => state.game);

    //I need to store the state for the remaining time
    const [remainingTime, setRemainingTime] = useState(60);

    //I need to store the score
    const [currentScore, setCurrentScore] = useState(0);

    //I need to store the state for crushed ants
    const [clickedAnts, setClickedAnts] = useState([]);

    const antStyle = {
        position: 'relative',
        width: '40px',
        height: '40px',
        backgroundImage: 'url("http://www.clker.com/cliparts/0/5/2/d/11954389722123324306Andy_-_ant.svg.med.png")',
        backgroundSize: '65%',
        backgroundRepeat: 'no-repeat',
        backgroundPostision: 'center'
    };

    useEffect(() => {
       if (isGameStarted && remainingTime > 0) {
        const timerInterval = setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 1);
        }, 1000);
        return () => clearInterval(timerInterval);
       }else if (remainingTime === 0) {
        dispatch(startGame(false));
       }
    }, [dispatch, isGameStarted, remainingTime]);

    const handleStartGame = () => {
        setCurrentScore(0); // Reset the score when the game starts
        setClickedAnts([]); // Reset the clicked Ants 
        dispatch(startGame(true));
    };

    const handleCrushAnt = (event, index) => {
        const clickX = event.clientX;
        const clickY = event.clientY;

  // Iterate through the ants and check if the click coordinates are within the boundaries of an ant
  for (let i = 0; i < ants.length; i++) {
    const ant = ants[i];
    const antElement = document.querySelector(`#ant-${i}`); // Assuming you set a unique ID for each ant

    if (antElement) {
      const { left, top, width, height } = antElement.getBoundingClientRect();

      if (
        clickX >= left &&
        clickX <= left + width &&
        clickY >= top &&
        clickY <= top + height
      ) {
        // Clicked on an ant, handle the crush
        dispatch(crushAnt(index));
        return;
      }
    }
  }
        
        // if (!clickedAnts.includes(index)) {
        //     const updateClickedAnts = [...clickedAnts, index];
        //     setClickedAnts(updateClickedAnts);

        //     setCurrentScore((prevScore) => prevScore + 1);
        //     dispatch(crushAnt(index));
        // }

    // // Remove the crushed ant from the list of ants
    // const updatedAnts = [...ants];
    // updatedAnts.splice(index, 1);
    
    // // Dispatch the action to increase the score and update the ant list
    // dispatch(crushAnt(updatedAnts));
    };

    
    useEffect(() => {
        if (isGameStarted && currentScore === score) {
            // Increase the score by 1 for each click
            const clickHandler = () => {
                setCurrentScore((prevScore) => prevScore + 1);
                dispatch(crushAnt());
            };
            window.addEventListener('click', clickHandler);

            // Cleanup the event listener when the game ends
            return () => {
                window.removeEventListener('click', clickHandler);
            };
        }
    }, [dispatch, isGameStarted, score, currentScore]);

    const titleStyle = {
        textAlign: 'center',
        marginTop: '20px',
        border: '2px solid red',
        padding: '10px',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        fontFamily: 'Bubblegum Sans, cursive',
        fontSize: '30px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    };

      const startButtonStyle = {
        width: '100px',
        height: '100px',
        backgroundColor: 'darkred',
        borderRadius: '50%', // Makes the button round
        color: 'white',
        fontFamily: 'Bubblegum Sans, cursive',
        fontSize: '18px',
        fontWeight: 'bold',
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)', // Center horizontally
        cursor: 'pointer',
        display: isGameStarted ? 'none' : 'block', // Hide the button when the game is started
    };

    const timerStyle = {
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        width: '80px',
        height: '80px',
        backgroundColor: 'lightgray',
        border: '3px solid darkorange', // Yellow border
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Bubblegum Sans, cursive',
        fontSize: '24px',
        fontWeight: 'bold',
    };

    const scoreBoxStyle = {
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        width: '150px',
        height: '60px',
        backgroundColor: 'beige', // Beige background color
        border: '3px solid darkorange', // Dark orange border
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Bubblegum Sans, cursive',
        fontSize: '24px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const antElements = ants.map((ant, index) => (
        <div
            key={index}
            style={{ ...antStyle, cursor: 'pointer' }}
            onClick={() => handleCrushAnt(index)}
        >
            {ant}
        </div>
    ));


    return (
        <div>
            <div style={titleStyle}>Ant Crusher</div>
            <div style={timerStyle}>{formatTime(remainingTime)}</div>
            <div style={scoreBoxStyle}>Score: {currentScore < 10 ? `0${currentScore}` : currentScore}</div>


            {isGameStarted ? (
                <>
                    {/* <button onClick={handleStartGame}></button> */}
                    {/* <button onClick={handleCrushAnt}></button> */}
                    {/* <p>Score: {score}</p> */}
                </>
            ) : (
                <button style={startButtonStyle} onClick={handleStartGame}>Start</button>
            )}

            {antElements}
        </div>
    );
}

export default Game;