import ImageSlider from "../components/ImageSlider";
import sliderImages from "../data/sliderImages";
import wardrobePic from "../assets/712i2n2h5+L.jpg";
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
        Dobrodošli u [Naziv kompanije], gde se strast prema dizajnu i vrhunskoj
        izradi spaja kako bismo stvorili nameštaj koji inspiriše i unapređuje
        vaš prostor. Specijalizovani smo za izradu visokokvalitetnih kuhinja po
        meri, prilagođenih vašem ukusu, stilu i potrebama. Sa pažnjom prema
        svakom detalju i korišćenjem najkvalitetnijih materijala, naš cilj je da
        svaki komad nameštaja bude savršen spoj funkcionalnosti, estetike i
        trajnosti. Bez obzira na to da li ste u potrazi za modernim
        minimalističkim rešenjima ili klasičnim, toplim dizajnom, mi ćemo se
        pobrinuti da vaša vizija postane stvarnost.
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
          <h3>We Bring Your Ideas to Life</h3>
          <p>
            For over 60 years, Justice has been manufacturing high-quality
            commercial furniture and mattresses for hotels, resorts, senior
            living, and other facilities. Using domestically sourced materials,
            our experienced team of craftsmen design and build durable
            furniture—on-time and with competitive pricing—that can withstand
            high traffic and challenging environments. From large scale guest
            rooms to small public space areas, you can rest assured that we will
            be here for you every step of the way. We custom-build sofas,
            chairs, ottomans, headboards, benches, booths, banquettes, and your
            creations to your specifications, delivering on budget and on
            schedule.
          </p>
        </motion.div>
      </div>
    </>
  );
}
