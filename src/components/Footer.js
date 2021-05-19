import {Link} from "react-router-dom"


function Footer(props){
    return <nav className="nav">
        <Link to="/">
            <div className="font">San Francisco, California</div>
        </Link>
    </nav>
}

export default Footer