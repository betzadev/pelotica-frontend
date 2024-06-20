import Image from 'next/image';
import styles from '@/css/About.module.css'; // Import your CSS module
import aboutImg from '@/img/aboutImg.jpg'

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <Image src={aboutImg} alt="aboutImg" className={styles.img} />
      </div>
      <div className={styles.contentSection}>
        <h1 className={styles.title}>NOSOTROS</h1>
        <p className={styles.paragraph}>Somos una institucción de carácter deportivo, orientada al desarrollo integral de niños, adolescentes y adultos en la práctica del beisbol a nivel de prospectos.</p>
      </div>
    </div>
  );
};

