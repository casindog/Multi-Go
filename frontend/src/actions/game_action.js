import { postGame, getGame } from '../util/game_util';

export const NEW_GAME = 'NEW_GAME';
export const FETCH_GRID = 'FETCH_GRID';

export const newGame = (data) => {

    return {
        type: NEW_GAME,
        // why is data nested twice?
        game_id: data.data._id
    }
}

export const fetchGrid = (game) => {
    // debugger
    return {
        type: FETCH_GRID,
        game: game.data
    }
}

export const fetchGame = (id) => dispatch => {
    return getGame(id).then((game) => dispatch(fetchGrid(game)))
}

export const createGame = (data) => dispatch => {
    return postGame(data).then((data) => dispatch(newGame(data)))
}