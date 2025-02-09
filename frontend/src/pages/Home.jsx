import ImageSlider from "../components/ImageSlider";
import sliderImages from "../data/sliderImages";
import wardrobePic from "../assets/galery/pic4.jpg";
import Image from "../components/Image";
import { motion } from "motion/react";

export default function HomePage() {
  return (
    <>
      <ImageSlider>
        {sliderImages.map((image, index) => {
          return (
            <Image
              key={index}
              imgURL={image.imgURL}
              imgAlt={image.imgAlt}
              note={image.note}
            />
          );
        })}
      </ImageSlider>
      <motion.div
        initial={{ y: 200 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="home-about"
      >
        <motion.div
          whileInView={{ transform: "rotate(45deg)" }}
          transition={{ duration: 0.9 }}
          className="decor"
        ></motion.div>
        Dobrodošli u RetroStyle, gde se strast prema dizajnu i vrhunskoj izradi
        spaja kako bismo stvorili nameštaj koji inspiriše i unapređuje vaš
        prostor. Specijalizovani smo za izradu visokokvalitetnih kuhinja po
        meri, prilagođenih vašem ukusu, stilu i potrebama. Pored kuhinja,
        izrađujemo komade, ormare, stolove i druge elemenate, vodeći računa o
        svakom detalju kako bismo ispunili vaša očekivanja – na vreme.
      </motion.div>
      <div className="middle">
        <motion.div
          initial={{ x: -300 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="img-container"
        >
          <img src={wardrobePic}></img>
        </motion.div>
        <motion.div
          initial={{ y: 300 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="info"
        >
          <h3>Pretvaramo vaše ideje u stvarnost</h3>
          <p>
            Sa dugogodišnjim iskustvom u proizvodnji nameštaja, naš tim iskusnih
            majstora koristi najkvalitetnije materijale i pažljivo izrađuje
            svaki komad, osiguravajući savršen spoj funkcionalnosti, estetike i
            trajnosti. Bez obzira da li je reč o modernim minimalističkim
            rešenjima ili klasičnom, toplom dizajnu, tu smo da vašu viziju
            pretvorimo u stvarnost.
          </p>
        </motion.div>
      </div>
    </>
  );
}
