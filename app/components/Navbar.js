const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-green-500 via-teal-600 to-blue-500 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
            DOA HARIANKU!
          </h1>
          <p className="text-sm text-green-200 mt-1">Inspirasi Doa Untuk Setiap Hari</p>
        </div>
        <div className="flex space-x-4">
          <a
            href="/"
            className="text-white text-lg hover:text-green-300 transition"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-white text-lg hover:text-green-300 transition"
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
