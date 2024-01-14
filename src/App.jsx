import { Hero, Navbar } from "./components";
import styles from "./style";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div >
      <div >
        <Hero />
      </div>
    </div>
    <div className={`${styles.flexCenter} w-full`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>
  
  </div>
);

export default App;
