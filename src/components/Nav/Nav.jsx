import './nav.scss';
import { NavLink } from 'react-router-dom';

const Li = ({ text, to, onClick }) => {
  return <li className="nav__item">
    <NavLink  to={to} className="nav__link" onClick={onClick}>{text}</NavLink>
  </li>
}

export default Li;