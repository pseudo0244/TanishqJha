"use client"

import { useRef } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProcessSection from "../components/process-section"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const ServicesPage = () => {
  return (
    <>
      <Header />

      {/* Redesigned Hero Section - More aesthetic without black background */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#f8f5f2] to-[#f0e9e4]"
      >
        {/* Background Image with reduced opacity */}
        <div className="absolute inset-0 w-full h-full z-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713799/service1_inaymw.png"
              alt="Bg1"
              width={1920}
              height={1080}
              className="w-full h-full object-cover opacity-30"
              priority
              onError={(e) => {
                ;(e.currentTarget as HTMLImageElement).style.display = "none"
              }}
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-16 z-10">
          <div className="max-w-5xl text-[#2D2D2D] text-left">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[40px] md:text-[50px] font-light leading-tight mb-6 font-['Poppins'] pt-16 md:pt-28"
            >
              RECLAIM YOUR TIME AND ENERGY WITH <br className="hidden md:block" />
              GROWTH-DRIVEN OBM AND VA SERVICES
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-[40px] md:text-[40px] font-light mb-4"
            >
              GO FROM…
            </motion.p>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-[35px] md:text-[35px] py-6 md:py-10 font-light mb-8"
            >
              OVERWHELMED BY ENDLESS TASKS, <br className="hidden md:block" />
              LOST LEADS, AND BURNOUT… <br />
              TO-
            </motion.p>
          </div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="md:absolute md:right-16 md:top-1/2 md:transform md:-translate-y-1/2 text-[#2D2D2D] mt-6 md:mt-0"
          >
            <p className="text-[30px] md:text-[35px] font-light">
              <span className="font-light uppercase">
                Streamlined operations, steady <br className="hidden md:block" />
                growth — without the chaos
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="w-full flex justify-center md:justify-start mt-16 md:mt-20"
          >
            <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSdUaQXeIheNXx6Z3TtMx8yQX-3FOefXzucMalGJgJ0HNiFtxA/viewform?usp=header"
  className="inline-block"  // Ensure the anchor is inline to match button behavior
>
  <button className="px-6 py-3 bg-[#D7D3BF] text-black font-semibold tracking-wide rounded-md shadow-md hover:bg-[#c8c4b0] transition-all transform hover:scale-105">
    LET&apos;S TALK
  </button>
</a>

          </motion.div>
        </div>
      </motion.section>

      <section className="relative w-full bg-white overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713803/service3_v8emjp.png"
            alt="Bg11"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content container */}
        <div className="relative z-10 flex flex-col md:flex-row max-w-6xl mx-auto p-6 md:p-16 items-center justify-center">
          {/* Left - Lady image */}
          <EntryAnimation className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744871204/WhatsApp_Image_2025-04-03_at_12.39.28_rlczdm.jpg"
                alt="Tanishq Testimonial"
                width={340}
                height={450}
                className="w-[300px] md:w-[340px] h-auto object-cover"
              />
            </div>
          </EntryAnimation>

          {/* Right - Text box */}
          <EntryAnimation className="w-full md:w-1/2 bg-white bg-opacity-95 rounded-xl shadow-xl p-6 md:p-10 text-black flex flex-col justify-between">
            <p className="text-md md:text-lg font-semibold mb-4">
              Tanishq was amazing as my Online Business Manager while I launched my Digital Product.
            </p>
            <p className="text-sm md:text-base mb-4">
              <strong>Tanishq</strong> really helped me with everything from managing my daily tasks to making sure our
              product launch went smoothly.
            </p>
            <p className="text-sm md:text-base mb-4">
              As a Coach who helps people create content, having Tanishq on board was a huge relief.
            </p>
            <p className="text-sm md:text-base mb-4">
              She took care of all the details and challenges, allowing me to focus on my first digital product and
              creating content. If you need someone to help you organise and grow your online business, I highly
              recommend Tanishq!
            </p>
            <p className="text-sm md:text-base font-semibold">Anmol Grover, Online Business Strategist</p>
          </EntryAnimation>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-between items-start px-6 md:px-20 py-14 font-serif text-[#141414]">
        <EntryAnimation className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-medium tracking-wide leading-snug font-['afacad']">
            YOUR TIME AND ENERGY ARE
            <br />
            <span className="block">MY TOP PRIORITIES</span>
          </h1>
          <p className="text-[#444] text-lg mt-4 mb-6 font-['poppins']">
            The Flexibility And Balance You Wished For Now Feel Just Out Of Reach
          </p>

          <h2 className="text-lg font-light mb-4 font-['poppins']">You Are Making Money. But Here&apos;s The Catch…</h2>

          <ul className="space-y-4 text-lg font-['poppins']">
            {[
              "You Create Business Plans, Yet Things Slip Through The Cracks Sometimes.",
              "You Want To Stay On Top Of Deadlines For Yourself And Your Team. But Keeping Up Can Be A Real Challenge.",
              "You're Getting Leads Daily. But Without Effective Systems And Processes, Many Opportunities Slip By.",
              "You Feel Drained By The Demands Of Posting On Social Media, Client Communication, Project Management, And All The Tedious Admin Tasks.",
              "You're Constantly Tied To Your Phone And Work. Taking Time Off Feels Nearly Impossible.",
              "You've Realised That Your Current Approach Is Not Sustainable.",
            ].map((text, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-[#141414] mr-2 mt-1">✔︎</span>
                <em className="text-[#141414]">{text}</em>
              </li>
            ))}
          </ul>
        </EntryAnimation>

        <EntryAnimation className="w-full md:w-1/3 mt-10 md:mt-0 flex flex-col items-center">
          <Image
            src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713800/service4_qhqdid.png"
            alt="Clock"
            width={500}
            height={400}
            className="rounded-md w-full h-auto object-contain"
          />
          <p className="italic text-2xl mt-4 text-left text-[#141414] font-['poppins'] font-semibold">
            IT DOESN&apos;T HAVE TO BE THIS
            <br />
            <span className="block">WAY….</span>
          </p>
        </EntryAnimation>
      </section>

      <section className="bg-white px-6 md:px-20 py-14 flex flex-col md:flex-row items-center justify-between font-sans text-[#141414]">
        <EntryAnimation className="w-full md:w-1/3 mb-10 md:mb-0">
          <Image
            src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713810/service6_vehgza.png"
            alt="Forest Path"
            width={600}
            height={450}
            className="w-full h-auto object-cover"
          />
        </EntryAnimation>

        <EntryAnimation className="w-full md:w-3/5 md:pl-12 text-left">
          <h1 className="text-2xl md:text-4xl font-extrabold uppercase leading-snug font-['afacad']">
            THE MOST EFFICIENT WAY TO ACHIEVE <br className="hidden md:block" />
            THIS IS BY PARTNERING WITH AN EXPERT <br className="hidden md:block" />
            TO STREAMLINE YOUR OPERATIONS
          </h1>

          <p className="text-[#777] tracking-wide mt-4 text-sm md:text-base uppercase font-['poppins']">
            This will align your goals with your business and personal <br className="hidden md:block" />
            life. Allowing you to work with more focus and clarity.
          </p>

          <p className="text-lg md:text-xl mt-6 leading-relaxed font-['poppins']">
            Think about how much time you&apos;d gain to focus on <br className="hidden md:block" />
            your true priorities. Letting an expert handle the <br className="hidden md:block" />
            day-to-day tasks that keep everything running <br className="hidden md:block" />
            smoothly.
          </p>
        </EntryAnimation>
      </section>

      {/* Services Section */}
      <section className="relative bg-white px-6 md:px-20 border-t-1 border-[#4A3733]"></section>

      {/* Services Section */}
      <section className="bg-white py px-6 md:px-20 text-center font-['Didot',serif] mt-20">
        {/* Top Text */}
        <EntryAnimation className="max-w-4xl mx-auto mb-20">
          <h2 className="text-[36px] md:text-[50px] leading-tight font-light tracking-wide uppercase text-black font-['afacad']">
            WANNA SCALE YOUR BUSINESS...
          </h2>
          <h2 className="text-[36px] md:text-[50px] leading-tight font-light tracking-wide uppercase text-black mt-2 font-['afacad']">
            WITHOUT THE <span className="font-bold">OVERLOAD</span> ON YOUR SHOULDERS?
          </h2>
          <p className="mt-8 text-[26px] tracking-wide text-[#2E2E2E] uppercase font-['poppins']">
            HERE&apos;S HOW WE CAN WORK TOGETHER
          </p>

          {/* Arrow */}
          <div className="mt-6">
            <span className="text-[36px] text-black select-none">↓</span>
          </div>
        </EntryAnimation>

        {/* Service 1 */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12 text-left">
          {/* Text Content */}
          <EntryAnimation className="md:w-2/3 flex gap-6">
            {/* Number */}
            <h3 className="text-[100px] font-light text-black leading-none">1</h3>

            {/* Description */}
            <div>
              <h4 className="text-[50px] font-normal uppercase text-black border-b border-black pb-1 mb-4 w-fit font-['afacad']">
                VIRTUAL ASSISTANT
              </h4>
              <p className="text-[26px] text-[#2E2E2E] leading-relaxed tracking-wide font-light font-['poppins']">
                YOU WANT A TRUSTED VIRTUAL ASSISTANT
                TO HANDLE YOUR ADMIN AND CLIENT COMMUNICATION, FREEING YOU FROM THE DAILY GRIND
                SO YOU CAN FOCUS ON WHAT YOU DO BEST.
              </p>

              <a href="#virtualassistant">
                <button className="mt-6 px-6 py-2 bg-[#4A3733] text-white tracking-widest text-[14px] uppercase rounded-sm font-semibold font-['poppins'] hover:bg-[#3a2a27] transition-all">
                  GET THE DETAILS
                </button>
              </a>
            </div>
          </EntryAnimation>

          {/* Image */}
          <EntryAnimation className="md:w-1/3 flex justify-center md:justify-end">
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713713/hero6_li2r1f.png"
              alt="Virtual Assistant"
              width={300}
              height={400}
              className="w-[260px] md:w-[300px] border-[6px] border-[#f4e9de]"
            />
          </EntryAnimation>
        </div>
      </section>

      {/* Service 2 */}
      <section className="bg-white px-6 md:px-20 py-20 font-['Didot',serif]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12 mb-20">
          {/* Image Left */}
          <EntryAnimation className="md:w-1/3 flex justify-center md:justify-right">
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713710/hero7_ol7jzy.png"
              alt="Online Business Manager"
              width={300}
              height={400}
              className="w-[260px] md:w-[300px] border-[6px] border-[#f4e9de]"
            />
          </EntryAnimation>

          {/* Text Right */}
          <EntryAnimation className="md:w-2/3 flex gap-6 text-left">
            {/* Number */}
            <h3 className="text-[100px] font-light text-black leading-none">2</h3>

            {/* Content */}
            <div>
              <h4 className="text-[50px] font-normal uppercase text-black border-b border-black pb-1 mb-4 w-fit font-['afacad']">
                ONLINE BUSINESS MANAGER
              </h4>
              <p className="text-[23px] text-[#2E2E2E] leading-relaxed tracking-wide font-light max-w-xl font-['poppins']">
                YOU WANT A BIG-PICTURE THINKER AND A DOER
                AS YOUR ONLINE BUSINESS MANAGER. THIS SUPPORT
                WILL KEEP EVERYTHING RUNNING SMOOTHLY, ALLOWING
                YOU TO FOCUS ON SCALING YOUR BUSINESS AND
                ACHIEVING YOUR BROADER GOALS.
              </p>

              <a href="#onlinebusinessmanager">
                <button className="mt-6 px-6 py-2 bg-[#4A3733] text-white tracking-widest text-[14px] uppercase rounded-sm font-semibold font-['poppins'] hover:bg-[#3a2a27] transition-all">
                  GET THE DETAILS
                </button>
              </a>
            </div>
          </EntryAnimation>
        </div>

        {/* Service 3 */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Text Left */}
          <EntryAnimation className="md:w-2/3 flex gap-6 text-left">
            {/* Number */}
            <h3 className="text-[100px] font-light text-black leading-none">3</h3>

            {/* Content */}
            <div>
              <h4 className="text-[50px] font-normal uppercase text-black border-b border-black pb-1 mb-4 w-fit font-['afacad']">
                60 MINUTE-STRATEGY CONSULTATION
              </h4>
              <p className="text-[25px] text-[#2E2E2E] leading-relaxed tracking-wide font-light max-w-xl font-['poppins']">
                YOU WANT A STRATEGIC 60-MINUTE CONSULTATION
                THAT PROVIDES TAILORED ADVICE, AND A ROADMAP FOR
                TAKING YOUR BUSINESS TO THE NEXT LEVEL.
              </p>

              <a href="#consultation">
                <button className="mt-6 px-6 py-2 bg-[#4A3733] text-white tracking-widest text-[14px] uppercase rounded-sm font-semibold font-['poppins'] hover:bg-[#3a2a27] transition-all">
                  GET THE DETAILS
                </button>
              </a>
            </div>
          </EntryAnimation>

          {/* Image Right */}
          <EntryAnimation className="md:w-1/3 flex justify-center md:justify-end">
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713723/hero8_toysbn.png"
              alt="60 Minute Strategy Call"
              width={300}
              height={400}
              className="w-[260px] md:w-[300px] border-[6px] border-[#f4e9de]"
            />
          </EntryAnimation>
        </div>
      </section>

      {/* Service 4 */}
      <section className="bg-white px-6 md:px-20 pb-16 font-['Didot',serif] border-b border-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Image Left */}
          <EntryAnimation className="md:w-1/3 flex justify-center md:justify-start">
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713714/hero9_fptahl.png"
              alt="Need Something Else"
              width={300}
              height={400}
              className="w-[260px] md:w-[350px] border-[6px] border-[#f4e9de]"
            />
          </EntryAnimation>

          {/* Text Right */}
          <EntryAnimation className="md:w-2/3 flex gap-6 text-left">
            {/* Number */}
            <h3 className="text-[100px] font-light text-black leading-none">4</h3>

            {/* Content */}
            <div>
              <h4 className="text-[50px] font-normal uppercase text-black border-b border-black pb-1 mb-4 w-fi font-['afacad']">
                NEED SOMETHING THAT ISN&apos;T LISTED?
              </h4>
              <p className="text-[23px] text-[#2E2E2E] leading-relaxed tracking-wide font-light max-w-xl font-['poppins']">
                YOU WANT A BIG-PICTURE THINKER AND A DOER
                AS YOUR ONLINE BUSINESS MANAGER. THIS SUPPORT
                WILL KEEP EVERYTHING RUNNING SMOOTHLY, ALLOWING YOU TO FOCUS ON SCALING YOUR BUSINESS AND
                ACHIEVING YOUR BROADER GOALS.
              </p>

              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdUaQXeIheNXx6Z3TtMx8yQX-3FOefXzucMalGJgJ0HNiFtxA/viewform?usp=header">
                <button className="mt-6 px-6 py-2 bg-[#4A3733] text-white tracking-widest text-[14px] uppercase rounded-sm font-semibold font-['poppins'] hover:bg-[#3a2a27] transition-all">
                  GET THE DETAILS
                </button>
              </a>
            </div>
          </EntryAnimation>
        </div>
      </section>

      <EntryAnimation className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 py-10">
        <h1 className="text-[40px] md:text-[50px] font-light text-black leading-none">ONGOING SUPPORT</h1>
      </EntryAnimation>

      {/* Rest of the sections... */}
      <section id="onlinebusinessmanager"className="bg-white px-6 md:px-20 py-16 flex flex-col md:flex-row items-start justify-between font-sans text-[#141414] gap-10">
        {/* Image */}
        <EntryAnimation className="w-full md:w-[42%]">
          <Image
            src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713810/service6_vehgza.png"
            alt="Support Forest Path"
            width={600}
            height={450}
            className="w-full h-auto object-cover"
          />
        </EntryAnimation>

        {/* Text Content */}
        <EntryAnimation className="w-full md:w-[55%] text-left">
          <h1 className="text-[26px] md:text-[45px] font-light uppercase inline-block pb-1 mb-4 font-['afacad'] underline">
            ONLINE BUSINESS MANAGER
          </h1>

          <p className="text-base md:text-xl mb-3 leading-relaxed font-['poppins']">
            You Want Dedicated Support As Your Operations Manager To Ensure
            <br className="hidden md:block" />
            Your Business Runs Smoothly And Your Team Performs Seamlessly.
          </p>

          <p className="font-extrabold mb-6 font-['poppins'] text-xl">
            Whether You&apos;re Scaling Your Business Or Slowing Down To Take A Break And Relax.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-4 text-sm md:text-base">
            <li className="flex items-start gap-2">
              <span className="text-lg">✔</span>
              Monthly Strategy And Planning Sessions: Gain Clarity And Stay On Track With Monthly Sessions That Align
              Your Goals And Projects.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-lg">✔</span>
              Project Management: Keep Every Project Moving Forward Smoothly, On Time, And With Clear Direction.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-lg">✔</span>
              Client Communication: Ensure Seamless, Professional Communication With Your Clients, Building Stronger
              Relationships.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-lg">✔</span>
              Daily Operations Management: Let The Day-To-Day Tasks Run Smoothly While You Focus On Big-Picture Growth.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-lg">✔</span>
              Automation: Save Time And Eliminate Manual Processes With Systems That Streamline Your Business.
            </li>
            <li className="flex items-start gap-2 font-semibold">
              <span className="text-lg">✔</span>
              KNOW MORE ABOUT MY DIFFERENT PACKAGES AND PRICES
            </li>
          </ul>

          {/* Button */}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdUaQXeIheNXx6Z3TtMx8yQX-3FOefXzucMalGJgJ0HNiFtxA/viewform?usp=header" className="inline-block">
  <button className="mt-6 px-15 py-2 text-white bg-[#4B3A36] hover:bg-[#362825] text-sm tracking-wide uppercase font-['poppins'] rounded transition-all transform hover:scale-105">
    I&apos;m ready.
  </button>
</a>

        </EntryAnimation>
      </section>
      <section id="virtualassistant"className="bg-white px-6 md:px-20 py-16 flex flex-col md:flex-row items-start justify-between font-sans text-[#141414] gap-10">
        {/* Text Content */}
        <EntryAnimation className="w-full md:w-[55%] text-left">
          <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-2 underline underline-offset-4 font-['afacad']">
            VIRTUAL ASSISTANT
          </h2>

          <p className="text-base md:text-lg mt-4 mb-4 leading-relaxed font-['poppins']">
            You Want Support To Handle Day-To-Day, Tedious Tasks So You Can Focus On Growing Your Business.
          </p>

          <p className="text-base md:text-lg mb-4 leading-relaxed font-['poppins']">
            As Your VA, I&apos;ll Take Care Of The Draining Admin Tasks—Like The Hours Spent
            <br className="hidden md:block" />
            Replying To DMs—While The Work Piles Up. You&apos;ll Finally Have Time For What
            <br className="hidden md:block" />
            Truly Matters.
          </p>

          <p className="text-base md:text-lg mb-6 leading-relaxed">
            With My Help, You Can Avoid That Stress And Stay Focused On The Bigger Picture.
          </p>

          {/* Key Features */}
          <h3 className="text-xl font-semibold underline underline-offset-4 mb-4">Key Features:</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-xl font-['poppins'] ">
            <div className="flex items-start gap-2">
              <span className="text-lg">✔</span> Email Management
            </div>
            <div className="flex items-start gap-2">
              <span className="text-lg">✔</span> Client Communication
            </div>
            <div className="flex items-start gap-2">
              <span className="text-lg">✔</span> Calendar Management
            </div>
            <div className="flex items-start gap-2">
              <span className="text-lg">✔</span> Basic Market Research
            </div>
            <div className="flex items-start gap-2">
              <span className="text-lg">✔</span> Content Scheduling & Posting
            </div>
            <div className="flex items-start gap-2">
              <span className="text-lg">✔</span> Invoice Management
            </div>
          </div>

          {/* Button */}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdUaQXeIheNXx6Z3TtMx8yQX-3FOefXzucMalGJgJ0HNiFtxA/viewform?usp=header" className="inline-block">
  <button className="mt-8 px-6 py-2 text-white bg-[#4B3A36] hover:bg-[#362825] text-base tracking-widest uppercase rounded font-['afacad']">
    I&apos;m on board. Let&apos;s connect
  </button>
</a>

        </EntryAnimation>

        {/* Image */}
        <EntryAnimation className="w-full md:w-[35%]">
          <Image
            src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713810/service6_vehgza.png"
            alt="Virtual Assistant Forest"
            width={600}
            height={450}
            className="w-full h-auto object-cover"
          />
        </EntryAnimation>
      </section>

      <section id="consultation"
        className="w-full bg-cover bg-center bg-no-repeat text-white py-20 px-6"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713809/service7_backsg.png')",
        }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div>
            <p className="text-3xl tracking-wider uppercase font-['poppins']">Consultation Support</p>
            <br></br>
            <h2 className="text-2xl md:text-3xl font-light mt-4 font-['aboreto']">60-Minute Strategy Consultation</h2>
            <p className="mt-4 text-base md:text-lg font-light leading-relaxed font-['poppins']">
              If you&apos;re not quite ready for 1:1 support, but still crave <br></br>personalised strategy advice. It
              goes beyond what you&apos;ll find online.
            </p>
          </div>

          {/* STEP 1 */}
          <EntryAnimation className="space-y-2">
            <h3 className="text-xl md:text-3xl tracking-wider font-light font-['aboreto']">
              STEP 1: LOCK IN YOUR SPOT
            </h3>
            <br></br>
            <p className="text-base font-medium font-['poppins']">
              Once your payment goes through, you&apos;ll receive an email with the link you need to:
            </p>
            <ul className="text-sm md:text-base mt-2 space-y-1 font-['poppins']">
              <li>• Book your consult date and time.</li>
              <li>• Access your briefing questionnaire.</li>
            </ul>
          </EntryAnimation>

          {/* STEP 2 */}
          <EntryAnimation className="space-y-2">
            <h3 className="text-xl md:text-3xl tracking-wider font-light font-['aboreto']">
              STEP 2: SHARE YOUR BUSINESS DETAILS
            </h3>
            <br></br>
            <p className="text-base font-light leading-relaxed font-['poppins']">
              At least 24 hours before our call, fill out the questionnaire. This helps me understand your challenges
              and goals, as well as what you aim to achieve during our session. The more details you provide, the better
              prepared we&apos;ll be to maximise our time together.
            </p>
          </EntryAnimation>

          {/* STEP 3 */}
          <EntryAnimation className="space-y-2">
            <h3 className="text-xl md:text-3xl tracking-wider font-light font-['aboreto']">
              STEP 3: DIVE INTO STRATEGY
            </h3>
            <br></br>
            <p className="text-base font-light leading-relaxed font-['poppins']">
              Join the call ready to explore ways to streamline your operations and grow your business. We&apos;ll use
              60 minutes to focus on your unique needs. This may include optimising team performance, fine-tuning
              processes, or addressing specific pain points.
            </p>
          </EntryAnimation>
          <a href="https://topmate.io/tanishqjha" className="inline-block">
  <button className="mt-8 px-6 py-2 text-amber-950 bg-[#ffffff] hover:bg-[#bbb8b7] text-base tracking-widest uppercase rounded font-['afacad']">
    Book a 60 minute call
  </button>
</a>
        </div>
      </section>
      <section className="w-full bg-white px-6 py-20 flex flex-col items-center text-black">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-16">
          {/* Image */}
          <EntryAnimation className="w-full md:w-1/2">
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713807/service8_icrnyv.png"
              alt="Abstract Line Art"
              width={500}
              height={500}
              className="w-[500px] h-[500px] object-contain"
            />
          </EntryAnimation>

          {/* Text Content */}
          <EntryAnimation className="w-full md:w-1/2 space-y-6 font-['Poppins']">
            <h2 className="text-3xl md:text-6xl font-light underline underline-offset-8 mb-4 font-['afacad']">
              What You Get:
            </h2>

            <div className="space-y-4 text-[16px] leading-relaxed">
              <p>
                <span className="font-bold">A 60-Minute Consult Call:</span> Pure Strategy Tailored To Your Business
                Challenges.
              </p>
              <p>
                <span className="font-bold">Recorded Call:</span> You&apos;ll Receive A Full Recording Of Our Session,
                Allowing You To Revisit The Insights Whenever
                <br />
                <span className="flex items-start mt-2">You Need A Refresher.</span>
              </p>
              <p>
                <span className="font-bold">Recommendation Document:</span> Within 48 Hours, I&apos;ll Send
                <br />
                <span className="flex items-start mt-2">
                  You A Personalised Guide Summarising Our Call And Providing Clear Action Steps.
                </span>
              </p>
              <p>
                <span className="font-bold">7 Days Of Email Support:</span> After Our Session, You&apos;ll Have A
                <br />
                <span className="flex items-start mt-2">Week Of Email Access For Any Lingering Questions.</span>
              </p>
            </div>
          </EntryAnimation>
        </div>

        {/* Footer Section */}
        <EntryAnimation className="mt-20 text-center">
          <h3 className="text-2xl md:text-6xl font-light tracking-wide mb-2 font-['Afacad']">
            A PEEK INTO MY <span className="font-light">OBM AND VA PROCESS:</span>
          </h3>
          <p className="text-lg md:text-3xl py-7 font-light font-['Poppins']">HOW I HELP YOUR BUSINESS THRIVE</p>
        </EntryAnimation>
      </section>
      <ProcessSection />
      <section>
        <div className="bg-[#f2dbcd] py-16 px-4 flex justify-center items-center">
          <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* Circular Image */}
            <EntryAnimation className="w-64 h-64 rounded-full overflow-hidden border-[10px] border-[#ebd6c6] flex-shrink-0">
              <Image
                src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744871205/WhatsApp_Image_2025-04-03_at_12.39.42_eligvq.jpg"
                alt="Client Testimonial"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </EntryAnimation>

            {/* Testimonial Text */}
            <EntryAnimation className="text-[#3a2d2c] text-center md:text-left">
              <p className="text-2xl font-semibold mb-4 font-['afacad']">
                Loving your work team… am sharing it with more and more of the people I love.
                <br />
                And I know I can blindly recommend your team to them.
              </p>
              <p className="text-lg font-bold mt-6 font-['poppins']">
                I hope you&apos;re understanding the powerful purpose you&apos;re serving as you help so many people &
                families achieve their dreams with visibility and growth.
              </p>
              <p className="mt-6 text-sm uppercase tracking-wide text-[#7a625f]"> Gargi Arya, Life& Business Coach</p>
            </EntryAnimation>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <EntryAnimation>
          <h2 className="text-5xl font-medium tracking-wider mb-10 text-center font-['afacad']">
            MY UNWAVERING COMMITMENT TO YOU
          </h2>
        </EntryAnimation>
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto">
          {/* Left Content Block */}
          <EntryAnimation className="bg-[#f3e4da] rounded-xl p-8 lg:p-10 flex-1">
            <p className="text-[#3a2d2c] mb-6 font-['poppins']">
              I&apos;M COMMITTED TO MAKING YOUR BUSINESS RUN SMOOTHLY. YOU CAN FOCUS ON GROWTH WITHOUT GETTING BOGGED
              DOWN BY DAY-TO-DAY TASKS.
            </p>
            <p className="text-[#3a2d2c] text-xl mb-6 font-['poppins']">HERE&apos;S WHAT WORKING WITH ME LOOKS LIKE:</p>
            <ul className="space-y-5 text-[#3a2d2c]">
              <li className="flex items-start gap-2">
                <span className="text-lg mt-1">•</span>
                <div>
                  <span className="font-semibold">Constant Communication:</span> Expect timely updates, so you&apos;re
                  never left in the dark about where things stand.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg mt-1">•</span>
                <div>
                  <span className="font-semibold">Reliable Results:</span> I ensure that every task, project, and system
                  is completed on time and handled with precision.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg mt-1">•</span>
                <div>
                  <span className="font-semibold">A Values-Driven Partnership:</span> I work with clients whose missions
                  I believe in, which means I&apos;m fully invested in helping you succeed.
                </div>
              </li>
            </ul>
          </EntryAnimation>

          {/* Right Image */}
          <EntryAnimation className="rounded-xl overflow-hidden flex-1">
            <Image
              src="/services/service1.png"
              alt="Woman in yellow dress sitting by a window with city view"
              width={600}
              height={450}
              className="w-full h-full object-center object-cover rounded-xl"
            />
          </EntryAnimation>
        </div>
      </section>

      <section>
        <div
          className="bg-contain bg-no-repeat bg-right py-20 px-4 text-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713808/service12_syiluw.png')",
          }}
        >
          <EntryAnimation>
            <h2 className="text-4xl md:text-5xl text-black mb-6 font-['afacad']">
              LET&apos;S SIMPLIFY YOUR SYSTEMS,
              <br />
              PROCESSES, AND DAILY OPERATIONS
            </h2>
            <p className="text-lg md:text-xl text-black mb-10 max-w-3xl mx-auto font-['poppins']">
              Prefer talking it out instead of reading through details? Let&apos;s connect, and I&apos;ll help you
              choose the best offer to suit your business needs.
            </p>
            <a
              href="https://topmate.io/tanishqjha"
              className="inline-block bg-[#3a2d2c] text-white text-lg tracking-widest px-8 py-4 rounded-md shadow-md hover:bg-[#2e2322] transition font-['poppins']"
            >
              I&apos;M IN! SCHEDULE THE CALL
            </a>
          </EntryAnimation>
        </div>
      </section>

      <Footer />
    </>
  )
}

// Simple Entry Animation Component
import { ReactNode } from "react";

const EntryAnimation = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ y: 30, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
      transition={{ duration: 0.7 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ServicesPage
