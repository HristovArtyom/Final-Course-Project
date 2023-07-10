import './cardInfo.scss';

const CardInfo = ({ data }) => {
  return(
    <>
      {data.map(item =>
        <div className="hero__card" key={item.id}>
          <div className='hero__card--img-wrapper'>
            <img className="hero__card--img" src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
          </div>
          <div className="hero__card--information">
            <p className="hero__card--title">{`${item.title === undefined ? `${item.name}` : `${item.title}`}`}</p>
            <div className="hero__card--info">
              <p className="hero__card--info-subtitle">{`${item.description === '' || item.description === null ? "Sorry, we haven't description..." : `${item.description.slice(0, 150)}...`}`}</p>
              {/* <p className="hero__card--quantity">Comics: {item.comics.available}</p>
              <p className="hero__card--quantity">Series: {item.series.available}</p>
              <p className="hero__card--quantity">Stories: {item.stories.available}</p> */}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CardInfo;