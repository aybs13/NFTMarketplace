import React from 'react';

//Internal Import
import Style from "./AudioLive.module.css";
import AudioCard from './AudioCard/AudioCard';
import AudioCardSmall from './AudioCardSmall/AudioCardSmall';

const AudioLive = () => {
    return (
        <div className={Style.audioLive}>
            <div className={Style.audioLive_box}>
                <div className={Style.audioLive_box_left}>
                    <AudioCard />
                    <AudioCard />
                    
                <div className={Style.audioLive_box_right}>
                    <AudioCardSmall />
                    <AudioCardSmall />
                    <AudioCardSmall />                    
                </div>
                </div>            
            </div>
        </div>
    );
};

export default AudioLive;