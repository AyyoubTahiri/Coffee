import Espresso from '../../assets/imagesEspresso.png';
import Americano  from '../../assets/imagesAmericano.png';
import Cappuccino from '../../assets/imagesCappuccino.png';
import Flatwhite from '../../assets/imagesFlatwhite.png';
import Macchiato from "../../assets/imagesMocchaito.png";
import Ristretto from "../../assets/imagesRistretto.png";
import ViennaCoffee from "../../assets/imagesVienna.png";

import Latte from "../../assets/imagesLatte.png";
import AuLait from "../../assets/imagesAuLait.png";  
import Bombon from "../../assets/imagesBombon.png";
import Creme  from "../../assets/imagesCafeCreme.png";
import Mocha from "../../assets/imagesMocha.png";
import icedB from "../../assets/imagesicedB.png";
import ColdBrewB from "../../assets/imagesColdBrewB.png";
import latteB from "../../assets/imageslatteB.png";
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';


const ServicesData = [ 
  {
    id: 1,
    img: Espresso,
    name: "Espresso",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Americano,
    name: "Americano",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    aosDelay: "300",
  },
  {
    id: 3,
    img:Cappuccino,
    name: "Cappuccino",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    aosDelay: "500",
  },
  {
    id: 4,
    img:Flatwhite ,
    name: "Flatwhite ",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    aosDelay: "500",
  },
  {
    id: 5,
    img:Mocha,
    name: "Mocha",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    aosDelay: "500",
  },
  {
    id: 6,
    img:Macchiato,
    name: "Macchiato",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    aosDelay: "500",
  },
  {
    id: 7,
    img:Ristretto,
    name: "Ristretto",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    aosDelay: "500",
  },
  {
    id: 8,
    img:ViennaCoffee,
    name: "ViennaCoffee",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    aosDelay: "500",
  },
  {
    id: 9,
    img:AuLait,
    name: "CaféauLait",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    aosDelay: "500",
  },
  {
    id: 10,
    img:Latte,
    name: "Latte",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    aosDelay: "500",
  },
  {
    id: 11,
    img:AuLait,
    name: "AuLait",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    aosDelay: "500",
  },
  {
    id: 12,
    img:Bombon,
    name: "Bombon",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    aosDelay: "500",
  },
  {
    id: 13,
    img:Creme,
    name: "Creme",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    aosDelay: "500",
  },
  {
    id: 14,
    img:icedB,
    name: "icedB",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    aosDelay: "500",
  },
  {
    id: 15,
    img:ColdBrewB,
    name: "ColdBrewB",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    aosDelay: "500",
  },
  {
    id: 16,
    img:latteB,
    name: "latteB",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    aosDelay: "500",
  },
  {
    id: 17,
    img:Bombon,
    name: "Bombon",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    aosDelay: "500",
  },
  
];

const Services = () => {
  return (
    <div>
   
      <span id="services"></span>
      
      <div className="py-10">
        <div className="container">
          {/* Heading section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold text-gray-800">
              Best Coffee For You
            </h1>
          </div>

          {/* Services Card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div 
                key={service.id} // Added a 'key' prop here for list items
                data-aos="fade-up" 
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]" // Corrected 'duration-high' to 'duration-300' and fixed 'max-w-[300px]' issue
              >
                <div className=" h-[122px]" id="imgCafe">
                  <img
                    src={service.img}
                    alt={service.name}
                   
                    // Changed 'alt' attribute to use service.name for better accessibility
                    className="  mt-12 max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Services;
