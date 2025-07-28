import { useEffect, useState } from 'react';
import Header from '../components/Header';
import ContactCard from '../components/ContactCard';
import ContactModal from '../components/ContactModal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { deleteContact, setContacts } from '../store/contactsSlice';

export default function ContactListPage() {
  const contacts = useSelector((state: RootState) => state.contacts);
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('contacts');
    if (stored) {
      dispatch(setContacts(JSON.parse(stored)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const selectedContact = contacts.find((c) => c.id === selectedId);

  return (
      <div>
        <Header />

        {contacts.map((c) => (
            <ContactCard
                key={c.id}
                contact={c}
                onClick={() => setSelectedId(c.id)}
            />
        ))}

        {selectedContact && (
            <ContactModal
                contact={selectedContact}
                onClose={() => setSelectedId(null)}
                onDelete={(id) => {
                  dispatch(deleteContact(id));
                  setSelectedId(null);
                }}
            />
        )}
      </div>
  );
}
