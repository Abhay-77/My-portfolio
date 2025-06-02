const Navbar = () => {
  const navItems = ["Home", "About", "Skills", "Contact"];
  return (
    <nav className="relative w-full min-h-16 flex items-center justify-between px-14 shadow">
      <div className="text-2xl font-semibold">Portfolio</div>
      <div className="flex gap-10">
        {navItems.map((navItem) => (
          <div className="mx-2 font-medium">
            <a href={`#${navItem.toLowerCase()}`}>{navItem}</a>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
