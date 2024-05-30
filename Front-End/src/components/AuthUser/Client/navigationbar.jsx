
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/website/coffee_logo.png";
import { FaCoffee } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/Client/Home",
  },
  {
    id: 2,
    name: "Menu",
    link: "/Client/Menu",
  },
  {
    id: 3,
    name: "Services",
    link: "/Client/Service",
  },
  
  {
    id: 5,
    name: "Special",
    link: "/Client/special",
  },

 
];
const NavigationBar = () => {
  const navigate=useNavigate()
  return (
    <div>
      <div className="bg-gradient-to-r from-secondary to-secondary/90 shadow-md bg-gray-900 text-white">
        <div className="container py-2">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div data-aos="fade-down"  data-aos-once="true">
              <a
                href="#"
                className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
              >
                <img src={Logo} style={{marginBottom:'25px'}} alt="Logo" className="w-14" />
                CafeBlack
              </a>
            </div>

            {/* Link section */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="flex justify-between items-center gap-4"
            >
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
