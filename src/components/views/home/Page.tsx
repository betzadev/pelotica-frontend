import Image from 'next/image';
import darklogo from '@/img/darklogo.svg';
import homebg from '@/img/homebg.jpg'

export default function Page() {
  return (
    <div className="contenedor">
    <Image src={homebg} alt="Imagen de fondo" className="imagen-fondo"/>
    <Image src={darklogo} alt="Logo" className="logo"/>
  </div>
  );
}