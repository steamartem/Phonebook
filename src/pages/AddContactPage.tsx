import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import { addContact } from '../store/contactsSlice';

export default function AddContactPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div>
            <Header />
            <h2 style={{ padding: '1rem' }}>Add new contact</h2>
            <ContactForm
                onSubmit={(contact) => {
                    dispatch(addContact(contact));
                    navigate('/');
                }}
                onCancel={() => navigate('/')}
            />
        </div>
    );
}
