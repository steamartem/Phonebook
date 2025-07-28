import { Contact } from '../types';

interface Props {
  contact: Contact;
  onClick: () => void;
}

export default function ContactCard({ contact, onClick }: Props) {
  return (
    <div className="contact-card" onClick={onClick}>
      <img src={contact.photo || 'https://via.placeholder.com/80'} alt={contact.name} />
      <p>{contact.name}</p>
    </div>
  );
}
