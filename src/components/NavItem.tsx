import { Link } from "react-router-dom"
import { Item } from "../utils/types"


const NavItem = ({ item }: {item: Item}) => {
    return (
        <li>
            <Link className="nav-item btn btn-danger mx-1" to={`/${item.route}`}>{item.title}</Link>
        </li>
    )
}

export default NavItem