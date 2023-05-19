import { Contact } from "../../models/Contact"
import { useState } from "react"
import { ContactCard } from "../ContactCard/ContactCard"


export function ContactList(props: {contacts: Contact[], onUpdate: (contact: Contact) => void, onDelete: (contact: Contact) => void}) {
// const [contacts, setContacts] = useState<Contact[]>(props.contacts)

    return (
        
        <div>
            <p>Contacts</p>
            {
            props.contacts.map(individualContact => <ContactCard onUpdate={props.onUpdate} onDelete={props.onDelete} contact={individualContact}></ContactCard>)
            }
        </div>
    )
}