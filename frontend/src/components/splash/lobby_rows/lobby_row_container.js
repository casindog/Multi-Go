import { connect } from 'react-redux';
import { patchGame, updateSetting } from '../../../actions/game_action';
import { withRouter } from 'react-router-dom';

import LobbyRow from './lobby_row';

const msp = state => {
    return {
        games: state.entities.games,
        session: state.session
    }
}

const mdp = dispatch => {
    return {
        // 1. fetch the game information
        // 2. patch the DB with 2nd player id
        joinGame: (gameId, data) => dispatch(patchGame(gameId, data)),
        updateSetting: (data) => dispatch(updateSetting(data))
    }

}

export default withRouter(connect(msp, mdp)(LobbyRow));