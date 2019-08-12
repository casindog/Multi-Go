import React, { Component } from 'react';
import BlackCircle from '../../../images/circular-shape-silhouette-black.png';
import WhiteCircle from '../../../images/circular-shape-silhouette-white.png';
import BlueCircle from '../../../images/circular-shape-silhouette-blue.png';
import RedCircle from '../../../images/circular-shape-silhouette-red.png';
import GreenCircle from '../../../images/circular-shape-silhouette-green.png';


class Players extends Component {
    constructor(props) {
        super(props)
        this.players = this.setPlayers();      
    }

    // kc: this is not working as expected. seems to be lagging by one.
    // also, shouldn't makeMove in gameBoard trigger a rerender b/c this component is mapped to game slice of state?
    
    // componentDidUpdate() {
    //     this.players = this.setPlayers();
    // }

    setPlayers() { 
        let players;
        // kc: at first entry, information is in frontend store.
        console.log(`props turn: ${this.props.game.turn}` )
        if (Object.keys(this.props.game).length > 0) {
            players = this.createStopLight(this.props.game.players, this.props.game.turn)
            // debugger
        } else if (Object.keys(this.props.game).length === 0) {
        // kc: on refresh, information is in localStorage
            let localGame = JSON.parse(localStorage.getItem('game'))
            // debugger
            players = this.createStopLight(localGame.players, localGame.turn)
        }

        return players
    }

    createStopLight(players, turn) {
        const colors = ['Red', 'Green', 'Blue']
        // debugger
        players = players.map((player, idx) => {
            return (
                <div className='lobby-players-player'>
                    {/* <img className="lobby-go-piece-image" src={`${colors[idx]}Circle`} alt="" /> */}
                    <b>{colors[idx]}</b>
                </div>
            )
        })

        // debugger    
        console.log(`modular: ${turn % players.length}`)
        switch (turn % players.length) {
            case 0:
                players[0] =
                    <div style={{ backgroundColor: "red" }} className='lobby-players-player'>
                        <b>{colors[0]}</b>
                    </div>
                break;
            case 1:
                players[1] =
                    <div style={{ backgroundColor: "green" }} className='lobby-players-player'>
                        <b>{colors[1]}</b>
                    </div>
                break;
            case 2:
                players[2] =
                    <div style={{ backgroundColor: "blue" }} className='lobby-players-player'>
                        <b>{colors[2]}</b>
                    </div>
                break;
        }

        return players
    }

    render() {
        // if (!this.props.game.players) return;
        return (
            <div className="lobby-players">
                {this.players}
            </div>
        )
    }
}

export default Players;
