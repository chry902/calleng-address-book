import { useEffect, useState } from "react";
import Contact from "../../components/Contact/contact";
import NavBar from "../../components/NavBar/NavBar";

function FavoriteContacts({ favoriteData }) {
  const [isobj,setIsobj]=useState([])
  // function controll(favoriteData) {
  //   if (favoriteData.name ==="" ) {
  //     console.log(favoriteData);
  //   } else {
  //     setIsobj((prev)=>[...prev,favoriteData])
  //   }
  // }
  return (
    <>
      <NavBar />
      <div>
        {favoriteData?.map((contact) => (
          <Contact contact={contact} key={contact.id} />
        ))}
      </div>
    </>
  );
}
export default FavoriteContacts;
