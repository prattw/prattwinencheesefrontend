import {Link} from "react-router-dom"


function Header(props){
    return <nav className="nav">
        <Link to="/">
            <div className="font">Dana's Wine & Cheese Shop</div>
        </Link>
    </nav>
}

export default Header