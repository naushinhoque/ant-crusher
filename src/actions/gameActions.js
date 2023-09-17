export const START_GAME = 'START_GAME';
export const CRUSH_ANT = 'CRUSH_ANT';

export const startGame = () => {
    return { type: 'START_GAME' };
};

export const crushAnt = () => {
    return { type: 'CRUSH_ANT'};
};