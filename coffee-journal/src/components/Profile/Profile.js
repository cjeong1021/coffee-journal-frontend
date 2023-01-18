import { useState } from 'react';
import AddProfile from '../EditProfile/EditProfile';
import EditProfile from '../EditProfile/EditProfile';

export default function Profile({ profile }) {
  const [currentProfile, setProfile] = useState(profile);
  return (
    <div>
      {profile.length === 0 ? (
        <AddProfile />
      ) : (
        <EditProfile profile={currentProfile} />
      )}
    </div>
  );
}
