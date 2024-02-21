import { useState } from 'react'
import { AUTH_BUTTON_LABEL } from '../utils/constants'
import { LOGO_URL } from '../utils/constants'

const Header = () => {
    [CURRENT_AUTH_LABEL, setCurrentAuthLabel] = useState(AUTH_BUTTON_LABEL.login);

    return (
        <div className="header">
            <img
                src={LOGO_URL}
                className='logo'
            />
            <ul className='nav-options'>
                <li>Home</li>
                <li>Cart</li>
                <button className='auth button'>{CURRENT_AUTH_LABEL}</button>
            </ul>
        </div>
    )
}

export default Header;