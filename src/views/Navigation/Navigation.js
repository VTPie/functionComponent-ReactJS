import './Navigation.scss'
import {
    NavLink
} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="topnav">
            <NavLink to="/" activeClassName="active" exact>Home</NavLink>
            <NavLink to="/population" activeClassName="active">Population</NavLink>
            <NavLink to="/todo" activeClassName="active">TODO App</NavLink>
        </div>
    )
}
export default Navigation