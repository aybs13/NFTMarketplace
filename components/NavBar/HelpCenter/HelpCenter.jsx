import React from 'react';
import Link from 'next/link';

// INTERNAL IMPORT
import styles from './HelpCenter.module.css';

const HelpCenter = () => {
    const helpCenter = [
        { name: "About", link: "about" },
        { name: "Contact Us", link: "contact-us" },
        { name: "Sign Up", link: "sign-up" },
        { name: "Sign In", link: "sign-in" },
        { name: "Subscription", link: "subscription" },
    ];

    return (
        <div className={styles.box}>
            {helpCenter.map((el, i) => (
                <div key={i} className={styles.helpCenter}>
                    <Link href={`/${el.link}`}>{el.name}</Link>
                </div>
            ))}
        </div>
    );
};

export default HelpCenter;
