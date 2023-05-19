import { Contact } from "../../models/Contact";
import { ContactForm } from "../ContactForm/ContactForm"
import { ContactList } from "../ContactList/ContactList"
import { useState } from "react"
import { Head } from "../Head/Head";
import { ContactCard } from "../ContactCard/ContactCard";

export function Home() {
    // function onAdd()
    //next line is in the home because we want state to be as high as possible
    const [contacts, setContacts] = useState<Contact[]>([
        {firstName: "Travis", lastName: "Wolf", phoneNumber: 345, isFavorite: true},
        {firstName: "Daisy", lastName: "Wolf", phoneNumber: 345, isFavorite: true}
    ]);
    return (
      

        <div>
            <Head></Head>
            <ContactForm onAdd={newContact => setContacts([...contacts, newContact])}></ContactForm>
            <ContactList onUpdate={() => {}} onDelete={() => {}} contacts={contacts}></ContactList>
        </div>
    )
}