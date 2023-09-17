// This component manages the game state, including the score and spawning ants.
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startGame, crushAnt } from './actions/gameActions';

function Game() {
    const dispatch = useDispatch();
    const { score, isGameStarted } = useSelector((state) => state.game);

    useEffect(() => {
        if (isGameStarted) {
            const gameTimer = setTimeout(() => {
                dispatch(startGame(false));
            }, 90 * 1000);
            return () => clearTimeout(gameTimer);
        }
    }, [dispatch, isGameStarted]);

    const handleStartGame = () => {
        dispatch(startGame(true));
    };

    const handleCrushAnt = () => {
        dispatch(crushAnt());
    };

    return (
        <div>
            <h1>Ant Crusher</h1>
            {isGameStarted ? (
                <>
                    <p>Time remaining: 1:30</p>
                    <button onClick={handleCrushAnt}></button>
                    <p>Score: {score}</p>
                </>
            ) : (
                <button onClick={handleStartGame}>Start</button>
            )}
        </div>
    );
}

export default Game;