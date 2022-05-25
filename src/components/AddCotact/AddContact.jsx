import { useDispatch } from "react-redux";
import { useState } from "react";

function AddContact() {
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const [number, setNumber] = useState("");

  const addContact = (e) => {
    e.preventDefault();
    // setArrContacts([...arrContacts, { user, number }]);
    dispatch({
      type: "addContact", payload: {
        user,
        number,
    }})
  };

  return (
    <div>
      <form onSubmit={(e) => addContact(e)}>
        <label htmlFor="message">Nome Cognome</label>
        <input
          type="text"
          id="user"
          name="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <label htmlFor="user">Numero</label>
        <input
          type="text"
          id="number"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <input type="submit" value="Aggiungi" />
      </form>
    </div>
  );
}
export default AddContact;
