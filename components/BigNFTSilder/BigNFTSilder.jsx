import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { AiFillFire, AiFillHeart } from 'react-icons/ai';
import { MdVerified, MdTimer } from 'react-icons/md';
import { TbArrowBigLeftLines, TbArrowBigRightLine } from 'react-icons/tb';

// INTERNAL IMPORTS
import Style from './BigNFTSilder.module.css';
import images from '../../img';
import Button from '../Button/Button';

const BigNFTSlider = () => {
    const [idNumber, setIdNumber] = useState(0);
    const sliderData = [
        {
            title: "Hello NFT",
            id: 1,
            name: "Jon Doe",
            collection: "Gym",
            price: "0.34664 ETH",
            like: 243,
            image: images.user1,
            nftImage: images.nft_image_1,
            time: { days: 27, hours: 10, mins: 11, secs: 35 },
        },
        {
            title: "Wagwan NFT",
            id: 2,
            name: "Ayub Rantesalu",
            collection: "Gym",
            price: "0.65664 ETH",
            like: 235043,
            image: images.user0,
            nftImage: images.nft_image_2,
            time: { days: 77, hours: 11, mins: 21, secs: 55 },
        },
        {
            title: "Hello NFT",
            id: 3,
            name: "Willy Smith",
            collection: "Gym",
            price: "0.25664 ETH",
            like: 243,
            image: images.user3,
            nftImage: images.nft_image_3,
            time: { days: 87, hours: 32, mins: 10, secs: 15 },
        },
    ];

    // Navigation functions
    const increment = useCallback(() => {
        if (idNumber + 1 < sliderData.length) setIdNumber(idNumber + 1);
    }, [idNumber, sliderData.length]);

    const decrement = useCallback(() => {
        if (idNumber > 0) setIdNumber(idNumber - 1);
    }, [idNumber]);

    return (
        <div className={Style.bigNFTSlider}>
            <div className={Style.bigNFTSlider_box}>
                
                {/* Left Section */}
                <div className={Style.bigNFTSlider_box_left}>
                    <h2>{sliderData[idNumber].title}</h2>

                    {/* Creator Section */}
                    <div className={Style.bigNFTSlider_box_left_creator}>
                        <div className={Style.bigNFTSlider_box_left_creator_profile}>
                            <Image 
                                className={Style.bigNFTSlider_box_left_creator_profile_img}
                                src={sliderData[idNumber].image} 
                                alt="Profile image"
                                width={50}
                                height={50} 
                            />
                            <div className={Style.bigNFTSlider_box_left_creator_profile_info}>
                                <p>Creator</p>
                                <h4>{sliderData[idNumber].name} <MdVerified /></h4>
                            </div>
                        </div>

                        <div className={Style.bigNFTSlider_box_left_creator_collection}>
                            <AiFillFire className={Style.bigNFTSlider_box_left_creator_collection_icon} />
                            <div className={Style.bigNFTSlider_box_left_creator_collection_info}>
                                <p>Collection</p>
                                <h4>{sliderData[idNumber].collection}</h4>
                            </div>
                        </div>
                    </div>

                    {/* Bidding Section */}
                    <div className={Style.bigNFTSlider_box_left_bidding}>
                        <div className={Style.bigNFTSlider_box_left_bidding_box}>
                            <small>Current Bid</small>
                            <p>{sliderData[idNumber].price} <span>$221,21</span></p>
                        </div>

                        <div className={Style.bigNFTSlider_box_left_bidding_box_auction}>
                            <MdTimer className={Style.bigNFTSlider_box_left_bidding_box_icon} />
                            <span>Auction ending in</span>
                        </div>

                        {/* Timer Section */}
                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
                            {['days', 'hours', 'mins', 'secs'].map((unit, index) => (
                                <div key={index} className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                                    <p>{sliderData[idNumber].time[unit]}</p>
                                    <span>{unit.charAt(0).toUpperCase() + unit.slice(1)}</span>
                                </div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className={Style.bigNFTSlider_box_left_button}>
                            <Button btnName="Place" handleClick={() => {}} />
                            <Button btnName="View" handleClick={() => {}} />
                        </div>
                    </div>

                    {/* Slider Navigation */}
                    <div className={Style.bigNFTSlider_box_left_sliderBtn}>
                        <TbArrowBigLeftLines
                            className={Style.bigNFTSlider_box_left_sliderBtn_icon}
                            onClick={decrement}
                        />
                        <TbArrowBigRightLine
                            className={Style.bigNFTSlider_box_left_sliderBtn_icon}
                            onClick={increment}
                        />
                    </div>
                </div>

                {/* Right Section */}
                <div className={Style.bigNFTSlider_box_right}>
                    <div className={Style.bigNFTSlider_box_right_box}>
                        <Image 
                            src={sliderData[idNumber].nftImage} 
                            alt="NFT IMAGE" 
                            className={Style.bigNFTSlider_box_right_box_img}
                        />
                        <div className={Style.bigNFTSlider_box_right_box_like}>
                            <AiFillHeart />
                            <span>{sliderData[idNumber].like}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BigNFTSlider;
