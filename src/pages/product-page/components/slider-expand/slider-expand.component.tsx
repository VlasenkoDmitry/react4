import Slider from "react-slick";
import "./slider-expand.css";
import { FC } from "react";
import { SliderExpandProps } from "./slider-expand.types";

const SliderExpand: FC<SliderExpandProps> = () => {
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
};

export default SliderExpand;
