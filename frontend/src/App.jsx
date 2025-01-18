import sliderImages from "./data/sliderImages";
import ImageSlider from "./components/ImageSlider";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Header />
      <ImageSlider>
        {sliderImages.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </ImageSlider>
    </div>
  );
}
