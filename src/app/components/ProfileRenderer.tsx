import { ProfileType } from '@/constants/profiles';

type PropTypes = {
  option: ProfileType;
};

export const ProfileRenderer = ({ option }: PropTypes) => {
  return <div>{option.name}</div>;
};
