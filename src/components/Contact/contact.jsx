import { useDispatch } from "react-redux";
function Contact({ contact, setFavorite }) {
  const dispatch = useDispatch();
  // const name = contact?.user;
  // const phone = contact?.number; 

  function sendContactFavorite(contact) {
    console.log("id", contact);
    dispatch({ type: "favoriteId", payload: contact });
    
  }

  return (
    <div>
      
      <h2>{contact?.user}</h2>
      <div>{contact?.number}</div>
      <div onClick={() => sendContactFavorite(contact)}>x</div>
      {/* <button onClick={() => setDeletedContact(contact.number)}>Delete</button> */}
    </div>
  );
}
export default Contact;
