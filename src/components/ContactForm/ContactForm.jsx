import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import propTypes from 'prop-types';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  nameInputId = nanoid();
  contactsInputId = nanoid();

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.onSubmit(newContact);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        autoComplete="off"
        className={css.form}
      >
        <div>
          <label className={css.labelForm}>
            Name
            <input
              className={css.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor={this.contactsInputId}>
            Number
            <input
              className={css.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit" className={css.formBtn}>
            Add contact
          </button>
        </div>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
