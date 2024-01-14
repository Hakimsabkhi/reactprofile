import { navLinks } from "../constants";
import styles from "../style";

const Navbar = () => {
  return(
  <nav className="fixed right-10 top-1/3 flex flex-col">
    <ul className="p-2" href="#home"> 
    {navLinks.map((nav)=>(
      <li key={nav.id} className={`${styles.NavIconStyle}`}>
        <a className={`${nav.IconName}`}>{nav.IconName}</a>
      </li>
    ))}
    </ul>
  </nav>
);
  }
export default Navbar;
