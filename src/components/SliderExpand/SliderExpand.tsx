import Slider from "react-slick";
// import 'https://react-slick.neostack.com/assets/css/styles.6ce6876c.css';
// import "slick-carousel/slick/slick.css";

// import "slick-carousel/slick/slick-theme.css";

import "./SliderExpand.css";

function SliderExpand() {
  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <img src={`../../public/Picture (${i + 1}).jpg`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={"../../public/Picture (1).jpg"} />
        </div>
        <div>
          <img src={"../../public/Picture (2).jpg"} />
        </div>
        <div>
          <img src={"../../public/Picture (3).jpg"} />
        </div>
        <div>
          <img src={"../../public/Picture (4).jpg"} />
        </div>
        <div>
          <img src={"../../public/Picture (5).jpg"} />
        </div>
        <div>
          <img src={"../../public/Picture (6).jpg"} />
        </div>
      </Slider>
    </div>
  );
}

export default SliderExpand;
