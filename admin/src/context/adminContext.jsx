import { useState } from 'react';
import { AppContext } from '../context/appContextProvider';
import PropTypes from 'prop-types';

const AdminContextProvider = props => {
	const [token, setToken] = useState('');
	const backendUrl = import.meta.env.BACKEND_URL;
	const value = {
		token,
		setToken,
		backendUrl,
	};
	return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};
AdminContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AdminContextProvider;
