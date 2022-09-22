import './App.css';
import Header from './components/Header'
import ContactForm from './components/ContactForm'
import Contact from './components/Contact'
import React, { useEffect, useState } from "react";

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  let contact_list = contactsJSON;
  const [todos, setTodos] = useState([]);
  const onClickHandler = () => {
    let name = document.getElementById('f-name').value;
    let phone = document.getElementById('f-phone').value;
    let email = document.getElementById('f-email').value;
    let photo = document.getElementById('f-photo').value;
    contact_list.push(
      {
        "name": name,
        "phone": phone,
        "email": email,
        "photo": photo
      }
    )
    setTodos([... contact_list, todos])
    //alert(name + phone + email + photo)
}

  return (
    <div className="App">
      <Header />
      <ContactForm onClickHandler={onClickHandler} />
      <Contact data={contact_list} />
    </div>
  );
};

export default App;
