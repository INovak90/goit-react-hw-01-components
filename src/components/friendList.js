import friends from '../friends.json';
import { FriendCard } from './friendCard';

export const FriendList = () => {
  return (
    <ul>
      <FriendCard friends={friends} />
    </ul>
  );
};
