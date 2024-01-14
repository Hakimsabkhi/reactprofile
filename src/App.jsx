import { Hero } from "./components";
import styles from "./style";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`${styles.flexCenter} w-full`}>
      <div className={`${styles.boxWidth}`}>
        <div>hello</div>
      </div>
    </div>
    <div className={`${styles.flexCenter} w-full`}>
      <div className={`${styles.boxWidth}`}>
        <div>hello</div>
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
