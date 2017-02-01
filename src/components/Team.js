import React from 'react'

export const Team = (props) => {
    return (
        <li><input type="checkbox" defaultChecked={props.star} />
            {props.name}
        </li>
    )
}

Team.propTypes = {
    id: React.PropTypes.number,
    name: React.PropTypes.string,
    star: React.PropTypes.bool
}