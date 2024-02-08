import { FaSearch } from "react-icons/fa";
import './navbar.css';

function Navbar(){
    return(
        <div className="container">
        <div>
            <button className="sort">Sort by</button>
        </div>
        <div className="input-wrapper">
            <button className="search"><FaSearch id="search-icon" /></button>
            <input placeholder="Type to search..."/>
        </div>
    </div>
    )
}
export default Navbar;