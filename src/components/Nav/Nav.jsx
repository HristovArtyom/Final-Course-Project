import './nav.scss';
import { HashLink } from 'react-router-hash-link';

const Li = ({ text, to, onClick }) => {
  return <li className="nav__item">
    <HashLink  to={to} className="nav__link" onClick={onClick}>{text}</HashLink>
  </li>
}

export default Li;