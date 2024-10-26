export interface UserProfile {
    id?: string;
    name: string;
    age: number;
    preferences: {
        fontSize: string;
        colorScheme: string;
        buttonSize: string;
    };
    videoHistory: {
        videoId: string;
        watchedAt: Date;
        completionRate: number;
    }[];
}