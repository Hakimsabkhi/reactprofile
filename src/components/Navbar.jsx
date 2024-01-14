import { navLinks } from "../constants";
import styles from "../style";

const Navbar = () => {
  return(
  <nav className="fixed right-14 top-1/3 flex flex-col">
    <ul> 
    {navLinks.map((nav)=>(
      <li key={nav.id} className={`${styles.NavIconStyle} my-5`}>
        <a href= {`#${nav.id}`} className={`text-white text-xl w-14 h-14 flex justify-center`}><i className={`${nav.IconName} my-auto`}></i></a>
      </li>
    ))}
    </ul>
  </nav>
);
  }
export default Navbar;
