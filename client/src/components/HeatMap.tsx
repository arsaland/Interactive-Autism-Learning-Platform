import React from 'react';
import { Chart, Filler, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Chart as ChartJS } from 'react-chartjs-2';
import './HeatMap.css';

Chart.register(Filler, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface HeatMapProps {
    data: number[][] | null;
    xLabels: string[];
    yLabels: string[];
}

const HeatMap: React.FC<HeatMapProps> = ({ data, xLabels, yLabels }) => {
    if (!data || data.length === 0 || xLabels.length === 0 || yLabels.length === 0) {
        return (
            <div className="heatmap-placeholder">
                <ChartJS
                    type='bar'
                    data={{
                        labels: ['No Data'],
                        datasets: [
                            {
                                label: '',
                                data: [0],
                                backgroundColor: ['#e0e0e0'],
                            },
                        ],
                    }}
                    options={{
                        plugins: {
                            legend: {
                                display: false,
                            },
                            title: {
                                display: true,
                                text: 'Heat Map',
                            },
                        },
                        scales: {
                            x: {
                                stacked: true,
                            },
                            y: {
                                stacked: true,
                            },
                        },
                    }}
                />
                <p>No user interactions recorded yet.</p>
            </div>
        );
    }

    // Validate that each row in heatmapData has the same length as xLabels
    const isValidData = data.every(row => row.length === xLabels.length);
    if (!isValidData) {
        return <div>Heat Map data is inconsistent.</div>;
    }

    const datasets = data.map((row, rowIndex) => ({
        label: yLabels[rowIndex],
        data: row,
        backgroundColor: `rgba(${(rowIndex * 50) % 255}, ${(rowIndex * 80) % 255}, 150, 0.6)`,
    }));

    const chartData = {
        labels: xLabels,
        datasets: datasets,
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Heat Map',
            },
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };

    return (
        <div className="heatmap-container">
            <ChartJS type='bar' data={chartData} options={options} />
        </div>
    );
};

export default HeatMap;