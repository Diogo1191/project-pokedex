import {Link} from 'react-router-dom'
import '../css/NavBar.css'

function NavBar(){
    return(
        <nav className="nav-bar">
            <Link to="/" className='nav-logo'>
                Pokedex
            </Link>

            <div className='nav-links'>
                <Link to="/">Home</Link>
                <Link to="/favorites">Favorites</Link>
            </div>
        </nav>
    )
}

export default NavBar