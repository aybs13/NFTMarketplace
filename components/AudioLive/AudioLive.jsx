import React from 'react';

//Internal Import
import Style from "./AudioLive.module.css";

const AudioLive = () => {
    return (
        <div className={Style.audioLive}>
            <div className={Style.audioLive_box}>
                    <div className={Style.audioLive_box_left}>
                    <div className={Style.audioLive_box_right}>           
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AudioLive;