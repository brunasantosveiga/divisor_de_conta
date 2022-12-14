import styles from "./styles.module.css";
import { Registration } from "./components/registration/Registration.js";

import AppProvider from "./contexts/appContext";

function App() {
  return (
    <AppProvider>
      <div className={styles.container}>
        <h1>Divisor de conta de restaurante</h1>
        <Registration />
      </div>
    </AppProvider>
  );
}

export default App;
