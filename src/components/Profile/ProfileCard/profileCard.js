import user from '../../../user.json';
import PropTypes from 'prop-types';
import { ProfileStats } from 'components/Profile/ProfileStats/profileStats';
import {
  ProfileBox,
  ProfileImg,
  ProfileImgBox,
  BoxTitle,
  ProfileText,
  ProfileBoxUser,
} from './profileCard.style';

export const ProfileCard = ({ avatar, username, tag, location }) => {
  return (
    <ProfileBox>
      <ProfileBoxUser key={username}>
        <ProfileImgBox>
          <ProfileImg src={avatar} alt="User avatar" />
        </ProfileImgBox>
        <BoxTitle>
          <ProfileText>{username}</ProfileText>
          <ProfileText>@{tag}</ProfileText>
          <ProfileText>{location}</ProfileText>
        </BoxTitle>
      </ProfileBoxUser>
      <ProfileStats
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </ProfileBox>
  );
};

ProfileCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
