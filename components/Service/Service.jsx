import React from 'react';
import Image from 'next/image';

// INTERNAL IMPORT
import Style from './Service.module.css';
import images from '../../img';

const Service = () => {
    return (
        <div className={Style.service}>
            <div className={Style.service_box}>
                <div className={Style.service_box_item}>
                    <Image 
                        src={images.service1} 
                        alt="Filter & Discover"
                        width={100}
                        height={100}
                    />
                    <p className={Style.service_box_item_step}>
                        <span>Step 1</span>
                    </p>
                    <h3>Filter & Discover</h3>
                    <p>
                        Connect with your wallet, discover, buy NFTs, and sell your own.
                    </p>
                </div>
                <div className={Style.service_box_item}>
                    <Image 
                        src={images.service2} 
                        alt="Create & Sell"
                        width={100}
                        height={100}
                    />
                    <p className={Style.service_box_item_step}>
                        <span>Step 2</span>
                    </p>
                    <h3>Create & Sell</h3>
                    <p>
                        Easily create your own NFTs and list them for sale in our marketplace.
                    </p>
                </div>
                <div className={Style.service_box_item}>
                    <Image 
                        src={images.service3} 
                        alt="Connect Wallet"
                        width={100}
                        height={100}
                    />
                    <p className={Style.service_box_item_step}>
                        <span>Step 3</span>
                    </p>
                    <h3>Connect Wallet</h3>
                    <p>
                        Connect your digital wallet to start trading NFTs instantly.
                    </p>
                </div>
                <div className={Style.service_box_item}>
                    <Image 
                        src={images.service4} 
                        alt="Earn Rewards"
                        width={100}
                        height={100}
                    />
                    <p className={Style.service_box_item_step}>
                        <span>Step 4</span>
                    </p>
                    <h3>Earn Rewards</h3>
                    <p>
                        Engage in the community and earn rewards for your participation.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Service;
