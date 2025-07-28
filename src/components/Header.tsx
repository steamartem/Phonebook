import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <h1>Contacts</h1>
      <Link to="/add">
        <button className="add-button">Add new contact</button>
      </Link>
    </header>
  );
}
