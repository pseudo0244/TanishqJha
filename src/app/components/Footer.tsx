import { FaLinkedinIn } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"

export default function Footer() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center pt-12">
        <p className="tracking-[0.2em] text-black text-[25px] uppercase">Connect with me on Instagram</p>
        <p className="tracking-[0.2em] text-black text-[25px] uppercase mt-2">EXCITED TO SHARE THIS JOURNEY!</p>
        <br />
      </div>

      {/* Instagram Section with Horizontal Split Background */}
      <div className="relative w-full py-12 px-4 md:px-20 overflow-hidden">
        {/* Horizontal Split Background */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="w-full h-1/2 bg-white" />
          <div className="w-full h-1/2 bg-[#F3E5DC]" />
        </div>

        {/* Instagram Iframes */}
        <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-8">
          <iframe
            src="https://www.instagram.com/p/DDKBI2BSpGj/embed"
            width="320"
            height="400"
            frameBorder="0"
            className="rounded-md"
            allowTransparency={true}
          ></iframe>

          <iframe
            src="https://www.instagram.com/p/DKzQE-wzc4t/embed"
            width="320"
            height="400"
            frameBorder="0"
            className="rounded-md"
            allowTransparency={true}
          ></iframe>

          <iframe
            src="https://www.instagram.com/p/DKuGfHczc-6/embed"
            width="320"
            height="400"
            frameBorder="0"
            className="rounded-md"
            allowTransparency={true}
          ></iframe>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full">
        {/* Top Border */}
        <div className="h-[5px] w-full bg-[#F3E5DC]" />

        {/* Footer Content */}
        <div className="bg-white w-full flex flex-col md:flex-row justify-between items-center px-10 py-6">
          {/* Left Nav Links */}
          <div className="flex gap-10 text-black text-[16px] tracking-[0.2em] font-light uppercase">
            <a href="#about" className="hover:underline">About Me</a>
            <a href="https://calendly.com/jhatanishq2504/30min" className="hover:underline">Work With Me</a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfSvqOwRlMADSTAiAWFsuGYmOh1rjECxErFBjeyqkzEDtHNiA/viewform?usp=header"
              className="hover:underline"
            >
              Contact Me
            </a>
          </div>

          {/* Right Social Icons */}
          <div className="flex gap-5 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/in/tanishq-jha-6a2275312/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3E2F2F] text-[28px]"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/tanishqjha.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3E2F2F] text-[30px]"
            >
              <FiInstagram />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
