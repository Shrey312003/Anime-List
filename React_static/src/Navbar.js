import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navClass">
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    < Link to ="/" className="nav-link" >My List </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/add" className="nav-link">Add</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
     );
}
 
export default Navbar;