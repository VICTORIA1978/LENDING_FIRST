import { Link } from "gatsby"
import PropTypes from "prop-types"
import { DropdownDivider } from "react-bootstrap/Dropdown"


const Header = ({ siteTitle }) => ('')


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
