import React from 'react';
import { ShotChart } from './ShotChart';
import nba from 'nba';

export class Main extends React.Component {
    state = {
        playerId: nba.findPlayer('Dwyane Wade').playerId
    }
    render() {
        return (
            <div>
                <ShotChart playerId={this.state.playerId}/>
            </div>
        )
    }
}