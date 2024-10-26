import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
    data: any; // Replace with proper type
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
    // Implement chart configuration
    const chartData = {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [
            {
                label: 'Sample Data',
                data: [1, 2, 3],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Bar Chart',
            },
        },
    };

    return <Bar data={chartData} options={options} />;
};

export default BarChart;