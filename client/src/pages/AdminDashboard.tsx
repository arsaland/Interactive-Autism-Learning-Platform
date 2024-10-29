import React, { useEffect } from 'react';
import { useAppDispatch, useTypedSelector } from '../hooks';
import { fetchAnalytics } from '../redux/analyticsSlice';
import ErrorBoundary from '../components/ErrorBoundary';
import PieChart from '../components/PieChart';
import HeatMap from '../components/HeatMap';
import './AdminDashboard.css';

const AdminDashboard: React.FC = () => {
    const dispatch = useAppDispatch();
    const { data: analyticsData, loading, error } = useTypedSelector((state) => state.analytics);

    useEffect(() => {
        dispatch(fetchAnalytics());
    }, [dispatch]);

    if (loading) {
        return <div className="loading-spinner">Loading analytics data...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    if (!analyticsData) {
        return <div className="no-data">No analytics data available.</div>;
    }

    // Check if all analytics fields are empty or zero
    const isDataEmpty =
        (analyticsData.videoViews.length === 0 || analyticsData.videoViews.every(view => view === 0)) &&
        (analyticsData.heatmap.length === 0 || analyticsData.heatmap.every(row => row.every(cell => cell === 0)));

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <div className="charts-container">
                <ErrorBoundary>
                    <PieChart data={isDataEmpty ? null : {
                        labels: analyticsData.labels,
                        datasets: [
                            {
                                data: analyticsData.videoViews,
                                backgroundColor: [
                                    '#FF6384',
                                    '#36A2EB',
                                    '#FFCE56',
                                    '#4BC0C0',
                                    '#9966FF',
                                    '#FF9F40',
                                ],
                                borderColor: ['#fff'],
                                borderWidth: 1,
                            },
                        ],
                    }} />
                </ErrorBoundary>
                <HeatMap data={isDataEmpty ? null : analyticsData.heatmap} xLabels={isDataEmpty ? [] : analyticsData.xLabels} yLabels={isDataEmpty ? [] : analyticsData.yLabels} />
            </div>
            {isDataEmpty && <div className="no-data-message">No user interactions recorded yet.</div>}
        </div>
    );
};

export default AdminDashboard;
