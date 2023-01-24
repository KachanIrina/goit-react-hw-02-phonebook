import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import propTypes from 'prop-types';
// import css from './ContactsList.module.css';

export const ContactsList = ({ contacts }) => (
  <ul>
    {contacts.map((contact, id) => (
      <ContactListItem
        key={id}
        name={contact.name}
        number={contact.number}
      ></ContactListItem>
    ))}
  </ul>
);

ContactsList.propTypes = {
  contact: propTypes.shape(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
};
