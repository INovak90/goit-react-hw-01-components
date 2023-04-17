import PropTypes from 'prop-types';
import { ListItem, IsOnline } from './friendsCard.style';

export const FriendCard = ({ friends }) =>
  friends.map(({ avatar, name, isOnline, id }) => (
    <ListItem key={id}>
      <IsOnline online={isOnline === true}></IsOnline>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </ListItem>
  ));

FriendCard.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
