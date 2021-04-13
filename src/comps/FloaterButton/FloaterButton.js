import React from 'react'
import './FloaterButton.css'
import { Link } from 'react-router-dom'

const FloaterButton = () => {
    return (
        <div className='floater-button'>
            <ul className="floater-link">
                <li>
                    <Link
                        target="_blank" 
                        rel="noopener noreferrer"
                        to={'//api.whatsapp.com/send?phone=905391047768&text='}
                        className='link'
                    >
                        <i class="fa fa-whatsapp whatsapp-icon my-float"></i>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default FloaterButton
