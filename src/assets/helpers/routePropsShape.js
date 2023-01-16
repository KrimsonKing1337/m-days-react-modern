import propTypes from 'prop-types';

export default propTypes.shape({
  history: propTypes.object,
  location: propTypes.object,
  match: propTypes.object,
  staticContext: propTypes.any
});
