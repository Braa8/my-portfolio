'use client';
import Image from "next/image";
import LottieLogo from "./Logo";
import Mood from "./Mood";
import { useState } from "react";
import emailjs from "emailjs-com";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";



export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_cmb7h5u",     // ← استبدله بمعرف الخدمة
      "template_uicl8qb",    // ← استبدله بمعرف القالب
      formData,
      "OQOEDYzgovUBv4HDB"      // ← استبدله بالمفتاح العام
    ).then(
      () => {
        alert(" Done Successfully 😁👍");
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        console.error(error);
        alert("Something went wrong 😢 , Please check your email and other inputs ❤️ ");
      }
    );
  };

  return (
    <>
      <nav className="flex items-center justify-between p-0.5 shadow-lg bg-indigo-950">
        <div className="flex-1 justify-items-start hover:cursor-pointer">
          <LottieLogo />
        </div>

        <ul className="flex-1 flex justify-center gap-6 text-lg ml-60 container mx-auto">
          <li className="List" ><a href="/">Home</a></li>
          <li className="List" ><a href="/myWork">My Work</a></li>
        </ul>

        <div className="flex justify-between p-2 ml-80 bg-amber-50 w-auto border rounded-2xl container mx-auto hover:cursor-grab hover:bg-gray-400">
          <Mood />
        </div>

       <div className="flex-1 flex justify-end p-2 ">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button
            onClick={() => setOpen(true)}
            className="bg-neutral-50 border-2 rounded-full box-border hover:bg-gray-400 text-blue-500 px-6 py-2 hover:cursor-pointer transition duration-1000 flex items-center gap-2"
          >
            Contact
            <Image src="/ContactIcon.png" width={20} height={20} alt="contact" />
          </button>
        </DialogTrigger>

        <DialogContent className="w-full max-w-5xl p-8 rounded-xl bg-gray-400">
          <DialogHeader>
            <DialogTitle>
              <div className="flex justify-center items-center">
                <h3 className="font-extrabold text-2xl text-black font-serif">Contact</h3>
              </div>
            </DialogTitle>
          </DialogHeader>

          <div className="flex justify-between">

            <div className="border border-gray-100 border-l-0 border-t-0 border-b-0 border-solid m-4 p-8 w-md h-100 flex items-center justify-center">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-2 text-lg text-black font-serif">
                  <FaEnvelope />
                  <a href="mailto:braaalshoumary5@gmail.com" target="_blank" rel="noopener noreferrer">
                    Gmail
                  </a>
                </li>
                <li className="flex items-center gap-2 text-lg text-black font-serif">
                  <FaGithub /><a target="_blank" href="https://github.com/Braa8">Github</a>
                </li>
                <li className="flex items-center gap-2 text-lg text-black font-serif">
                  <FaLinkedin /><a target="_blank" href="https://linkedin.com/in/braa-alshoumary">Linkedin</a>
                </li>
              </ul>
            </div>

            <div className="m-4 p-8 w-md">
              <header className="flex justify-center items-center text-2xl font-serif font-bold mb-2 text-rose-950">Let a comment</header>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white text-black p-2 m-2 rounded-lg"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white text-black p-2 m-2 rounded-lg"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your comment"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white text-black p-2 m-2 h-20 rounded-lg"
                  required
                />
                <button
                  type="submit"
                  className="rounded-xl bg-blue-500 hover:bg-blue-600 hover:scale-95 hover:cursor-pointer p-2 m-2"
                >
                  Send
                </button>
              </form>
            </div>
            
          </div>
        </DialogContent>
      </Dialog>
    </div>
      </nav>
    </>
  );
}
