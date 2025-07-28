import { useState } from 'react';
import { Contact } from '../types';

interface Props {
    initial?: Contact;
    onSubmit: (contact: Contact) => void;
    onCancel: () => void;
}

export default function ContactForm({ initial, onSubmit, onCancel }: Props) {
    const [form, setForm] = useState<Contact>(
        initial || { id: crypto.randomUUID(), name: '', phone: '', email: '', photo: '' }
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                required
            />
            <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
            />
            <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                required
            />
            <input
                name="photo"
                value={form.photo}
                onChange={handleChange}
                placeholder="Photo URL"
            />
            {form.photo && (
                <img src={form.photo} alt="preview" width={100} height={100} />
            )}
            <div style={{ marginTop: '1rem' }}>
                <button type="submit">Save</button>
                <button type="button" onClick={onCancel}>
                    Back to contacts
                </button>
            </div>
        </form>
    );
}
