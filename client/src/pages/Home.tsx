import React from 'react';
import { Link } from 'react-router-dom';
import UserInterface from './UserInterface'; // Adjust the path if necessary
import './Home.css';  // Import Home styles

const Home: React.FC = () => {
    return (
        <div className="home">
            <h1>Interactive Autism Learning Platform</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/admin">Admin Dashboard</Link>
                    </li>
                    {/* Add other navigation links as needed */}
                </ul>
            </nav>
            <UserInterface />
        </div>
    );
};

export default Home;
