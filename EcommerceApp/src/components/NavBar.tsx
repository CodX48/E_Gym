const NavBar = () => {
  return (
    <div className="relative gym-text flex justify-between items-center px-10 p-5 text-zinc-50 ">
      {/* Logo */}
      <h1 className="text-4xl tracking-widest">SAMOKA.</h1>

      {/* Navigation Links */}
      <div className="hidden md:flex justify-between items-center gap-8">
        <p className="hover:text-pink-600 cursor-pointer transition-colors">Home</p>
        <p className="hover:text-pink-600 cursor-pointer transition-colors"><a href="#PROGRAMS">Programs</a></p>
        <p className="hover:text-pink-600 cursor-pointer transition-colors">Join Us</p>
        <p className="hover:text-pink-600 cursor-pointer transition-colors">Contact Us</p>
      </div>

      {/* Subscribe Button */}
      <button className="bg-pink-600 transition-colors text-white px-6 py-2 rounded-sm font-bold cursor-pointer hover:bg-pink-700">
        Subscribe
      </button>
    </div>
  );
};

export { NavBar };
