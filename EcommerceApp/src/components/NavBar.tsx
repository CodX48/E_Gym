const NavBar = () => {
  return (
    <div className="gym-text flex justify-between items-center px-10 p-3 text-neutral-800 shadow-lg">
      {/* Logo */}
      <h1 className="text-3xl tracking-widest">SAMOKA</h1>

      {/* Navigation Links */}
      <div className="hidden md:flex justify-between items-center gap-8">
        <p className="hover:text-pink-900 cursor-pointer transition-colors">Home</p>
        <p className="hover:text-pink-900 cursor-pointer transition-colors">Programs</p>
        <p className="hover:text-pink-900 cursor-pointer transition-colors">Join Us</p>
        <p className="hover:text-pink-900 cursor-pointer transition-colors">Contact Us</p>
      </div>

      {/* Subscribe Button */}
      <button className="bg-pink-900 transition-colors text-white px-6 py-2 rounded-sm font-bold cursor-pointer">
        Subscribe
      </button>
    </div>
  );
};

export { NavBar };
