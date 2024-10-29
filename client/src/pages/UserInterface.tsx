import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useAppDispatch, useTypedSelector } from '../hooks';
import { fetchUserProfile } from '../redux/userSlice';
import { fetchAllVideos, nextVideo } from '../redux/videoSlice';
import './UserInterface.css'; // Import User Interface styles

const UserInterface: React.FC = () => {
    const dispatch = useAppDispatch();
    const userProfile = useTypedSelector((state) => state.user.profile);
    const { videos, currentIndex, loading, error } = useTypedSelector((state) => state.video);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        dispatch(fetchUserProfile());
        dispatch(fetchAllVideos());
    }, [dispatch]);

    const handlePlayPause = () => {
        setPlaying(!playing);
    };

    const handleNextVideo = () => {
        dispatch(nextVideo());
        setPlaying(true);
    };

    const currentVideo = videos[currentIndex];

    if (loading) {
        return <div>Loading videos...</div>;
    }

    if (error) {
        return <div>Error loading videos: {error || 'Unknown error'}</div>;
    }

    return (
        <div className="user-interface">
            <h1>Welcome, {userProfile?.name || 'User'}</h1>
            {currentVideo ? (
                <div className="video-container">
                    <h2>{currentVideo.title}</h2>
                    <div className="video-player">
                        <ReactPlayer
                            url={currentVideo.url}
                            playing={playing}
                            controls={true}
                            width="100%"
                            height="400px"
                        />
                        <div className="video-controls">
                            <button onClick={handlePlayPause}>
                                {playing ? 'Pause' : 'Play'}
                            </button>
                            <button onClick={handleNextVideo}>Next Video</button>
                        </div>
                    </div>
                    <div className="video-info">
                        <p>Category: {currentVideo.category}</p>
                        <p>
                            Duration: {Math.floor(currentVideo.duration / 60)}:
                            {(currentVideo.duration % 60).toString().padStart(2, '0')}
                        </p>
                    </div>
                </div>
            ) : (
                <p>No videos available.</p>
            )}
        </div>
    );
};

export default UserInterface;
