import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUserProfile } from '../redux/actions/userActions';
import { fetchNextVideo } from '../redux/actions/videoActions';

const UserInterface: React.FC = () => {
    const dispatch = useAppDispatch();
    const userProfile = useTypedSelector((state) => state.user.profile);
    const currentVideo = useTypedSelector((state) => state.video.current);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        dispatch(fetchUserProfile());
        dispatch(fetchNextVideo());
    }, [dispatch]);

    const handlePlayPause = () => {
        setPlaying(!playing);
    };

    const handleNextVideo = () => {
        dispatch(fetchNextVideo());
    };

    return (
        <div className="user-interface">
            <h1>Welcome, {userProfile?.name || 'User'}</h1>
            {currentVideo && (
                <div className="video-player">
                    <ReactPlayer
                        url={currentVideo.url}
                        playing={playing}
                        controls={true}
                        width="100%"
                        height="400px"
                    />
                    <div className="video-controls">
                        <button onClick={handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
                        <button onClick={handleNextVideo}>Next Video</button>
                    </div>
                </div>
            )}
            {!currentVideo && <p>Loading video...</p>}
        </div>
    );
};

export default UserInterface;
