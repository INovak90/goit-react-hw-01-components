export const Profile = ({ avatar, username, tag, location }) => {
  return (
    <div key={username}>
      <div>
        <img src={avatar} alt="User avatar" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
    </div>
  );
};
