import Head from "next/head";
import Navbar from "@/components/layout/Header";
import About from "@/components/views/home/About"
import AboutColumn from "@/components/views/home/AboutColumn"
import Footer from "@/components/layout/Footer"

import { roboto, poppins} from '@/css/fonts'

export default function Nosotros() {
  return (
    <>
      <div  className={`${poppins.className} antialiased`}>
      <Head>
        <title>Academia Pelotica</title>
        <meta name="description" content="Academia de beisbol Pelotica" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/src/img/lightlogo.svg" />
      </Head>
      <Navbar />
      <About />
      <AboutColumn/>
      <Footer/>
      </div>
    </>
  );
}
