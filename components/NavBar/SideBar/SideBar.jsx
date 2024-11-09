import React, {useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { GrClose } from'react-icons/gr';
import { 
    TiSocialFacebook, 
    TiSocialLinkedin, 
    TiSocialInstagram, 
    TiSocialTwitter, 
    TiSocialYoutube,  
    TiArrowSortedDown,
    TiArrowSortedUp,
} from'react-icons/ti'; 

//INTERNAL IMPORT
import Style from './SideBar.module.css';
import images from '../../../img';
import Button from '../../Button/Button';

const SideBar = ({ setOpenSideMenu }) => {
    //USE STATE
    const [openDiscover, setOpenDiscover] = useState(false);
    const [openHelp, setOpenHelp] = useState(false);

    // DISCOVER NAVIGATION MENU
    const discover = [
        { name: "Collection", link: "collection" },
        { name: "Search", link: "search" },
        { name: "Author Profile", link: "author-profile" },
        { name: "NFT Details", link: "NFT-details" },
        { name: "Account Settings", link: "account-settings" },
        { name: "Connect Wallet", link: "connect-wallet" },
        { name: "Blog", link: "blog" }
    ];

    // HELP CENTER
        const helpCenter = [
            { name: "About", link: "about" },
            { name: "Contact Us", link: "contact-us" },
            { name: "Sign Up", link: "sign-up" },
            { name: "Sign In", link: "sign-in" },
            { name: "Subscription", link: "subscription" },
    ];

    const openDiscoverMenu = () => {
        if(!openDiscover) { 
            setOpenDiscover(true);
        } else {
            setOpenDiscover(false);
        }
    };

    const openHelpMenu = () => {
        if(!openHelp) { 
            setOpenHelp(true);
        } else {
            setOpenHelp(false);
        }
    };

    const closeSideBar = () => {
        setOpenSideMenu(false);
    }

    return(
        <div className={Style.SideBar}>
            <GrClose className={Style.sideBar_closeBtn} 
            onClick={() => closeSideBar(false)}
            />

            <div className={Style.sideBar_box}>
            <Image src={images.logo} alt="Logo" width={150} height={150} priority />
                <p>
                    Discover the most outstanding articles on all topic of NFT & 
                    your own stories and share them
                </p>
                <div className={Style.sideBar_social}>
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

            <div className={Style.sideBar_menu}>
                <div>
                    <div className={Style.sideBar_menu_box}
                    onClick={() => openDiscoverMenu()}
                    >
                        <p>Discover</p>
                        <TiArrowSortedDown/>
                    </div>

                    {openDiscover &&(
                        <div className={Style.sideBar_discover}>
                            {discover.map((el, i) => (
                                <p key={i + 1}>
                                    <Link href={{pathname:`${el.link}`}}>{el.name}</Link>
                            </p>
                        ))}
                    </div>
                    )}
                </div>

                <div>
                    <div className={Style.sideBar_menu_box} onClick={() => openHelpMenu()}
                        >
                        <p>Help Center</p>
                        <TiArrowSortedDown/>
                    </div>
                    {
                        openHelp && (
                            <div className={Style.sideBar_discover}>
                                {helpCenter.map((el, i) => (
                                    <p key={i + 1}>
                                        <Link href={{pathname:`${el.link}`}}>{el.name}</Link>
                                    </p>
                                ))}
                            </div>
                        )
                    }
                </div>
            </div>

            <div className={Style.sideBar_button}>
                <Button btnName="Create" handleClick={() => {}}/>
                <Button btnName="Connect Wallet" handleClick={() => {}}/>
            </div>
        </div>
    );
};

export default SideBar;