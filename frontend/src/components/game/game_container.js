import { connect } from 'react-redux';
import { newGame, createGame } from '../../actions/game_action';
import Game from './game';

const msp = state => {

}

const mdp = dispatch => {
    // debugger
    return {
        newGame: (data) => dispatch(createGame(data))
    }
}

export default connect(null, mdp)(Game);