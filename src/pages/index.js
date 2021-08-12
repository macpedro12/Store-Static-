import Image from "next/image";
import Slider from "react-slick";
import Header from "../components/Header/header";
import styles from "../styles/index.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const products = [
  {
    id: 1,
    title: "Produto",
    img: "/gray.jpg",
    categoria: "Jogos",
    price: "R$ 800,00",
  },
  {
    id: 2,
    title: "Produto",
    img: "/gray.jpg",
    categoria: "Jogos",
    price: "R$ 800,00",
  },
  {
    id: 3,
    title: "Produto",
    img: "/gray.jpg",
    categoria: "Jogos",
    price: "R$ 800,00",
  },
  {
    id: 4,
    title: "Produto",
    img: "/gray.jpg",
    categoria: "Jogos",
    price: "R$ 800,00",
  },
  {
    id: 5,
    title: "Produto 1",
    img: "/gray.jpg",
    categoria: "Esportes",
    price: "R$ 800,00",
  },
  {
    id: 6,
    title: "Produto 1",
    img: "/gray.jpg",
    categoria: "Esportes",
    price: "R$ 800,00",
  },
  {
    id: 7,
    title: "Produto 1",
    img: "/gray.jpg",
    categoria: "Esportes",
    price: "R$ 800,00",
  },
  {
    id: 8,
    title: "Produto 1",
    img: "/gray.jpg",
    categoria: "Esportes",
    price: "R$ 800,00",
  },
  {
    id: 9,
    title: "Produto 1",
    img: "/gray.jpg",
    categoria: "Esportes",
    price: "R$ 800,00",
  },
  {
    id: 10,
    title: "Produto 2",
    img: "/gray.jpg",
    categoria: "Noticias",
    price: "R$ 800,00",
  },
  {
    id: 11,
    title: "Produto 2",
    img: "/gray.jpg",
    categoria: "Noticias",
    price: "R$ 800,00",
  },
  {
    id: 12,
    title: "Produto 2",
    img: "/gray.jpg",
    categoria: "Noticias",
    price: "R$ 800,00",
  },
  {
    id: 13,
    title: "Produto 3",
    img: "/gray.jpg",
    categoria: "Papel",
    price: "R$ 800,00",
  },
  {
    id: 14,
    title: "Produto 3",
    img: "/gray.jpg",
    categoria: "Papel",
    price: "R$ 800,00",
  },
];

export default function Home() {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    arrow: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [isClicked, setIsClicked] = useState(1);
  return (
    <div>
      <Header />
      <div className={styles.all}>
        <div className={styles.mainSlide}>
          <Slider {...settings}>
            {products.map((p) => (
              <div className={styles.soloSlide}>
                <Image src={p.img} layout="fill" />
              </div>
            ))}
          </Slider>
        </div>
        <div className={styles.news}>
          <h1>Novidades</h1>
          <div className={styles.categories}>
            <button
              styles={isClicked == 1 ? styles.isClicked : styles.notClicked}
              onClick={() => setIsClicked(1)}
            >
              Jogos
            </button>
            <button
              styles={isClicked == 2 ? styles.isClicked : styles.notClicked}
              onClick={() => setIsClicked(2)}
            >
              Esportes
            </button>
            <button
              styles={isClicked == 3 ? styles.isClicked : styles.notClicked}
              onClick={() => setIsClicked(3)}
            >
              Noticias
            </button>
            <button
              styles={isClicked == 4 ? styles.isClicked : styles.notClicked}
              onClick={() => setIsClicked(4)}
            >
              Papel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
