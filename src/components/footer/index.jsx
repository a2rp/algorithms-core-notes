import React from "react";
import { FaCodepen, FaFacebook, FaGithub, FaLinkedin, FaPatreon, FaYoutube } from "react-icons/fa6";
import { FiCoffee, FiGlobe, FiHeart, FiMail } from "react-icons/fi";
import { Styled } from "./styled";

const Footer = () => {
    const links = [
        ["Portfolio", "https://www.ashishranjan.net/", FiGlobe],
        ["GitHub", "https://github.com/a2rp", FaGithub],
        ["CodePen", "https://codepen.io/ash1198", FaCodepen],
        ["LinkedIn", "https://www.linkedin.com/in/aashishranjan", FaLinkedin],
        ["Facebook", "https://www.facebook.com/theash.ashish/", FaFacebook],
        ["YouTube", "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", FaYoutube],
        ["Email", "mailto:ash.ranjan09@gmail.com", FiMail],
        ["Support", "https://a2rp-donation-page.netlify.app/", FiHeart],
        ["Buy Me a Coffee", "https://buymeacoffee.com/a2rp", FiCoffee],
        ["Patreon", "https://www.patreon.com/a2rp", FaPatreon],
    ];

    return (
        <Styled.Wrapper>
            <div className="left">
                &copy; {new Date().getFullYear()} All rights reserved
            </div>

            <div className="right">
                By&nbsp;
                <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">
                    Ashish Ranjan
                </a>
            </div>

            <div className="socialLinks" aria-label="Social and support links">
                {links.map(([label, href, Icon]) => (
                    <a
                        key={label}
                        href={href}
                        target={href.startsWith("mailto:") ? undefined : "_blank"}
                        rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                        aria-label={label}
                        title={label}
                    >
                        <Icon aria-hidden="true" />
                    </a>
                ))}
            </div>
        </Styled.Wrapper>
    );
};

export default Footer;
