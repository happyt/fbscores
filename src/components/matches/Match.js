import React from 'react'

export const Match = (props) => {
    return (
        <li><input type="checkbox" defaultChecked={props.finished} />
            {props.teamA} {props.scoreA}-{props.scoreB} {props.teamB}
        </li>
    )
}

Match.propTypes = {
    id: React.PropTypes.number,
    teamA: React.PropTypes.string,
    teamB: React.PropTypes.string,
    scoreA: React.PropTypes.number,
    scoreB: React.PropTypes.number,
    finished: React.PropTypes.bool
}