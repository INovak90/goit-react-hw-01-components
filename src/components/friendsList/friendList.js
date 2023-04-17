import friends from '../../friends.json';
import { FriendCard } from '../friendsCard/friendsCard';
import { List } from './friendsList.styled';

export const FriendList = () => {
  return (
    <List>
      <FriendCard friends={friends} />
    </List>
  );
};
