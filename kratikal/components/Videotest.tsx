"use client";
import React, { useRef } from 'react';
import ReactPlayer from './player';
import Video from 'next-video';
import test from 'https://iskcon-hyd.s3.ap-south-2.amazonaws.com/iskcon-spiritual-guidance/Demo-Video-4isto3-ratio.mp4';
import MuxPlayer from "@mux/mux-player-react"; 
import style from "./videostyle.module.css"
import "@mux/mux-player/themes/minimal";


export default function Page() {
    // const videoRef = useRef(null);
//   <Video 
    // src={test} as={ReactPlayer}/>;
    
    return (
        <MuxPlayer
          playbackId="EcHgOK9coz5K4rjSwOkoE7Y7O01201YMIC200RI6lNxnhs"
          hotkeys="noarrowleft noarrowright nok"
        //    theme="minimal"
        className={style.mux}
          accentColor="#ea580c"
            metadata={{
                videoTitle: "Test VOD",
                ViewerUserId: "user-id-007"
            }}
            style={{width: '100%', }}
            forward-seek-offset="0"
            
            // style=""
        />

      );
}