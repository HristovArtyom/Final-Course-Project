import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Cards from '../components/Cards/Cards';
import Characters from '../components/Characters/Characters';
import Insider from '../components/Insider/Insider';
import Footer from '../components/Footer/Footer';
import { useContext } from "react";
import { ThemeContext } from '../App';

const Home = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <Header style={theme.theme}></Header>
      <main>
        <Hero ></Hero>
        <Cards></Cards>
        <Characters style={theme.theme}></Characters>
        <Insider></Insider>
      </main>
      <Footer style={theme.theme}></Footer>
    </>
  )
}

export default Home;