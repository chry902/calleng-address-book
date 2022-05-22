import { Link } from "react-router-dom";
// import { FaAddressBook } from "react-icons/fa";
// import { BsStarFill } from "react-icons/bs";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            home
            {/* <FaAddressBook size="4rem" color="withe" /> */}
          </Link>
        </li>
        <li>
          <Link to="/FavoriteContacts">
            favorite
            {/* <BsStarFill size="4rem" /> */}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
