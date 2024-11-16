import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
  FaInstagram,
  FaSnapchatGhost,
  FaTiktok,
  FaCircle
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

const ICON_MAPPING = {
  default: FaCircle,
  facebook: FaFacebookF,
  github: FaGithub,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  snapchat: FaSnapchatGhost,
  tiktok: FaTiktok,
  twitter: FaTwitter,
  twitch: FaTwitch,
  youtube: FaYoutube
};

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      
        
    </div>
  );
};
