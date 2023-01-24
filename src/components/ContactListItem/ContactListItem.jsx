import propTypes from 'prop-types';

export const ContactListItem = ({ name, number, DeleteContact }) => {
  <li>
    {name}: {number}
    <button type="button" onClick={() => DeleteContact()}>
      Delete
    </button>
  </li>;
};

ContactListItem.propTypes = {
  contact: propTypes.shape(
    propTypes.exact({
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  deleteContact: propTypes.func.isRequired,
};
