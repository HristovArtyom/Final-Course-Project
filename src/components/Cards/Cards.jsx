import { useEffect, useState } from 'react';
import './cards.scss';
import Container from '../Container/Container';
import Card from '../Card/Card';
import Line from '../Line/Line';
import {api} from '../../config/api';

const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.request('comics?format=comic&formatType=comic&noVariants=false&hasDigitalIssue=true&orderBy=focDate&limit=4').then(data => setData(data.data.results))
  }, [])
  
  return (
    <section id="comics" className="cards__section">
      <Container>
        <div className="cards">
          <Line text="Popular comics"/>
          <div className="cards__wrapper">
            <Card  data={data} to={'/comics/'}></Card>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Cards;