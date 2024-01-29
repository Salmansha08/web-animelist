'use client';
import Youtube from 'react-youtube';
import { XCircle, Video } from '@phosphor-icons/react';
import { useState } from 'react';

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);
  if (!youtubeId) {
    // Handle case when youtubeId is not defined
    return null;
  }

  const options = {
    width: '300',
    height: '200',
  };

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button onClick={handleVideoPlayer} className="hover:text-color-primary text-color-secondary float-right bg-color-dark rounded-full p-1 transition-all">
          <XCircle size={32} />
        </button>
        <Youtube videoId={youtubeId} onReady={(event) => event.target.pauseVideo()} opts={options} />
      </div>
    );
  };

  const OpenPlayer = () => {
    return (
      <div className="fixed bottom-4 right-4">
        <button
          onClick={handleVideoPlayer}
          className="flex flex-row px-2 py-1 text-md items-center gap-2 hover:text-color-primary text-color-secondary float-right bg-color-dark border border-color-secondary hover:border-color-primary rounded p-1 transition-all"
        >
          <Video size={32} className="" />
          <div>Tonton Trailer</div>
        </button>
      </div>
    );
  };

  return isOpen ? <Player /> : <OpenPlayer />;
};

export default VideoPlayer;
