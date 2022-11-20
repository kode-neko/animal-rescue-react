import Social from './model/Social';

const title = 'KN Animal Rescue';
const titleShort = 'KN AR';

const socialTwitter: Social = {
  name: 'Twitter',
  url: 'http://www.twitter.com',
};
const socialFacebook: Social = {
  name: 'Facebook',
  url: 'http://www.facebook.com',
};
const socialList: Social[] = [socialTwitter, socialFacebook];

export {
  title,
  titleShort,
  socialList,
};
