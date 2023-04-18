import { ProfileCard } from './ProfileCard/profileCard';
import { BoxProfile } from './profile.style';

import user from '../../data/user.json';

export const Profile = () => (
  <BoxProfile>
    <ProfileCard
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
    />
  </BoxProfile>
);
