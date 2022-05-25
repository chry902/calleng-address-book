import { Link } from "react-router-dom";
// import { FaAddressBook } from "react-icons/fa";
// import { BsStarFill } from "react-icons/bs";

function NavBar({ inputValue, setInputValue }) {
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
      <form>
        <input
          type="text"
          id="search"
          placeholder="Cerca contatto"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </nav>
  );
}
export default NavBar;
