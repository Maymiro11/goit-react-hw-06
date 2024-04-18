import './App.css';
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

function App() {

  return (
    <div className="container">
      <h1 className="main-title">Phonebook</h1>
      <div className="phonebook-wrapper">
        <div className="form-and-filter-wrapper">
          <ContactForm />
          <SearchBox />
        </div>
        <ContactList  />
      </div>
    </div>
  );
}

export default App;
