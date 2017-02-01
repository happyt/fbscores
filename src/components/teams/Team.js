import React from 'react'
import {partial} from '../../lib/utils'

export const Team = (props) => {
    // one other option
//    const swapStar = props.toggleStar.bind(null, props.id)

    const swapStar = partial(props.toggleStar, props.id)
    const remover = partial(props.handleRemove, props.id)

    return (
        <li>
            <span className="delete-item" href="#" onClick={remover}>X</span>
            <input type="checkbox"
//                    onChange={() => props.toggleStar(props.id)} 
                    onChange={swapStar}
                    checked={props.star} />
            {props.name}
        </li>
    )
}

Team.propTypes = {
    id: React.PropTypes.number,
    name: React.PropTypes.string,
    star: React.PropTypes.bool
}