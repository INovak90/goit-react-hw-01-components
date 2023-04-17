import PropTypes from 'prop-types';
import { List, ListItem, StatsText } from './progileStats.style';
export const ProfileStats = ({ followers, views, likes }) => {
  return (
    <List>
      <ListItem>
        <StatsText>Followers</StatsText>
        <StatsText>{followers}</StatsText>
      </ListItem>
      <ListItem>
        <StatsText>Views</StatsText>
        <StatsText>{views}</StatsText>
      </ListItem>
      <ListItem>
        <StatsText>Likes</StatsText>
        <StatsText>{likes}</StatsText>
      </ListItem>
    </List>
  );
};

ProfileStats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
