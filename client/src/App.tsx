import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import UserInterface from './pages/UserInterface';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/" element={<UserInterface />} />
            </Routes>
        </Router>
    );
};

export default App;
