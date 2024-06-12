import React from "react";
import Slider from "react-slick";
import client01 from "../../assets/testimonial/01.png";
import client02 from "../../assets/testimonial/02.png";
import client03 from "../../assets/testimonial/03.png";
import client04 from "../../assets/testimonial/04.png";
const TestimonialSlider = () => {
  const testimonailDetails = [
    {
      id: 1,
      name: "Nattasha Mith",
      title: "Greenville, USA",
      img: client01,
      description:
        "Lorem ipsum is simply dummy text of the typesetting industry. Ipsum has been",
    },
    {
      id: 2,
      name: "Jessica White",
      title: "Oak Ridge, USA",
      img: client02,
      description:
        "Lorem ipsum is simply dummy text of the typesetting industry. Ipsum has been",
    },
    {
      id: 3,
      name: "Mike Davis",
      title: "Berlin, Germany",
      img: client03,
      description:
        "Lorem ipsum is simply dummy text of the typesetting industry. Ipsum has been",
    },
    {
      id: 4,
      name: "Olivia Wilson",
      title: "Blue Ridge, France",
      img: client04,
      description:
        "Lorem ipsum is simply dummy text of the typesetting industry. Ipsum has been",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-16 max-w-[1000px] m-auto">
      <h1 className="text-center text-4xl font-bold font-Serif text-primary ">
        What Clients Say
      </h1>
      <div className="my-16 mx-10 m-auto p-5 max-w-[1000px] bg-accent/40 pb-32 rounded-[3rem] ">
        <Slider {...settings}>
          {testimonailDetails.map((data) => {
            return (
              <div
                key={data.id}
                className="flex flex-col justify-center items-start gap-5 p-5 pb-12  rounded-2xl "
              >
                <div className="flex justify-start gap-3 mb-3">
                  <img
                    src={data.img}
                    alt="Client"
                    loading="lazy"
                    width={"60rem"}
                  />
                  <div className="flex flex-col justify-center items-start">
                    <h2 className=" text-primary font-bold text-[1.3rem] font-Serif">
                      {data.name}
                    </h2>
                    <p className="text-secondary">{data.title}</p>
                  </div>
                </div>
                <p className="text-secondary"> {data.description}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
