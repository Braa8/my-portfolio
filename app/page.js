'use client'
import LottieAnimation from "./components/HomeLottie";
import Navbar from "./components/Navbar";
import Image from "next/image";
import { motion } from 'framer-motion';
import Footer from "./components/Footer";

export default function Home() {
  function scroll () {
  const getDown = document.getElementById('bottom');
  if (getDown) {
    getDown.scrollIntoView({
      behavior:'smooth'
    });
  }
};
  return (
    <>
      <Navbar />
      <div className="sm:flex-col md:flex-row flex items-center justify-between "> 
      
      <Image 
      src='/Home.jpg'
      width={200}
      height={180}
      alt=""
      className="ml-20 border-2 border-solid rounded-full "
      />
        <div className="mx-4 w-dvw mb-40 mt-50 "> 
          <h1 className="text-shadow-lg text-6xl ">Braa Al-Shoumary</h1>
          <h2 className="text-xl mt-4 ml-2">Front-End Developer</h2>
        </div>
      <LottieAnimation />
      </div>

        <div className="flex justify-center items-center">
      <a className=" p-4 ">
        <h3 id="bottom" onClick={scroll} className="text-lg mx-auto hover:cursor-pointer hover:text-neutral-500 font-serif font-bold"> About Me »» </h3>
        </a>
        </div>


       <div style={{ height: '100vh' }}>
      <motion.div
         initial={{ opacity: 0, x: -100 }}       // يبدأ خارج الشاشة من اليسار
        whileInView={{ opacity: 1, x: 0 }}       // يتحرك إلى مكانه الطبيعي
        transition={{ duration: 1.5, ease: 'easeOut' }} // حركة سلسة
        viewport={{ amount: 0.5 }}
        style={{
         fontFamily:'outfit',
          padding: '2rem',
          textAlign: 'center',
          marginTop:'20px',
          marginRight:'90px'
        }}
      >
        <div className="border border-solid border-blue-300 p-20 rounded-full">
        <h3 className="text-6xl"> About Me </h3>
        
        <p className="mt-20 text-lg"> " I am a computer and automation engineer, and the constant question I ask myself is: how can I turn code into a human experience?‍
‍
This is where my journey into the world of Front-End began. It's not enough for a website to just work; the user must feel that it was designed for them.‍
‍
I offer web design services focused on providing a professional user experience. I don’t just design an interface; I work on building a complete experience that reflects your project’s identity and supports its goals. "
<br /> <br />
Download my CV : </p>

        <div className="flex justify-center items-center gap-20 m-8">
          <a href="/ATS-CV-Arabic.pdf" download>
          <button className="bg-blue-500 text-white rounded-2xl p-4 hover:scale-90 hover:cursor-pointer hover:bg-blue-400"> Arabic CV</button>
          </a>
          <a href="/ATS-CV-English.pdf" download>
          <button className="bg-blue-500 text-white rounded-2xl p-4 hover:scale-90 hover:cursor-pointer hover:bg-blue-400">English CV</button>
          </a>
        </div>
        

        </div>

      </motion.div>
    </div>
    <Footer />
    </>
  );
}
