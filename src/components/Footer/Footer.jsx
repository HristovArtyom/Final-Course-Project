import Container from '../Container/Container';
import './footer.scss';
import Logo from '../../images/logo.png';
import Logo2 from '../../images/logo2.png';
import LogoInsider from '../../images/insider__logo.png';
import Line from '../Line/Line';
import Social from '../Social/Social';
import { Link } from 'react-router-dom';

const Footer = ({ style }) => {
  return (
    <footer id="footer" className={`footer__section footer__${style}`}>
      <Container>
        <Line text="Contacts" />
        <div className="footer">
          <div className="footer__contacts">
            <div className="footer__insider">
              <Link href="/#">
                <img className="footer__insider--logo" src={LogoInsider} alt="Marvel logo" />
              </Link>
              <div className="footer__insider--text">
                <p className="footer__insider--title">MARVEL INSIDER</p>
                <p className="footer__insider--subtitle">Get Rewarded for Being a Marvel Fan</p>
              </div>
            </div>
            <div className="footer__insider">
              <Link href="/#">
                <img className="footer__unl--logo" src={Logo2} alt="Marvel logo" />
              </Link>
              <div className="footer__insider--text">
                <p className="footer__insider--title">MARVEL UNLIMITED</p>
                <p className="footer__insider--subtitle">Access Over 30,000+ Digital Comics</p>
              </div>
            </div>
          </div>
          <Link href="/#">
            <img className="footer__unl--logo" src={Logo} alt="Marvel logo" />
          </Link>          
          <Social/>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;