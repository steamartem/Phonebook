import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import ContactForm from '../components/ContactForm';
import { updateContact } from '../store/contactsSlice';
import Header from '../components/Header';

export default function EditContactPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const contact = useSelector((state: RootState) =>
        state.contacts.find(c => c.id === id)
    );

    if (!contact) {
        return <p>Contact not found</p>;
    }

    return (
        <div>
            <Header />
            <h2 style={{ padding: '1rem' }}>Edit contact</h2>
            <ContactForm
                initial={contact}
                onSubmit={(updated) => {
                    dispatch(updateContact(updated));
                    navigate('/');
                }}
                onCancel={() => navigate('/')}
            />
        </div>
    );
}
