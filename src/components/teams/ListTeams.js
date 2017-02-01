import React from 'react'
import { Team } from './Team';

export const ListTeams = (props) => {
    return (
        <ul>
            {props.teams.map(mm =>
                <Team toggleStar={props.toggleStar}
                        handleRemove={props.handleRemove}
                        key={mm.id} {...mm} />
            )}
        </ul>
    )
}

ListTeams.propTypes = {
    teams: React.PropTypes.array.isRequired
}