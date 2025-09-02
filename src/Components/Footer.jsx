
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
       
        <div>
       <h2 className="font-allura text-2xl sm:text-4xl font-bold italic">
              TrendHive
            </h2>
          <p className="mt-3 text-sm text-gray-400">
            Your one-stop destination for modern ethnic fashion.  
            Shop with style and comfort.
          </p>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/men" className="hover:text-white">Men</a></li>
            <li><a href="/women" className="hover:text-white">Women</a></li>
            <li><a href="/kids" className="hover:text-white">Kids</a></li>
            <li><a href="/sale" className="hover:text-white">Sale</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="/returns" className="hover:text-white">Returns</a></li>
            <li><a href="/faq" className="hover:text-white">FAQs</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            
            <a href="" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
            <a href="https://github.com/Shreekant-code" className="hover:text-gray-400"><FaGithub /></a>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        <p>
  Developed by{" "}
  <a
    href="https://my-portfolio-eosin-omega-62.vercel.app/" 
    target="_blank"
    rel="noopener noreferrer"
    className="font-allura text-2xl sm:text-4xl font-bold italic hover:text-blue-400 transition-colors"
  >
    Shreekant Yadav
  </a>
</p>

        </div>
      </div>
    </footer>
  );
};
