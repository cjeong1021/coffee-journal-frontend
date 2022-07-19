import AddProfile from '../EditProfile/EditProfile';
import EditProfile from '../EditProfile/EditProfile';

export default function Profile({ profile }) {
  return (
    <div>
      {profile === [] ? (
        <AddProfile />
      ) : (
        <EditProfile profile={profile} user={profile[0].user} />
      )}
    </div>
  );
}
