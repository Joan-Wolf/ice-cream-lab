import { useState } from "react"
import { Contact } from "../../models/Contact"

export function ContactForm( props: {onAdd: (newContact: Contact) => void}) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isFavorite, setIsFavorite] = useState(false);


    return (
        <div>
            <form onSubmit={e => {e.preventDefault();
            const newContact = {
                firstName: firstName,
                lastName: lastName,
                phoneNumber: +phoneNumber,
                isFavorite: isFavorite
            }

            props.onAdd(newContact);
            }}>
            <label>First Name:</label>
            <input value={firstName} onChange={e => setFirstName(e.target.value)} type="text"></input>

            <label>Last Name:</label>
            <input value={lastName} onChange={e => setLastName(e.target.value)} type="text"></input>

            <label>Phone Number:</label>
            <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} type="text"></input>

            <label>Set as favorite?</label><input type="checkbox" checked={isFavorite} onChange={e => setIsFavorite(e.target.checked)}></input>
            <button>Add Contact</button>
            </form>
        </div>
    )
}