import { Contact } from "../../models/Contact"

export function ContactCard(props: {contact: Contact,  onUpdate: (contact: Contact) => void, onDelete: (contact: Contact) => void}) {
    return (
        <div>
            <h4>Name: {props.contact.firstName} {props.contact.lastName}</h4>
            <h5>Phone Number: {props.contact.phoneNumber}</h5>
            <label>
                <input type="checkbox" checked={props.contact.isFavorite}></input>
            </label>
        </div>
    )
}