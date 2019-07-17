import { connect } from 'react-redux';
// import { logout } from '../../actions/session_actions';
import { createGame } from '../../actions/game_action';
import Splash from './splash';

const mdp = dispatch => {
    return {
        newGame: (data) => dispatch(createGame(data)),
        // getGame: (id) => dispatch(fetchGame(id))
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.session.isAuthenticated
    };
};

export default connect(mapStateToProps, mdp)(Splash);
