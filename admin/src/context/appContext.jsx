import { AppContext } from '../context/appContextProvider';
import PropTypes from 'prop-types';

const AppContextProvider = ({ children }) => {
	const value = {};
	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
AppContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AppContextProvider;
