
'use client';

import React, { useState, useCallback } from 'react';
import ReactPlayer from 'react-player';
import type { PlayerProps } from 'next-video';

export default function Player(props: PlayerProps) {
  const { src, poster, ...rest } = props;
  const [lastPlayTime, setLastPlayTime] = useState(0);


  const handleProgress = useCallback(({ playedSeconds }: { playedSeconds: number }) => {
    setLastPlayTime(playedSeconds);
  }, []);


  const handleSeek = useCallback((seekTime: number) => {
    const videoElement = document.querySelector('video');
    if (videoElement) {
      if (seekTime > lastPlayTime) {
        videoElement.currentTime = lastPlayTime;
      } else {
        setLastPlayTime(seekTime);
      }
    }
  }, [lastPlayTime]);

  return (
    <ReactPlayer
      url={src}
      config={{ file: { attributes: { poster } } }}
      width="100%"
      height="100%"
      onProgress={handleProgress}
      onSeek={handleSeek}
      {...rest}
    />
  );
}
