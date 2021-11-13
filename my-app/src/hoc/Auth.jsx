import React from 'react';

const AuthHoc = (props) => {
	const {
		isAuthenticated,
	} = props;

	if (!isAuthenticated) {
		return null;
	}
  
}

export default AuthHoc;