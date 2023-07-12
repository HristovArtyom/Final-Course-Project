import './header.scss';
import Container from '../Container/Container';
import Logo from '../../images/logo.png';
import Nav from '../Nav/Nav';
import { useContext, useState } from "react";
import { ThemeContext } from '../../App';
import { Link } from 'react-router-dom';

const Header = () => {
  const theme = useContext(ThemeContext);
  const [style, setStyle] = useState("bg--main");
  const [menu, setMenu] = useState("hide");
  
  const changeStyle = () => {
    if(style === 'bg--main'){
      setStyle("bg--second");
      theme.setTheme("bg--second");
    } else {
      setStyle("bg--main");
      theme.setTheme("bg--main");
    }
  };

  const openMenu = () => {
    if(menu === "hide") {
      setMenu("open");
    } else {
      setMenu("hide");
    }
  }
  
  return(
    <header className={`header header__${theme.theme}`}>
      <Container>
        <div className="navigation">
          <Link className='logo' href="/">
            <img src={Logo} alt="Marvel logo" />
          </Link>
          <div className="nav">
            <ul className={`nav__list ${menu}`}>
              <Nav text="Home" to="/"/>
              <Nav text="Comic" to="/#comics"/>
              <Nav text="Character" to="/#characters"/>
              <Nav text="Contacts" to="/#footer"/>
            </ul>
            <div className={`burger burger__${menu}`} onClick={openMenu}>
              <span className="burger__menu"></span>
              <span className="burger__menu"></span>
              <span className="burger__menu"></span>
            </div>
          </div>
          <button className={`header__btn btn__${theme.theme}`} onClick={changeStyle}>{`${theme.theme === 'bg--main' ? 'Dark' : 'Light'}`}</button>
        </div>
      </Container>
    </header>
  )
}

export default Header;