import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div className='contact-section' id='contact_us'> 
            <div className="business-hours">
                <h1 className='heading'>Business Hours</h1>
                <h1>
                    <ul>
                        <li className='times'>mon - fri : 09:00 - 18:00</li>
                        <li className='times'>saturdays : 09:00 - 14:00</li>
                        <li className='times'>sundays : closed</li>
                    </ul>
                </h1>

            </div>
            <div className="contacts">
                <h1 className='contact-h1'>Email :
                    <Link
                        // style={{color:'#6f7370'}}
                        className='contacts-link' 
                        to='//www.google.com'
                        target="_blank" 
                        rel="noopener noreferrer"
                    >ldesigns@web.com
                    </Link>
                </h1>
                <h1 className='contact-h1'>Facebook :
                    <Link
                        // style={{color:'#6f7370'}}
                        className='contacts-link' 
                        to='//www.facebook.com'
                        target="_blank" 
                        rel="noopener noreferrer"
                    >facebook
                    </Link>
                </h1>
                <h1 className='contact-h1'>Instagram :
                    <Link
                        // style={{color:'#6f7370'}}
                        className='contacts-link' 
                        to='//www.instagram.com'
                        target="_blank" 
                        rel="noopener noreferrer"
                    >instagram
                    </Link>
                </h1>
                <h2>Phone :
                    <ul>
                        <li>+263774567786</li>
                        <li>+263774567786</li>
                        <li>+263774567786</li>
                    </ul>
                </h2>
            </div>
        </div>
    )
}

export default Contact
