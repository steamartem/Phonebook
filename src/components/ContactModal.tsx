import { Contact } from '../types';
import { useNavigate } from 'react-router-dom';

interface Props {
  contact: Contact;
  onClose: () => void;
  onDelete: (id: string) => void;
}

export default function ContactModal({ contact, onClose, onDelete }: Props) {
  const navigate = useNavigate();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <img src={contact.photo} alt={contact.name} />
        <h2>{contact.name}</h2>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
        <div className="modal-buttons">
          <button onClick={() => navigate(`/edit/${contact.id}`)}>Edit</button>
          <button onClick={() => onDelete(contact.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}
