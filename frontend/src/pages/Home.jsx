import ImageSlider from "../components/ImageSlider";
import sliderImages from "../data/sliderImages";
export default function HomePage() {
  return (
    <>
      <ImageSlider>
        {sliderImages.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </ImageSlider>
    </>
  );
}
