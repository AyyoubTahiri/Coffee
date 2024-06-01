
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Make sure to import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Slick theme CSS for default styling

const TestimonialData = [
  {
    id: 1,
    name: "Dilshad",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Sabir ali",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Dipankar kumar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4, // Corrected the ID sequence
    name: "Satya Narayan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* Header section */}
        <div className="mb-10">
          <h1 className="text-center text-4xl font-bold" data-aos="fade-up">
            Testimonials
          </h1>
        </div>

        {/* Testimonial cards */}
        <Slider {...settings}>
          {TestimonialData.map((data) => (
            <div key={data.id} className="my-6 px-4"> {/* Moved 'key' prop here and added padding for spacing */}
              <div className="flex flex-col gap-4 shadow-lg py-8 px-6 rounded-xl bg-primary/10 relative">
                <div className="mb-4 flex justify-center">
                  <img src={data.img} alt={data.name} className="rounded-full w-20 h-20" />
                </div>
                {/* Content section */}
                <div className="text-center">
                  <p className="text-xs text-gray-500">{data.text}</p>
                  <h1 className="text-xl font-bold mt-4">{data.name}</h1>
                </div>
                <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                  ,,
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
