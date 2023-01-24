import propTypes from 'prop-types';
import css from './ContactFilter.module.css';

export const ContactFilter = ({ value, onChange }) => (
  <div>
    <label className={css.filter}>
      Find contacts by Name
      <input
        className={css.filterInput}
        type="text"
        value={value}
        onChange={onChange}
        placeholder=" "
      />
    </label>
  </div>
);

ContactFilter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
