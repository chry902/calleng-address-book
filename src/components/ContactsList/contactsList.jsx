import Contact from "../Contact/contact";

function ContactsList({ arrContacts, setFavorite }) {
  return (
    arrContacts &&
    arrContacts.map((contact) => (
      <Contact setFavorite={setFavorite} contact={contact} />
    ))
  );
}
export default ContactsList;
