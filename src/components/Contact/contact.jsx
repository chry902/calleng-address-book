function Contact({ contact, setFavorite }) {
  const name = contact?.user || "Contatto 1";
  const phone = contact?.number || "1234567890";

  function sendContactFavorite() {
    setFavorite((prev) => [...prev, contact]);
  }

  return (
    <div>
      <h2>{name}</h2>
      <div>{phone}</div>
      <div onClick={() => sendContactFavorite(contact)}>x</div>
    </div>
  );
}
export default Contact;
