declare module 'react-grid-heatmap' {
    import * as React from 'react';

    export interface HeatMapGridProps {
        data: number[][];
        xLabels: string[];
        yLabels: string[];
        cellStyle?: (
            background: string,
            value: number,
            min: number,
            max: number,
            data: number[][],
            x: number,
            y: number
        ) => React.CSSProperties;
        cellRender?: (value: number) => React.ReactNode;
        // Add other props as needed based on react-grid-heatmap documentation
    }

    export class HeatMapGrid extends React.Component<HeatMapGridProps> { }
}