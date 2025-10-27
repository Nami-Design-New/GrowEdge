// CareerCard.jsx
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router";

export default function CareerCard({ 
  title, 
  description, 
  tag, 
  tagColor, 
  details, 
  list, 
  buttonText, 
  navigateTo, 
  images 
}) {
  const navigate = useNavigate();

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="card">
      <div className="image-slider">
        <Slider {...sliderSettings}>
          {images.map((src, i) => (
            <img key={i} src={src} alt={`${title} ${i + 1}`} />
          ))}
        </Slider>
      </div>

      <div className={`tag ${tagColor}`}>{tag}</div>
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="details">
        <p><strong>DURATION:</strong> {details.duration}</p>
        <p><strong>INVESTMENT:</strong> {details.investment}</p>
      </div>

      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <button className="btn" onClick={() => navigate(navigateTo)}>
        {buttonText}
      </button>
    </div>
  );
}
