import { AppContext } from './appContextProvider';
import PropTypes from 'prop-types';

const DoctorContextProvider = ({ children }) => {
	const value = {};
	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
DoctorContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default DoctorContextProvider;
