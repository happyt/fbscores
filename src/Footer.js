import React from 'react'
import { Link } from './components/router'

export const Footer = () => {
    return (
        <div className="footer">
            <Link to='/'>All</Link>
            <Link to='/two'>Two</Link>
        </div>
    )
}