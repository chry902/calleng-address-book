import Contact from "../Contact/contact";
import { useSelector } from "react-redux";

function ContactsList({  setFavorite, inputValue }) {
  const arrContacts2 = useSelector((state) => state.addressBookList);
  
  return (
    arrContacts2 &&
    arrContacts2
      .filter(
        (contact) =>
          contact?.number
            .toLowerCase()
            .trim()
            .includes(inputValue.toLowerCase().trim()) ||
          contact?.user
            .toLowerCase()
            .trim()
            .includes(inputValue.toLowerCase().trim())
      )
      .map((contact) => (
        <Contact
          setFavorite={setFavorite}
          contact={contact}
          key={contact.id}
        />
      ))
  );
}
export default ContactsList;
