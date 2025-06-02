import React from "react";
import Navbar from "../components/Navbar";
import { LuGithub } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const App = () => {
  return (
    <>
      <Navbar />
      <section
        id="home"
        className="flex p-8 min-h-[calc(100vh-4rem)] items-center justify-evenly 
      bg-gray-50"
      >
        <div className="m-6 rounded-2xl bg-white p-10 gap-6 flex flex-col">
          <p className="text-4xl">
            Hi,
            <br />
            I'm Abhay Murali M
          </p>
          <div className="flex w-full gap-4">
            <a href="https://github.com/Abhay-77">
              <LuGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/abhay-murali-m-9a61b9293">
              <CiLinkedin size={30} />
            </a>
            <a href="https://www.instagram.com/abhay72?igsh=NHRmd242c2hvcm9q">
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
        <img
          src="/photo3.jpg"
          className="m-6 rounded-full size-72"
          alt="photo"
        />
      </section>
      {/* <section className="bg-yellow-300 min-h-[80vh]">
      </section> */}
    </>
  );
};

export default App;
