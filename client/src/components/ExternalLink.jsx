import React from 'react'
import {FiExternalLink} from 'react-icons/fi'
import classNames from 'classnames'
import '../css/ExternalLink.css'

const ExternalLink = ({children, href, excludeIcon, style, className}) => {
    
    return(
        <a className={classNames("external-link", className ? className : "")} href={href} target="_blank" rel="noopener noreferrer" style={style}>
            {children}
            {!excludeIcon && <FiExternalLink className="link-icon" />}
        </a>
    )
}

export default ExternalLink