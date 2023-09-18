// import '../actions/gameActions';

const initialState = {
    score: 0,
    isGameStarted: false,
    ants: []
};

const gameReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'START_GAME':
            return {
                ...state,
                isGameStarted: true
            }
            case 'CRUSH_ANT':
                return {
                    ...state,
                    score: state.score + 1,
                    ants: action.payload // Update the ant list
                };
        default:
            return state;
    }
}

export default gameReducer;