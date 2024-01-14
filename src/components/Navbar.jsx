import { navLinks } from "../constants";
import styles from "../style";

const Navbar = () => {
  return(
  <nav className="fixed right-14 top-1/3 flex flex-col">
    <ul> 
    {navLinks.map((nav)=>(
      <li key={nav.id} className={`${styles.NavIconStyle} my-5`}>
        <a className={`${nav.IconName} text-white`}></a>
      </li>
    ))}
    </ul>
  </nav>
);
  }
export default Navbar;
