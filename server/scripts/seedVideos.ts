import mongoose from 'mongoose';
import Video from '../models/Video';

const videos = [
    {
        title: "Phonics - Learn to Read | Spelling Challenge | Level 2 | Alphablocks",
        url: "https://www.youtube.com/watch?v=D-cOuO5jGKo",
        category: "Alphabet",
        duration: 638 // Duration in seconds
    },
    {
        title: "Peppa Pig Full Episodes | Swimming with Peppa and George Family Kids Cartoon",
        url: "https://www.youtube.com/watch?v=hWdLhB2okqA",
        category: "Animals",
        duration: 312
    },
    {
        title: "[🍬NEW] Trick or Treat! Halloween Candy Adventure | Baby Shark Halloween Story | Baby Shark Official",
        url: "https://www.youtube.com/watch?v=oMzor1exOHY",
        category: "Shapes",
        duration: 480
    }
];

const seedVideos = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/autistic_children_app');
        await Video.deleteMany({}); // Clear existing videos
        await Video.insertMany(videos);
        console.log('Videos seeded successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding videos:', error);
        process.exit(1);
    }
};

seedVideos();