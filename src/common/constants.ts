import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import GithubIcon from '@mui/icons-material/GitHub';
import BoltIcon from '@mui/icons-material/Bolt';
import CodeIcon from '@mui/icons-material/Code';
import CollectionsIcon from '@mui/icons-material/Collections';
import Social from './model/Social';

const title = 'KN Animal Rescue';
const titleShort = 'KN AR';

const {
  VITE_API_PROTOCOL: API_PROTOCOL,
  VITE_API_SERVER: SERVER_PORT,
  VITE_API_PORT: SERVER_URL,
} = import.meta.env;
const urlApi = `${API_PROTOCOL}${SERVER_PORT}:${SERVER_URL}`;

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
const socialStackBlitz: Social = {
  name: 'StackBlitz',
  url: 'https://stackblitz.com/@kode-neko',
  icon: BoltIcon,
};
const socialCodePen: Social = {
  name: 'CodePen',
  url: 'https://codepen.io/kodeneko',
  icon: CodeIcon,
};
const socialFigma: Social = {
  name: 'Figma',
  url: 'https://www.figma.com/@kodeneko',
  icon: CollectionsIcon,
};

const socialList: Social[] = [
  socialTwitter,
  socialGithub,
  socialStackBlitz,
  socialCodePen,
  socialFigma,
];
const limitListRest = 5;

export {
  title,
  titleShort,
  urlApi,
  socialList,
  limitListRest,
};
