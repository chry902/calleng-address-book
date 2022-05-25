import { useState } from "react";
import AddContact from "../../components/AddCotact/AddContact";
import ContactsList from "../../components/ContactsList/contactsList";
import NavBar from "../../components/NavBar/NavBar";

function Home({ setFavorite, arrContacts, setArrContacts }) {
  const [inputValue, setInputValue] = useState("");
  
  return (
    <>
      <NavBar inputValue={inputValue} setInputValue={setInputValue} />
      <ContactsList
        inputValue={inputValue}
      />
      <main>
        <AddContact />
      </main>
    </>
  );
}
export default Home;
