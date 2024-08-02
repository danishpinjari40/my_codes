import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
	// *data send to context
	const { user } = useContext(UserContext);

	if (!user) return <div>please login</div>;

	return <div>Welcome {user.username} </div>;
};

export default Profile;
