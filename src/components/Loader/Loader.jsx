import PropTypes from 'prop-types';
import { Bars } from 'react-loader-spinner';


const Loader = ({isLoading}) => {
return (
    <> 
    <Bars
    height="40"
    width="40"
    color="#280232"
    ariaLabel="bars-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={isLoading}
  />
  </>
);
}
 export default Loader;

Loader.propTypes ={
    loading: PropTypes.bool.isRequired,
}