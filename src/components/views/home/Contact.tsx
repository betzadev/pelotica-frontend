import styles from '@/css/Contact.module.css';


export default function Contact() {
  return (
    <div className={styles.contact}>
      <h1 className={styles.title}>CONTACTO</h1>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" className={styles.textarea}></textarea>
        </div>
        <button type="submit" className={styles.button}>Enviar</button>
      </form>
    </div>
  );
};

