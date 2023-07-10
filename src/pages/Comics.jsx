import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import CardInfo from '../components/CardInfo/CardInfo';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import {api} from '../config/api';
import Container from '../components/Container/Container';

const Comics = () => {
  const { comicsId } = useParams();
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const hero = async(id) => {
      await api.request(`comics/${id}?`)
      .then(data => setData(data.data.results))
    }
    hero(comicsId);
    
  }, [comicsId])

  return (
    <>
      <Header></Header>
      <section className='hero__main--info'>
        <Container>
          <CardInfo data={data}/>
        </Container>
      </section>  
      <Footer></Footer>
    </>
  )
}

export default Comics;