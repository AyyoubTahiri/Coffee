import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/website/coffee_logo.png";
import { FaCoffee } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Stock",
    link: "/gest/stock",
  },
  {
    id: 2,
    name: "Menu",
    link: "/menu",
  },
  {
    id: 3,
    name: "About",
    link: "/about",
  },
  {
    id: 4,
    name: "Contact",
    link: "/contact",
  },
];

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar bg-gradient-to-b from-secondary to-secondary/90 shadow-md bg-gray-900 text-white h-full fixed top-0 left-0 bottom-0">
      <div className="logo-section p-4 flex flex-col items-center">
        <img src={Logo} alt="Logo" className="w-20 mb-4" />
        <h1 className="font-bold text-2xl tracking-wider">CafeBlack</h1>
      </div>
      <ul className="menu-list">
        {Menu.map((menu) => (
          <li key={menu.id} className="text-xl my-2">
            <a
              href={menu.link}
              className="block py-2 px-4 text-white/70 hover:text-white duration-200"
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
