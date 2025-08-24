import { FaDiscord,  FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="w-screen bg-black py-4 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4">
        <p className=" cursor-pointer text-center text-sm font-light hover:text-orange-300">
          ANIME INFO
        </p>

        <div className="flex justify-center gap-4 ">
          <a
          
           
            rel="noopener noreferrer"
            className="text-white transition-colors duration-500 ease-in-out hover:text-orange-300"  >
            <FaDiscord />
          </a>
          <a
           
            
            rel="noopener noreferrer"
            className="text-white transition-colors duration-500 ease-in-out hover:text-orange-300" >
            <FaGithub />
          </a>
          <a
          
            
            rel="noopener noreferrer"
            className="text-white transition-colors duration-500 ease-in-out hover:text-orange-300" >
            <FaYoutube />
          </a>
          <a
           
           
            rel="noopener noreferrer"
            className="text-white transition-colors duration-500 ease-in-out hover:text-orange-300" >
            <FaLinkedin />
          </a>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
