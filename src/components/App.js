import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition } from 'react-transition-group';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import Logo from './Logo/logo';
import Notification from './Notification/Notification';
import stylesLogo from './Logo/Logo.module.css';
import stylesList from './contactList/ContactList.module.css';
import stylesFilter from './filter/Filter.module.css';

export default class PhoneBook extends Component {
  state = {
    contacts: [],
    filter: '',
    alert: false,
  };

  componentDidMount() {
    const savedLocalStorageContacts = localStorage.getItem('contacts');

    if (savedLocalStorageContacts) {
      this.setState({
        contacts: JSON.parse(savedLocalStorageContacts),
      });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleAddContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    const names = this.state.contacts.map(contact =>
      contact.name.toLowerCase(),
    );

    if (name === '' || number === '') {
      return contact;
    } else if (names.includes(name.toLowerCase())) {
      this.setState({ alert: true });
      setTimeout(() => {
        this.setState({ alert: false });
      }, 2500);
    } else {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, contact],
        };
      });
    }
  };

  handleRemoveContact = idContact => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== idContact,
        ),
      };
    });
  };

  handleFilterContacts = filter => {
    this.setState({ filter });
  };

  handleShowFilterContact = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { contacts, filter, alert } = this.state;
    const visibleContacts = this.handleShowFilterContact();
    return (
      <div>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames={stylesLogo}
          unmountOnExit
        >
          <Logo />
        </CSSTransition>
        <Notification alert={alert} />
        <ContactForm onAddContact={this.handleAddContact} />
        <CSSTransition
          in={contacts.length > 0}
          timeout={250}
          classNames={stylesFilter}
          unmountOnExit
        >
          <Filter value={filter} onChangeFilter={this.handleFilterContacts} />
        </CSSTransition>

        <CSSTransition
          in={contacts.length > 0}
          timeout={250}
          classNames={stylesList}
          unmountOnExit
        >
          <ContactList
            contacts={visibleContacts}
            onRemoveContact={this.handleRemoveContact}
          />
        </CSSTransition>
      </div>
    );
  }
}
