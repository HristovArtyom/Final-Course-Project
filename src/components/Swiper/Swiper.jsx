import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar, A11y, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import Container from '../Container/Container';
import Social from '../Social/Social';
import './swiper.scss';

const swiperArr = [
  {
    bg:'hero__size hero__section',
    title: "Spider-Man",
    description: "Spider-Man is a superhero appearing in American comic books published by Marvel Comics"
  },
  {
    bg:'hero__size hero__section--2',
    title: "Venom",
    description: "Venom is a 2018 American superhero film featuring the Marvel Comics"
  },
  {
    bg:'hero__size hero__section--3',
    title: "Joker",
    description: "The film, based on DC Comics characters"
  },
  {
    bg:'hero__size hero__section--4',
    title: "Hulk",
    description: "He Hulk is a superhero appearing in American comic books published by Marvel Comics."
  }
]

const Slider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <Swiper    
      modules={[Autoplay, Scrollbar, A11y, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={pagination}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
    >
      {swiperArr.map(item => 
        <SwiperSlide key={item.bg}>
          <Container>
            <section className={item.bg}>
              <h1 className="hero__h1">{item.title}</h1>
              <p className="hero__text">{item.description}</p>
                <Social />
            </section>
          </Container>
        </SwiperSlide>
      )};
    </Swiper>
  )
}

export default Slider;
