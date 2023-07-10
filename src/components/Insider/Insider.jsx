import './insider.scss';
import Container from '../Container/Container';
import Button from '../Button/Button';
import InsImg from '../../images/insider.png';
import Line from '../Line/Line';

const Insider = () => {
  return (
      <section className="insider__section">
        <Container>
          <Line text="Insider"/>
          <div className="insider">
            <img src={InsImg} alt="Insider" className="insider__img" />
            <div className="insider__text">
              <h3 className="insider__text--title">MARVEL INSIDER</h3>
              <h2 className="insider__text--subtitle">Watch, Earn, Redeem!</h2>
              <p className="insider__text--info">Get a reward for what you already do as a fan.</p>
              <form action="https://www.marvel.com/insider" target="_blank">
                <Button text="Join Now" />
              </form>
            </div>
          </div>
        </Container>
      </section>
  )
}

export default Insider;