export const FriendCard = ({ friends }) =>
  friends.map(({ avatar, name, isOnline, id }) => (
    <li key={id}>
      <span>{isOnline}</span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  ));
