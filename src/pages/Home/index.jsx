import { useState } from "react";
import AddContact from "../../components/AddCotact/AddContact";
import ContactsList from "../../components/ContactsList/contactsList";
import NavBar from "../../components/NavBar/NavBar";

function Home({ setFavorite }) {
  const [arrContacts, setArrContacts] = useState([]);
  console.log("new arr--->", arrContacts);

  return (
    <>
      <NavBar />
      <main>
        <ContactsList arrContacts={arrContacts} setFavorite={setFavorite} />
        <AddContact setArrContacts={setArrContacts} />
      </main>
    </>
  );
}
export default Home;
