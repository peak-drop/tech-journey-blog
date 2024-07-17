import React from 'react';
import {FaGithub, FaRegEnvelope, FaTwitter, FaInstagram} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from "next/link";
import type {IconType} from "react-icons";

interface FooterProps {
  socialLinks: Partial<{ twitter: string, github: string, email: string, instagram: string }>
}

const SocialLink = (props: { link: string, Icon: IconType }) => {
  const {link, Icon} = props;
  return (
      <Link href={link} className={'hover:text-primary'}>
        <Icon size={24}/>
      </Link>
  )
}

const Footer: React.FC<FooterProps> = ({socialLinks}) => {
  return (
      <footer className="footer glass items-center p-4">
        <div className="items-center grid-flow-col hidden md:flex">
          {/*<Avatar path={avatar}/>*/}
          {/*<p>Copyright © 2023 - All right reserved</p>*/}
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          {socialLinks.twitter && <SocialLink link={socialLinks.twitter} Icon={FaXTwitter}/>}
          {socialLinks.github && <SocialLink link={socialLinks.github} Icon={FaGithub}/>}
          {socialLinks.instagram && <SocialLink link={socialLinks.instagram} Icon={FaInstagram}/>}
          {socialLinks.email && <SocialLink link={socialLinks.email} Icon={FaRegEnvelope}/>}
        </div>
      </footer>
  );
};
export default Footer;
