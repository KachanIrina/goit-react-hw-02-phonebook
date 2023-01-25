import React from 'react';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = contact => {
    if (
      !this.state.contacts.find(
        ({ name }) => name.toLocaleLowerCase() === contact.name.toLowerCase()
      )
    ) {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, contact],
      }));
    } else {
      alert(`${contact.name} is already in contacts.`);
    }
  };

  findContact = ({ currentTarget: { value } }) => {
    this.setState({ filter: value });
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>

        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2> Contacts</h2>

        {this.state.contacts.length !== 0 && (
          <ContactFilter
            value={this.state.filter}
            onChange={this.findContact}
          />
        )}

        <ContactsList
          contacts={this.filterContacts()}
          deleteContact={this.deleteContact}
        />

        {this.state.contacts.length === 0 && <p>There are no contacts!</p>}
      </div>
    );
  }
}
