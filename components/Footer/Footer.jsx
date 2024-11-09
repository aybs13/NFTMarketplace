import React from 'react';
import Image from 'next/image';
import { 
    TiSocialFacebook, 
    TiSocialLinkedin, 
    TiSocialInstagram, 
    TiSocialTwitter, 
    TiSocialYoutube,  
    TiArrowSortedDown,
    TiArrowSortedUp,
} from'react-icons/ti';
import {RiSendPlaneFill} from 'react-icons/ri';

//INTERNAL IMPORT
import images from '../../img';
import { Discover, HelpCenter } from '../NavBar/index';
import Style from './Footer.module.css';

const Footer = () => {
    return(
        <div className={Style.footer}>
            <div className={Style.footer_box}>
                <div className={Style.footer_box_social}>
                    <Image src={images.logo} alt="footer logo" height={100} width={100} />
                    <div className={Style.footer_box_social_icons}>
                        <p>The World's first and largest digital marketplace for
                            non-fungible tokens (NFTs). Buy, sell, and discover 
                            exclusive digital items.
                        </p>

                        <div className={Style.footer_social}>
                            <a href="#">
                                <TiSocialFacebook />
                            </a>
                            <a href="#">
                                <TiSocialLinkedin />
                            </a>
                            <a href="#">
                                <TiSocialInstagram />
                            </a>
                            <a href="#">
                                <TiSocialTwitter />
                            </a>
                            <a href="#">
                                <TiSocialYoutube />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={Style.footer_box_discover}>
                    <h3>Discover</h3>
                    <Discover/>
                </div>

                <div className={Style.footer_box_help}>
                    <h3>Help Center</h3>
                    <HelpCenter/>
                </div>

                <div className={Style.subscribe}>
                    <h3>Subscribe</h3>
                
                <div className={Style.subscribe_box}>
                    <input type="email" placeholder="Enter your email *" />
                    <RiSendPlaneFill className={Style.subscribe_box_send} />
                </div>
                <div className={Style.subscribe_box_info}>
                    <p>
                        Discover, collect, and sell extraordinary NFTs. 
                        Find, buy and sell amazing NFTs from creators all over the world.
                    </p> 
                </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;