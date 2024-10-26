import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { logInteraction } from '../redux/actions/interactionActions';

interface VideoPlayerProps {
    url: string;
    onEnded: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, onEnded }) => {
    const [playing, setPlaying] = useState(false);
    const playerRef = useRef<ReactPlayer>(null);
    const dispatch = useAppDispatch();

    const handlePlayPause = () => {
        setPlaying(!playing);
        dispatch(logInteraction({ type: playing ? 'pause' : 'play', timestamp: Date.now() }));
    };

    const handleRewind = () => {
        if (playerRef.current) {
            const currentTime = playerRef.current.getCurrentTime();
            playerRef.current.seekTo(currentTime - 10);
            dispatch(logInteraction({ type: 'rewind', timestamp: Date.now() }));
        }
    };

    return (
        <div className="video-player">
            <ReactPlayer
                ref={playerRef}
                url={url}
                playing={playing}
                controls={false}
                onEnded={onEnded}
                width="100%"
                height="auto"
            />
            <div className="controls">
                <button onClick={handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
                <button onClick={handleRewind}>Rewind</button>
                {/* Add other control buttons */}
            </div>
        </div>
    );
};

export default VideoPlayer;
