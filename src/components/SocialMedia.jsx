import React from 'react';
import { FaTelegramPlane, FaTwitter,  FaDiscord, FaYoutube, FaGithub, FaRedditAlien, FaMedium} from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'
import { FOOTER } from '../data/General';

const SocialMedia = (props) => {
  const iconStyle = {fontSize: props.size, color: 'white', textDecoration: 'none'}
  return (
    <>
      {FOOTER.socialmedia.telegram.show && <a href={FOOTER.socialmedia.telegram.link} target='_blank'><FaTelegramPlane style={iconStyle} /> &nbsp;&nbsp;</a>}
      {FOOTER.socialmedia.twitter.show && <a href={FOOTER.socialmedia.twitter.link} target='_blank'><FaTwitter style={iconStyle} />&nbsp;&nbsp;</a>}
      {FOOTER.socialmedia.discord.show && <a href={FOOTER.socialmedia.discord.link} target='_blank'><FaDiscord style={iconStyle} />&nbsp;&nbsp;</a>}
      {FOOTER.socialmedia.youtube.show && <a href={FOOTER.socialmedia.youtube.link} target='_blank'><FaYoutube style={iconStyle} />&nbsp;&nbsp;</a>}
      {FOOTER.socialmedia.tiktok.show && <a href={FOOTER.socialmedia.tiktok.link} target='_blank'><SiTiktok style={iconStyle} />&nbsp;&nbsp;</a>}
      {FOOTER.socialmedia.github.show && <a href={FOOTER.socialmedia.github.link} target='_blank'><FaGithub style={iconStyle} />&nbsp;&nbsp;</a>}
      {FOOTER.socialmedia.reddit.show && <a href={FOOTER.socialmedia.reddit.link} target='_blank'><FaRedditAlien style={iconStyle} />&nbsp;&nbsp;</a>}
      {FOOTER.socialmedia.medium.show && <a href={FOOTER.socialmedia.medium.link} target='_blank'><FaMedium style={iconStyle} />&nbsp;&nbsp;</a>}
      
    </>
  );
}

export default SocialMedia;