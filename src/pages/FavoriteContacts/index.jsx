import Contact from "../../components/Contact/contact";
import NavBar from "../../components/NavBar/NavBar";

function FavoriteContacts({ favorite }) {
  return (
    <>
      <NavBar />
      <div>
        {favorite?.map((contact) => (
          <Contact contact={contact} />
        ))}
      </div>
    </>
  );
}
export default FavoriteContacts;
