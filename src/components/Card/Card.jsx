import './card.scss';
import { Link } from 'react-router-dom';

const Card = ({ data, to }) => {
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

export default Card;