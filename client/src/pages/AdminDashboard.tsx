import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchAnalytics } from '../redux/actions/analyticsActions';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import HeatMap from '../components/HeatMap';

const AdminDashboard: React.FC = () => {
    const dispatch = useAppDispatch();
    const analytics = useTypedSelector((state) => state.analytics);
    const [selectedChild, setSelectedChild] = useState<string | null>(null);

    useEffect(() => {
        dispatch(fetchAnalytics());
    }, [dispatch]);

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <div className="filters">
                {/* Implement filters for child, session, and video category */}
            </div>
            <div className="charts">
                <BarChart data={analytics.interactionData} />
                <PieChart data={analytics.categoryPreferences} />
                <HeatMap data={analytics.videoEngagement} />
            </div>
            {/* Implement other dashboard components */}
        </div>
    );
};

export default AdminDashboard;
