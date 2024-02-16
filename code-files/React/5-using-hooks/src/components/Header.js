import {LOGO_URL} from '../utils/constants'

const Header = () => (
    <div className="header">
        <img
            src = {LOGO_URL}
            className='logo'
        />
        <ul className='nav-options'>
            <li>Home</li>
            <li>Cart</li>
            <li>Account</li>
        </ul>
    </div>
)

export default Header;