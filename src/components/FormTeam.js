import React from 'react'

export const FormTeam = (props) => (
    <form>
        <input type="text" 
            onChange={props.handleInputChange}
            value={props.addition} />
    </form>)

    FormTeam.propTypes = {
        addition: React.PropTypes.string.isRequired,
        handleInputChange: React.PropTypes.func.isRequired
    }