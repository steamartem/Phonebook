import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactListPage from './pages/ContactListPage';
import AddContactPage from './pages/AddContactPage';
import EditContactPage from './pages/EditContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactListPage />} />
        <Route path="/add" element={<AddContactPage />} />
        <Route path="/edit/:id" element={<EditContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
