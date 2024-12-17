import { doctors } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import PropTypes from "prop-types";

const AppContextProvider = (props) => {
  const currency = "$";
  const value = {
    doctors,
    currency,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContextProvider;
