import { Container } from './Layout.style';
import PropTypes from 'prop-types';

export const Layout = ({ children }) => <Container>{children}</Container>;

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
