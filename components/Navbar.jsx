import { useEffect, useState } from "react";
import clsx from "clsx";

const Navbar = () => {
  const navItems = ["Home", "About", "Skills", "Contact"];
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight/2
      const current = navItems.find((section)=>{
        const element = document.getElementById(section.toLowerCase())
        if (!element) {
          return false
        }
        const {offsetTop,offsetHeight} = element
        return scrollPosition>=offsetTop && scrollPosition < offsetTop + offsetHeight
      })
      if (current && current != activeSection) {
        setActiveSection(current)
      }
    }

    window.addEventListener("scroll",handleScroll)
  
    return () => {
      window.removeEventListener("scroll",handleScroll)
    }
  }, [activeSection,navItems])
  

  return (
    <nav className="sticky top-0 bg-white w-full min-h-16 flex items-center justify-between px-14 shadow">
      <div className="text-2xl font-semibold">Portfolio</div>
      <div className="flex gap-10">
        {navItems.map((navItem) => (
          <div className={clsx("mx-2 font-medium",{
            "relative after:block after:h-[2px] after:w-3/4 after:bg-blue-500 after:absolute after:left-[12.5%] after:bottom-0"
            :activeSection == navItem
          })} key={navItem}>
            <a href={`#${navItem.toLowerCase()}`}>{navItem}</a>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
