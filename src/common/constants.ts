import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Social from './model/Social';

const title = 'KN Animal Rescue';
const titleShort = 'KN AR';

const socialTwitter: Social = {
  name: 'Twitter',
  url: 'http://www.twitter.com',
  icon: TwitterIcon,
};
const socialFacebook: Social = {
  name: 'Facebook',
  url: 'http://www.facebook.com',
  icon: FacebookIcon,
};
const socialList: Social[] = [socialTwitter, socialFacebook];

export {
  title,
  titleShort,
  socialList,
};
