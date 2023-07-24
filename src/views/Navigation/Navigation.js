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
            <NavLink to="/count" activeClassName="active">Count Down</NavLink>
            <NavLink to="/blogs" activeClassName="active">Blogs</NavLink>
        </div>
    )
}
export default Navigation