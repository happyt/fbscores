import React from 'react'
import { Link } from './components/router'

export const Footer = () => {
    return (
        <div className="footer">
            <Link to='/'>All</Link>
            <Link to='/starred'>Starred</Link>
           <Link to='/clear'>Clear</Link>
        </div>
    )
}