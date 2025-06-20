import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { LuGithub } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import clsx from "clsx";
import FadeInSection from "./FadeInSection";

const App = () => {
  const skills = [
    "Web development",
    "Machine learning",
    "Java programming",
    "Python programming",
  ];

  const [result, setResult] = useState("");

  // useEffect(() => {
  //   const addAnimation = () => {
  //     const items = document.querySelectorAll("view-animate")

  //   }

  //   return () => {
  //     second
  //   }
  // }, [third])

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_PUBLIC_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent.");
      event.target.reset();
    } else {
      setResult("Error sending message.Try again!");
    }
  };

  const links = [
    { link: "https://github.com/Abhay-77", icon: LuGithub },
    {
      link: "https://www.linkedin.com/in/abhay-murali-m-9a61b9293",
      icon: CiLinkedin,
    },
    {
      link: "https://www.instagram.com/abhay72?igsh=NHRmd242c2hvcm9q",
      icon: FaInstagram,
    },
  ];

  return (
    <>
      <Navbar />
      <section
        id="home"
        className="flex p-8 min-h-[calc(100vh-4rem)] items-center justify-evenly 
      bg-gray-50"
      >
        <FadeInSection delay={0}>
          <div className="m-6 rounded-2xl bg-white p-10 gap-6 flex flex-col view-animate">
            <p className="text-4xl">
              Hi,
              <br />
              I'm Abhay Murali M
            </p>
            <div className="flex w-full gap-4">
              {links.map((i) => (
                <a href={i.link}>
                  <i.icon size={30} />
                </a>
              ))}
            </div>
          </div>
        </FadeInSection>
        <img
          src="/photo3.jpg"
          className="m-6 rounded-full size-72"
          alt="photo"
        />
      </section>
      <section
        id="about"
        className="min-h-[60vh] items-center p-12 gap-8 flex flex-col"
      >
        <h1
          className="font-bold text-3xl
        relative after:block after:h-[2px] after:w-3/4 after:bg-blue-500 after:absolute
        after:left-[12.5%] after:bottom-0"
        >
          About
        </h1>
        <div className="p-6 flex items-center justify-around">
          <img
            src="/photo3.jpg"
            className="m-6 rounded-full size-72"
            alt="photo"
          />
          <div className="w-1/2 gap-2 flex flex-col view-animate">
            <FadeInSection>
              <h2 className="font-semibold text-2xl">I'm Abhay</h2>
              <p>
                I'm a computer science major at model engineering college. I
                excel in web development and machine learning, and have solid
                foundations in python and java programming.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>
      <section
        id="skills"
        className="p-12 gap-8 flex items-center justify-evenly bg-gray-50"
      >
        <div className="">
          <FadeInSection>
            <h2 className="font-medium text-xl">
              I have a variety of skills.The most proficient ones are:
            </h2>
            <ul className="text-lg list-disc p-4">
              {skills.map((skill) => (
                <li className="" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </FadeInSection>
        </div>
        <img
          src="/skills_image.png"
          className="m-6 rounded-4xl size-96"
          alt=""
        />
      </section>
      <FadeInSection>
        <section id="contact" className="flex justify-center p-12">
          <form
            onSubmit={onSubmit}
            method="post"
            className="flex flex-col w-[30%] gap-4 items-center"
          >
            <h2
              className="relative after:block after:h-[2px] after:w-3/4 after:bg-blue-500
        after:absolute after:left-[12.5%] after:bottom-0 font-medium text-2xl m-4"
            >
              Contact
            </h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="p-2 rounded w-full border"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-2 rounded w-full border"
              required
            />
            <textarea
              placeholder="Message"
              name="message"
              className="p-2 rounded w-full border h-40"
              required
            />
            <span
              className={clsx("self-start", {
                "text-red-500": result.startsWith("Error"),
              })}
            >
              {result}
            </span>
            <button
              type="submit"
              className="bg-blue-500 px-6 py-2 rounded-lg self-start"
            >
              Send
            </button>
          </form>
        </section>
      </FadeInSection>
      <footer className="text-white bg-gray-900 flex flex-col items-center p-8 gap-4">
        <h1 className="font-medium text-2xl">Abhay Murali M</h1>
        <div className="flex p-2 gap-4">
          {links.map((i) => (
            <a href={i.link}>
              <i.icon size={30} color="white" />
            </a>
          ))}
        </div>
        <h2 className="text-lg">All rights reserved</h2>
      </footer>
    </>
  );
};

export default App;
