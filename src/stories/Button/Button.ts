import PropTypes from 'prop-types';

import { Button } from '../../components/Button/Button';

Button.defaultProps = {
  children: null,
  onPress: () => {},
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
