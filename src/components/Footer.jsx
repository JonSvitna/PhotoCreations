const Footer = () => {
  return (
    <footer className="bg-luxury-dark text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-playfair text-2xl tracking-wider">Photo Creations</h3>
            <p className="text-gray-400 text-sm mt-2">Editorial Photography Since 2015</p>
          </div>

          <div className="flex space-x-8 text-sm">
            <a href="#home" className="hover:text-luxury-gold transition-colors">Home</a>
            <a href="#about" className="hover:text-luxury-gold transition-colors">About</a>
            <a href="#galleries" className="hover:text-luxury-gold transition-colors">Galleries</a>
            <a href="#info" className="hover:text-luxury-gold transition-colors">Info</a>
            <a href="#contact" className="hover:text-luxury-gold transition-colors">Contact</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Photo Creations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
