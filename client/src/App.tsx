import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import AdminDashboard from './pages/AdminDashboard';
import Home from './pages/Home';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
                path="/admin"
                element={
                    <ErrorBoundary>
                        <AdminDashboard />
                    </ErrorBoundary>
                }
            />
        </Routes>
    );
};

export default App;
