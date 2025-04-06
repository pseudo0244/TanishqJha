import { FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Top Pink Border */}
      <div className="h-[5px] w-full bg-[#F3E5DC]" />

      {/* Footer Content */}
      <div className="bg-white w-full flex flex-col md:flex-row justify-between items-center px-10 py-6">
        {/* Left Nav Links */}
        <div className="flex gap-10 text-black text-[16px] tracking-[0.2em] font-light uppercase">
          <a href="#" className="hover:underline">About Me</a>
          <a href="#" className="hover:underline">Work With Me</a>
          <a href="#" className="hover:underline">Contact Me</a>
        </div>

        {/* Right Social Icons */}
        <div className="flex gap-5 mt-4 md:mt-0">
          <a href="#" className="text-[#3E2F2F] text-[28px]">
            <FaLinkedinIn />
          </a>
          <a href="#" className="text-[#3E2F2F] text-[30px]">
            <FiInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
