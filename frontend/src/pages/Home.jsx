import ImageSlider from "../components/ImageSlider";
import sliderImages from "../data/sliderImages";
import Image from "../components/Image";
export default function HomePage() {
  return (
    <>
      <ImageSlider>
        {sliderImages.map((image, index) => {
          console.log(index);
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
      <div className="home-about">
        Dobrodošli u [Naziv kompanije], gde se strast prema dizajnu i vrhunskoj
        izradi spaja kako bismo stvorili nameštaj koji inspiriše i unapređuje
        vaš prostor. Specijalizovani smo za izradu visokokvalitetnih kuhinja po
        meri, prilagođenih vašem ukusu, stilu i potrebama. Sa pažnjom prema
        svakom detalju i korišćenjem najkvalitetnijih materijala, naš cilj je da
        svaki komad nameštaja bude savršen spoj funkcionalnosti, estetike i
        trajnosti. Bez obzira na to da li ste u potrazi za modernim
        minimalističkim rešenjima ili klasičnim, toplim dizajnom, mi ćemo se
        pobrinuti da vaša vizija postane stvarnost.
      </div>
    </>
  );
}
