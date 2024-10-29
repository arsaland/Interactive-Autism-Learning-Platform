import Interaction from '../models/Interaction';
import UserProfile from '../models/UserProfile';
import Video from '../models/Video';

export const generateAnalytics = async () => {
    try {
        const interactions = await Interaction.find();
        const videos = await Video.find();

        // Example: Calculate video views
        const videoViewMap: { [key: string]: number } = {};
        interactions.forEach(interaction => {
            if (interaction.type === 'view') {
                videoViewMap[interaction.videoId] = (videoViewMap[interaction.videoId] || 0) + 1;
            }
        });

        const labels = videos.map(video => video.title);
        const videoViews = videos.map(video => videoViewMap[video._id.toString()] || 0);

        // Example: Generate heatmap data (e.g., views per category)
        const categories = Array.from(new Set(videos.map(video => video.category)));
        const categoryMap: { [key: string]: { [key: string]: number } } = {};

        categories.forEach(category => {
            categoryMap[category] = {};
            videos.filter(video => video.category === category).forEach(video => {
                categoryMap[category][video.title] = videoViewMap[video._id.toString()] || 0;
            });
        });

        const heatmap: number[][] = categories.map(category => {
            return videos
                .filter(video => video.category === category)
                .map(video => categoryMap[category][video.title] || 0);
        });

        const xLabels = videos.map(video => video.title);
        const yLabels = categories;

        return {
            labels,
            videoViews,
            heatmap,
            xLabels,
            yLabels,
            // Include other analytics results as needed
        };
    } catch (error) {
        console.error('Error generating analytics:', error);
        throw error;
    }
};