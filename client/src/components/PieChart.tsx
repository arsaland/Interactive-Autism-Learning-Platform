import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import './PieChart.css';

Chart.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
    data: {
        labels: string[];
        datasets: {
            data: number[];
            backgroundColor: string[];
            borderColor: string[];
            borderWidth: number;
        }[];
    } | null;
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
    if (!data) {
        return (
            <div className="pie-chart-placeholder">
                <Pie
                    data={{
                        labels: ['No Data'],
                        datasets: [
                            {
                                data: [1],
                                backgroundColor: ['#e0e0e0'],
                                borderColor: ['#ffffff'],
                                borderWidth: 1,
                            },
                        ],
                    }}
                    options={{
                        plugins: {
                            legend: {
                                display: false,
                            },
                        },
                    }}
                />
                <p>No user interactions recorded yet.</p>
            </div>
        );
    }

    if (!Array.isArray(data.labels) || !Array.isArray(data.datasets)) {
        return <div>Invalid Pie Chart data.</div>;
    }

    return (
        <div className="pie-chart-container">
            <Pie data={data} />
        </div>
    );
};

export default PieChart;