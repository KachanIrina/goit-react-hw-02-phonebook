import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import propTypes from 'prop-types';

export const ContactsList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(contact => (
      <ContactListItem
        key={contact.id}
        name={contact.name}
        number={contact.number}
        deleteContact={deleteContact}
        id={contact.id}
      ></ContactListItem>
    ))}
  </ul>
);

ContactsList.propTypes = {
  contacs: propTypes.shape(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  deleteContact: propTypes.func.isRequired,
};
