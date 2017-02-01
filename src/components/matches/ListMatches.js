import React from 'react'
import { Match } from './Match';

export const ListMatches = (props) => {
    return (
        <ul>
            {props.matches.map(mm =>
                <Match key={mm.id} {...mm} />
            )}
        </ul>
    )
}

ListMatches.propTypes = {
    matches: React.PropTypes.array.isRequired
}