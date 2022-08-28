import styles from "./styles.module.css";
import { Registration } from "./components/registration/Registration.js";

function App() {
  return (
    <div className={styles.container}>
      <h1>Divisor de conta de restaurante</h1>
      <Registration />
    </div>
  );
}
export default App;
