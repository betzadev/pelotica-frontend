import styles from '@/css/Login.module.css'; // Import CSS module
import { FaUserCircle } from "react-icons/fa";

export default function Login() {
  return (
    <>
        <div className={styles.loginPage}>
          <div className={styles.form}>
            <form className={styles.loginForm}>
              <FaUserCircle className={styles.loginIcon}/>
              <input type="text" placeholder="Correo" className={styles.input} />
              <input type="password" placeholder="Contraseña" className={styles.input} />
              <button className={styles.button}>Ingresar</button>
            </form>
          </div>
        </div>
    </>
  );
}