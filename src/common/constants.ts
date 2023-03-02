import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Social from './model/Social';

const title = 'KN Animal Rescue';
const titleShort = 'KN AR';

const {
  VITE_API_PROTOCOL: API_PROTOCOL,
  VITE_API_SERVER: SERVER_PORT,
  VITE_API_PORT: SERVER_URL,
} = import.meta.env;
const urlApi = `${API_PROTOCOL}${SERVER_PORT}:${SERVER_URL}/`;

const socialTwitter: Social = {
  name: 'Twitter',
  url: 'https://twitter.com/KodenekoFront',
  icon: TwitterIcon,
};
const socialGithub: Social = {
  name: 'Github',
  url: 'https://github.com/kode-neko',
  icon: GithubIcon,
};
const socialLinkedin: Social = {
  name: 'LinkedIn',
  url: 'https://es.linkedin.com/',
  icon: LinkedInIcon,
};

const socialList: Social[] = [socialTwitter, socialGithub, socialLinkedin];
const limitListRest = 5;

export {
  title,
  titleShort,
  urlApi,
  socialList,
  limitListRest,
};
