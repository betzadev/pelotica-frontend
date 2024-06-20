import React from 'react';
import styles from '@/css/Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.copyright}>
          <p>&copy; {currentYear} Academia Pelotica.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
