import './card.scss';
import Error from '../../images/error.jpg';
import { Link } from 'react-router-dom';

const Card = ({ data, to }) => {
  if(data.length === 0 || data === undefined) {
    return(
      <div className="error">
        <div className="error__img--wrapper">
          <img className="error__img" src={Error} alt=""/>
        </div>
        <p className='error__text' >No Results Found</p>
      </div>
    )
  } else {
    return (
      <>
        {data.map(item => 
          <div className="card" key={item.id}>
            <Link to={`${to ? `${to}${item.id}` : '/'}`}>
              <img className="card__img" src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
            </Link>
          </div>
        )} 
      </>
    )
  }
}

export default Card;