import { useEffect, useState } from 'react';
import './characters.scss';
import Container from '../Container/Container';
import Logo2 from '../../images/logo2.png';
import Card from '../Card/Card';
import Form from '../Search/Search';
import {api} from '../../config/api';

const Characters = ({ style }) => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    api.request('characters?nameStartsWith=Hul&limit=4').then(data => setData(data.data.results))
  }, [])

  const makeSearch = async(event) =>{
    api.request(`characters?nameStartsWith=${event}&limit=4`).then(data => setData(data.data.results))
  }

  return (
    <section id="characters" className={`characters__section characters__${style}`}>
      <Container>
        <div className="characters">
          <img src={Logo2} alt="" />
          <h1 className="characters__h1">FIND HERO ON MARVEL</h1>
          <p className="characters__subtitle">Find your favourite hero on Marvel</p>
          <Form onSubmit={makeSearch} />
        </div>
        <div className="characters__cards">
          <Card data={data} to={'/hero/'}></Card>
        </div>
      </Container>
    </section>
  )
}

export default Characters;