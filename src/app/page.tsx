"use client"
import Header from "./components/Header"
import { SlCheck } from "react-icons/sl"
import Footer from "./components/Footer"
import Image from "next/image"
import { useEffect } from "react"
import confetti from "canvas-confetti"
import { motion } from "framer-motion"
import Link from "next/link"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 },
  },
}

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const imageScale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8,
    },
  },
}

export default function Home() {
  useEffect(() => {
    // Run confetti when component mounts
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    })
  }, [])

  return (
    <main>
      <Header />
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 py-20 max-w-7xl mx-auto !bg-white relative">
        {/* Left Section */}
        <motion.div className="w-full md:w-2/3 space-y-3" initial="hidden" animate="visible" variants={fadeInLeft}>
          <motion.h1
            className="text-2xl md:text-4xl text-black font-['alike_angular'] font-bold leading-snug tracking-wide"
            variants={fadeIn}
          >
            SECOND BRAIN FOR ENTREPRENEURS <br />
            READY TO SCALE... WITHOUT EXHAUSTION
          </motion.h1>
          <motion.p className="text-2xl text-black/90 font-['poppins']" variants={fadeIn}>
            From Strategy To Implementation With Your Freedom- <br />
            Focused OBM & VA
          </motion.p>

          <motion.div
            className="space-y-4 mt-6 text-[#2f2f2f]"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p className="flex items-center text-lg font-['alike']" variants={fadeIn}>
  <SlCheck className="text-[#4e3b39] mr-3 w-5 h-5 shrink-0" />
  I make proactive decisions and manage key aspects of your business
</motion.p>
<motion.p className="flex items-center text-lg font-['alike']" variants={fadeIn}>
  <SlCheck className="text-[#4e3b39] mr-3 w-5 h-5 shrink-0" />
  Ensuring everything runs smoothly
</motion.p>
<motion.p className="flex items-center text-lg font-['alike']" variants={fadeIn}>
  <SlCheck className="text-[#4e3b39] mr-3 w-5 h-5 shrink-0" />
  Without the need for your constant intervention
</motion.p>

          </motion.div>

          <motion.div
            className="flex gap-6 mt-10"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <a href="#tellmemore">
             <motion.button
  className="bg-[#4e3b39] text-white px-6 py-3 md:px-12 md:py-4 uppercase tracking-widest text-xs md:text-sm rounded-md"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Tell Me More
</motion.button>

            </a>
            <a href="/services">
              <motion.button
                className="bg-white border border-amber-900 text-black px-6 py-3 md:px-12 md:py-4 uppercase tracking-widest text-xs md:text-sm rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Services
              </motion.button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Section (Images) */}
        <div className="hidden md:block absolute top-10 right-0 w-1/3 h-full z-0 overflow-hidden">
          {/* Background image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713708/hero1_ejhpgo.png"
              alt="Background"
              width={400}
              height={500}
              className="absolute right-0 w-[3400px] md:w-[400px] rounded-lg shadow-lg z-0"
            />
          </motion.div>
          {/* Overlay image */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 70 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
          >
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713708/hero2_n9mw0u.png"
              alt="Foreground"
              width={340}
              height={400}
              className="absolute top-[-10] right-30 translate-x-[-20px] w-[300px] md:w-[340px] rounded-lg shadow-xl z-10"
            />
          </motion.div>
        </div>
        <div className="md:hidden w-full mt-10 relative h-[300px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713708/hero1_ejhpgo.png"
              alt="Background"
              width={400}
              height={500}
              className="absolute right-0 w-[250px] rounded-lg shadow-lg z-0"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
          >
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713708/hero2_n9mw0u.png"
              alt="Foreground"
              width={340}
              height={400}
              className="absolute left-0 w-[220px] rounded-lg shadow-xl z-10"
            />
          </motion.div>
        </div>
      </section>

      {/* Still Waiting Section */}
<section id='tellmemore' className="bg-white py-30 px-6 md:px-12">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16">
    {/* Left Image */}
    <motion.div
      className="w-full md:w-[50%]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={imageScale}
    >
      <Image
        src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713709/hero3_smedab.png"
        alt="Support"
        width={616}
        height={631}
        className="w-full max-w-[550px] h-auto md:h-[580px] object-cover rounded-b-none"
      />
    </motion.div>

    {/* Right Text Content */}
    <motion.div
      className="w-full md:w-[50%] text-[#3b2f30]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInRight}
    >
      <motion.h2
        className="text-[28px] md:text-[50px] font-semibold leading-snug font-['alike_angular'] tracking-tight"
        variants={fadeIn}
      >
        Still Waiting For The Right
        <br />
        Time To Hire Support...
      </motion.h2>

      <motion.p className="text-[20px] md:text-[24px] font-poppins tracking-wide mt-6" variants={fadeIn}>
        Like reaching a certain number of clients
        <br />
        or achieving a revenue goal?
      </motion.p>

      <motion.p className="italic text-[20px] md:text-[30px] font-bold mt-8 font-['afacad']" variants={fadeIn}>
        Imagine this.....
      </motion.p>

      <motion.div
        className="space-y-4 mt-6 text-[16px] md:text-[20px] font-medium font-['alike'] leading-relaxed"
        variants={staggerContainer}
      >
        <motion.p variants={fadeIn}>What if you could bring in the right expertise today?</motion.p>
        <motion.p variants={fadeIn}>You&apos;d finally feel at ease. No more being wired 24/7.</motion.p>
        <motion.p variants={fadeIn}>
          Your business would keep moving forward, even when you&apos;re not glued to it.
        </motion.p>
        <motion.p variants={fadeIn}>
          Don&apos;t let hesitation hold you back from achieving your business goals.
        </motion.p>
      </motion.div>
    </motion.div>
  </div>
</section>


      {/* Testimonial Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-24 px-6 md:px-20 text-white"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713722/herobg_pxfxmy.png')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Content wrapper with relative to stack on top */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-5xl font-light tracking-wide text-white drop-shadow-md font-['alike_angular']">
            ACCELERATE YOUR BUSINESS…SUSTAINABLY
          </h2>
          <p className="text-lg md:text-2xl mt-4 font-light text-white drop-shadow-md font-afacad">
            (AKA GOODBYE OVERWHELM, WELCOME CLARITY!)
          </p>
          <h3 className="text-2xl md:text-4xl font-semibold mt-10 text-white drop-shadow-md font-poppins">
            Here&apos;s A Glimpse Of Client Love
          </h3>
        </motion.div>

        {/* Opaque content card */}
        <motion.div
          className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 max-w-5xl mx-auto p-6 md:p-10 rounded-xl shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          {/* Client Image */}
          <motion.div className="flex-shrink-0" variants={imageScale}>
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744871205/WhatsApp_Image_2025-04-03_at_12.37.58_oa4ori.jpg"
              alt="Client"
              width={256}
              height={256}
              className="w-90 h-110 object-cover border-8 border-white shadow-xl rounded"
            />
          </motion.div>

          {/* Testimonial Text */}
          <motion.div
            className="text-left text-white space-y-3 md:space-y-5 max-w-xl text-sm md:text-lg leading-relaxed font-['alike']"
            variants={staggerContainer}
          >
            <motion.p variants={fadeIn}>
              <em>Tanishq you have been a blessing in disguise for me!</em> I never thought I would want to work with
              someone because of a few of my past experiences, but you are genuinely an angel!
            </motion.p>
            <motion.p variants={fadeIn}>
              You make everything so easy for me which helps me focus more on myself, my family and further growth of
              the business!! The best part is you work on it like it&apos;s your own, and even push me to be my better
              version everyday!
            </motion.p>
            <motion.p variants={fadeIn}>
              She took care of all the details and challenges, allowing me to focus on my first digital product and
              creating content. If you need someone to help you organise and grow your online business, I highly
              recommend Tanishq!
            </motion.p>
            <motion.p className="font-semibold font-['poppins']" variants={fadeIn}>
              Aastha Agarwal,<br></br>Psychic Tarot Reader and Manifestation Coach!🩷
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Time Section */}
      <section className="bg-white py-24 px-6 md:px-20 text-black font-['afacad']">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center md:items-start">
          {/* Left Column - Clock Image */}
          <motion.div
            className="flex justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageScale}
          >
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713709/hero4_rld5y8.png"
              alt="Clock"
              width={500}
              height={500}
              className="w-full max-w-[300px] md:max-w-md h-auto md:h-[500px] rounded mx-auto md:mx-0"
            />
          </motion.div>

          {/* Right Column - Text */}
          <motion.div
            className="flex flex-col justify-start text-left ml-0 md:-ml-30"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            <motion.h2
              className="text-[28px] md:text-[50px] font-light uppercase leading-tight tracking-wide font-['alike_angular']"
              variants={fadeIn}
            >
              <br></br>
              YOUR TIME AND ENERGY ARE MY TOP PRIORITIES
            </motion.h2>
            <motion.p className="mt-6 text-[24px] md:text-[30px] uppercase tracking-widest font-['poppins']" variants={fadeIn}>
              SO YOU CAN...
            </motion.p>

            <motion.div className="relative mt-10" variants={fadeIn}>
              <motion.p
                className="text-[27px] md:text-[34px] font-semibold relative z-10 leading-snug tracking-tight font-['poppins']"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                FOCUS ON GROWTH, NOT THE GRIND, AND <br /> BUILD YOUR FREEDOM-FOCUSED BUSINESS
              </motion.p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start mt-28">
          {/* Left Column - How it's done */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <motion.h3 className="text-2xl md:text-5xl font-light mb-8 font-['alike_angular']" variants={fadeIn}>
              Let&apos;s dive into how it&apos;s done:
            </motion.h3>
            <motion.div
              className="space-y-2 text-base md:text-2xl font-medium leading-relaxed"
              variants={staggerContainer}
            >
              <motion.strong variants={fadeIn}>
                By Streamlining Your Projects, Team, Operations, And Client Communication.
              </motion.strong>
              <motion.div className="flex items-start" variants={fadeIn}>
                <span>Ensure That Everything Runs Smoothly And Efficiently.</span>
              </motion.div>
              <motion.div className="flex items-start" variants={fadeIn}>
                <span>
                  This Empowers You To Step Back, Focus On Business Growth, And Think Strategically— Without Constantly
                  Putting Out Fires.
                </span>
              </motion.div>
              <motion.div className="flex items-start" variants={fadeIn}>
                <span>
                  Imagine The Mental Space You&apos;ll Gain When You&apos;re No Longer Juggling A Million Tasks At Once.
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Desk Image with Quote */}
          <motion.div
            className="relative flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageScale}
          >
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713712/hero5_t6psvg.png"
              alt="Desk with notes and coffee"
              width={600}
              height={400}
              className="w-full max-w-md rounded shadow-md"
            />
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="relative bg-white py-20 px-6 md:px-20 border-t-1 border-[#4A3733]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[auto_1fr] items-center md:items-start gap-10 relative">
          {/* Image + Overlay */}
          <motion.div
            className="relative flex items-center z-30"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageScale}
          >
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713708/hero2_n9mw0u.png"
              alt="Tanishq"
              width={400}
              height={500}
              className="w-[280px] md:w-[400px] rounded-md shadow-xl mx-auto md:mx-0 mb-0 md:-mb-20 mt-1 md:-ml-5 relative z-30"
            />
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            className="flex flex-col w-full relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            {/* Heading */}
            <motion.div className="mb-10" variants={staggerContainer}>
              <motion.h2
                className="text-3xl md:text-6xl font-light uppercase text-[#4A3733] font-['alike_angular']"
                variants={fadeIn}
              >
                HI, I&apos;M TANISHQ!
              </motion.h2>
              <motion.h3
                className="text-2xl md:text-2xl font-light text-[#4A3733] mt-2 font-['alike_angular']"
                variants={fadeIn}
              >
                FOUNDER OF TANISHQJHA.CO
              </motion.h3>
              <motion.p className="text-lg md:text-2xl mt-5 -mb-3 text-[#4A3733] font-['poppins']" variants={fadeIn}>
                YOUR FREEDOM-PARTNER, YOUR GO-TO FOR GETTING THINGS DONE
              </motion.p>
            </motion.div>

            {/* Brown Box */}
            <motion.div
              className="bg-[#4A3733] text-white p-6 md:p-8 space-y-6 text-base md:text-lg font-light rounded-sm relative z-20"
              variants={fadeIn}
              transition={{ delay: 0.3 }}
            >
              <p className="uppercase font-semibold tracking-wide font-['afacad'] text-2xl">
                (PRIORITIZING IS MY STRENGTH!)
              </p>
              <motion.ul className="space-y-6 font-['poppins']" variants={staggerContainer}>
                <motion.li className="flex items-start gap-3" variants={fadeIn}>
                  <SlCheck className="mt-1 text-xl" />
                  <span>CAN SMART STRATEGY AND SEAMLESS EXECUTION AMPLIFY YOUR FREEDOM?</span>
                </motion.li>
                <motion.li className="flex items-start gap-3" variants={fadeIn}>
                  <SlCheck className="mt-1 text-xl" />
                  <span>
                    ABSOLUTELY! I DON&apos;T JUST TACKLE YOUR TO-DO LIST—
                    <br />I BLEND OBM AND VA EXPERTISE TO ENHANCE YOUR DAILY OPERATIONS AND STRATEGIC PLANNING.
                  </span>
                </motion.li>
                <motion.li className="flex items-start gap-3" variants={fadeIn}>
                  <SlCheck className="mt-1 text-xl" />
                  <span>
                    FROM BIG-PICTURE PROJECTS TO INBOX MASTERY, I&apos;M THE EFFICIENCY-DRIVEN PARTNER YOUR BUSINESS
                    CRAVES.
                  </span>
                </motion.li>
                <motion.li className="flex items-start gap-3" variants={fadeIn}>
                  <SlCheck className="mt-1 text-xl" />
                  <span>STEP INTO A WORLD WHERE STRATEGY MEETS ACTION, AND OVERWHELM BECOMES A THING OF THE PAST.</span>
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
  {/* Services Section */}
  <section className="bg-white py-10 px-4 sm:px-6 md:px-20 text-center font-['Didot',serif] mt-10 md:mt-20">
        {/* Top Text */}
        <motion.div
          className="max-w-4xl mx-auto mb-10 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-[24px] sm:text-[28px] md:text-[50px] leading-tight font-light tracking-wide uppercase text-black font-['afacad']">
            WANNA SCALE YOUR BUSINESS...
          </h2>
          <h2 className="text-[28px] sm:text-[36px] md:text-[50px] leading-tight font-light tracking-wide uppercase text-black mt-2 font-['afacad']">
            WITHOUT THE <span className="font-bold">OVERLOAD</span> ON YOUR SHOULDERS?
          </h2>
          <p className="mt-6 md:mt-8 text-[18px] sm:text-[22px] md:text-[26px] tracking-wide text-[#2E2E2E] uppercase font-['poppins']">
            HERE&apos;S HOW WE CAN WORK TOGETHER
          </p>

          {/* Arrow */}
          <motion.div
            className="mt-4 md:mt-6"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          >
            <span className="text-[24px] md:text-[36px] text-black select-none">↓</span>
          </motion.div>
        </motion.div>

        {/* Service 1 */}
        <motion.div
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12 text-left mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          {/* Text Content */}
          <motion.div className="w-full md:w-2/3 flex flex-col sm:flex-row gap-3 md:gap-6" variants={fadeInLeft}>
            {/* Number */}
            <motion.h3
              className="text-[60px] md:text-[100px] font-light text-black leading-none text-center sm:text-left"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              1
            </motion.h3>

            {/* Description */}
            <motion.div variants={staggerContainer} className="flex-1">
              <motion.h4
                className="text-[24px] sm:text-[28px] md:text-[50px] font-normal text-black border-b border-black pb-1 mb-4 w-fit font-['alike_angular']"
                variants={fadeIn}
              >
                Virtual Assistant
              </motion.h4>

              <motion.p
  className="text-[16px] sm:text-[18px] md:text-[26px] text-[#2E2E2E] leading-relaxed tracking-wide font-light font-['poppins']"
  variants={fadeIn}
>
  You want a trusted virtual assistant to handle your admin and client communication, freeing you from the daily grind so you can focus on what you do best.
</motion.p>


              <Link href="/services/#virtualassistant">
                <motion.button
                  className="mt-6 px-4 sm:px-6 py-2 bg-[#4A3733] text-white tracking-widest text-[12px] sm:text-[14px] uppercase rounded-sm font-semibold font-['poppins']"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variants={fadeIn}
                >
                  GET THE DETAILS
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div className="w-full md:w-1/3 flex justify-center mt-6 md:mt-0" variants={imageScale}>
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713713/hero6_li2r1f.png"
              alt="Virtual Assistant"
              width={300}
              height={400}
              className="w-[220px] sm:w-[260px] md:w-[300px] border-[6px] border-[#f4e9de]"
            />
          </motion.div>
        </motion.div>

        {/* Service 2 */}
        <motion.div
          className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8 md:gap-12 mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          {/* Image Left */}
          <motion.div className="w-full md:w-1/3 flex justify-center mt-6 md:mt-0" variants={imageScale}>
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713710/hero7_ol7jzy.png"
              alt="Online Business Manager"
              width={300}
              height={400}
              className="w-[220px] sm:w-[260px] md:w-[300px] border-[6px] border-[#f4e9de]"
            />
          </motion.div>

          {/* Text Right */}
          <motion.div
            className="w-full md:w-2/3 flex flex-col sm:flex-row gap-3 md:gap-6 text-left"
            variants={fadeInRight}
          >
            {/* Number */}
            <motion.h3
              className="text-[60px] md:text-[100px] font-light text-black leading-none text-center sm:text-left"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              2
            </motion.h3>

            {/* Content */}
            <motion.div variants={staggerContainer} className="flex-1">
              <motion.h4
                className="text-[24px] sm:text-[28px] md:text-[50px] font-normal  text-black border-b border-black pb-1 mb-4 w-fit font-['alike_angular']"
                variants={fadeIn}
              >
                Online Business Manager
              </motion.h4>
              <motion.p
  className="text-[16px] sm:text-[18px] md:text-[24px] text-[#2E2E2E] leading-relaxed tracking-wide font-light font-['poppins']"
  variants={fadeIn}
>
  You want a big-picture thinker and a doer as your online business manager. This support will keep everything running smoothly, allowing you to focus on scaling your business and achieving your broader goals.
</motion.p>


              <Link href="/services/#onlinebusinessmanager">
                <motion.button
                  className="mt-6 px-4 sm:px-6 py-2 bg-[#4A3733] text-white tracking-widest text-[12px] sm:text-[14px] uppercase rounded-sm font-semibold font-['poppins']"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variants={fadeIn}
                >
                  GET THE DETAILS
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Service 3 */}
        <motion.div
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12 mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          {/* Text Left */}
          <motion.div
            className="w-full md:w-2/3 flex flex-col sm:flex-row gap-3 md:gap-6 text-left"
            variants={fadeInLeft}
          >
            {/* Number */}
            <motion.h3
              className="text-[60px] md:text-[100px] font-light text-black leading-none text-center sm:text-left"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              3
            </motion.h3>

            {/* Content */}
            <motion.div variants={staggerContainer} className="flex-1">
              <motion.h4
                className="text-[24px] sm:text-[28px] md:text-[50px] font-normal  text-black border-b border-black pb-1 mb-4 w-fit font-['alike_angular']"
                variants={fadeIn}
              >
                60 Minute - Strategy Consultation
              </motion.h4>
              <motion.p
  className="text-[16px] sm:text-[18px] md:text-[25px] text-[#2E2E2E] leading-relaxed tracking-wide font-light font-['poppins']"
  variants={fadeIn}
>
  You want a strategic 60-minute consultation that provides tailored advice and a roadmap for taking your business to the next level.
</motion.p>


              <Link href="/services/#consultation">
                <motion.button
                  className="mt-6 px-4 sm:px-6 py-2 bg-[#4A3733] text-white tracking-widest text-[12px] sm:text-[14px] uppercase rounded-sm font-semibold font-['poppins']"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variants={fadeIn}
                >
                  GET THE DETAILS
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Right */}
          <motion.div className="w-full md:w-1/3 flex justify-center mt-6 md:mt-0" variants={imageScale}>
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713723/hero8_toysbn.png"
              alt="60 Minute Strategy Call"
              width={300}
              height={400}
              className="w-[220px] sm:w-[260px] md:w-[300px] border-[6px] border-[#f4e9de]"
            />
          </motion.div>
        </motion.div>

        {/* Service 4 */}
        <motion.div
          className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8 md:gap-12 pb-10 md:pb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          {/* Image Left */}
          <motion.div className="w-full md:w-1/3 flex justify-center mt-6 md:mt-0" variants={imageScale}>
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713714/hero9_fptahl.png"
              alt="Need Something Else"
              width={300}
              height={400}
              className="w-[220px] sm:w-[260px] md:w-[350px] border-[6px] border-[#f4e9de]"
            />
          </motion.div>

          {/* Text Right */}
          <motion.div
            className="w-full md:w-2/3 flex flex-col sm:flex-row gap-3 md:gap-6 text-left"
            variants={fadeInRight}
          >
            {/* Number */}
            <motion.h3
              className="text-[60px] md:text-[100px] font-light text-black leading-none text-center sm:text-left"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              4
            </motion.h3>

            {/* Content */}
            <motion.div variants={staggerContainer} className="flex-1">
              <motion.h4
                className="text-[24px] sm:text-[28px] md:text-[50px] font-normal text-black border-b border-black pb-1 mb-4 w-fit font-['alike_angular']"
                variants={fadeIn}
              >
                Need Something That Isn&apos;t Listed?
              </motion.h4>
              <motion.p
  className="text-[16px] sm:text-[18px] md:text-[23px] text-[#2E2E2E] leading-relaxed tracking-wide font-light font-['poppins']"
  variants={fadeIn}
>
  You want a big-picture thinker and a doer as your online business manager. This support will keep everything running smoothly, allowing you to focus on scaling your business and achieving your broader goals.
</motion.p>


              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdUaQXeIheNXx6Z3TtMx8yQX-3FOefXzucMalGJgJ0HNiFtxA/viewform?usp=header">
                <motion.button
                  className="mt-6 px-4 sm:px-6 py-2 bg-[#4A3733] text-white tracking-widest text-[12px] sm:text-[14px] uppercase rounded-sm font-semibold font-['poppins']"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variants={fadeIn}
                >
                  GET THE DETAILS
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* You're Not Alone Section */}
      <section className="font-['Didot',serif] bg-white py-12 px-6 md:px-20">
  <motion.div
    className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10 bg-[#EBD3C1] p-6 sm:p-8 rounded-lg overflow-hidden"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeIn}
  >
    {/* Image Section - Small */}
    <motion.div
      className="w-full md:w-1/3 flex justify-center md:justify-start z-10"
      variants={imageScale}
    >
      <Image
        src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713720/tanishq_dncoua.png"
        alt="Support Person"
        width={450}
        height={500}
        className="border-4 rounded-md shadow-md w-full max-w-[450px] h-auto object-cover mt-6 md:mt-9"
      />
    </motion.div>

    {/* Text Section - Expanded */}
    <motion.div className="w-full md:w-2/3 bg-[#EBD3C1] p-4 sm:p-8 rounded-md" variants={fadeInRight}>
      <motion.h2
        className="text-[28px] sm:text-[35px] text-black font-normal leading-snug mb-2 font-['alike_angular']"
        variants={fadeIn}
      >
        YOU&apos;RE NOT DOING IT ALONE ANYMORE...
      </motion.h2>
      <motion.h3
        className="text-[22px] sm:text-[28px] text-amber-950 font-semibold tracking-wide mb-4 uppercase font-['afacad']"
        variants={fadeIn}
      >
        INSTEAD...
      </motion.h3>

      <motion.div variants={staggerContainer}>
        <motion.p
          className="text-[18px] sm:text-[20px] text-[#2E2E2E] mb-4 leading-relaxed font-['poppins']"
          variants={fadeIn}
        >
          You now have someone who&apos;s uniquely positioned as your trusted support system, ensuring you make
          the most of your time and resources.
        </motion.p>
        <motion.p
          className="text-[18px] sm:text-[20px] text-[#2E2E2E] mb-4 leading-relaxed font-['poppins']"
          variants={fadeIn}
        >
          After all, there are only so many hours in a day.
        </motion.p>
        <motion.p
          className="text-[18px] sm:text-[20px] text-[#2E2E2E] mb-4 leading-relaxed font-['poppins']"
          variants={fadeIn}
        >
          While you can manage tasks yourself, every moment spent on those details takes away from your capacity
          to onboard larger clients.
        </motion.p>
        <motion.p
          className="text-[18px] sm:text-[20px] text-[#2E2E2E] mb-6 leading-relaxed font-['poppins']"
          variants={fadeIn}
        >
          No more exhausting back-and-forth with clients and leads.
        </motion.p>
        <motion.p
          className="text-[18px] sm:text-[20px] font-light text-black tracking-wide leading-relaxed font-['poppins']"
          variants={fadeIn}
        >
          NOW, YOU&apos;LL FINALLY HAVE THE ENERGY TO FOCUS ON WHAT TRULY MATTERS—YOUR DELIVERABLES.
        </motion.p>
      </motion.div>
    </motion.div>
  </motion.div>
</section>


      {/* Time is Precious Section */}
      <section className="font-['Didot',serif] bg-white pt-12 px-6 md:px-20">
        <motion.div
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          {/* Text Section - Left side */}
          <motion.div className="md:w-2/3" variants={fadeInLeft}>
            <motion.h2
              className="text-[42px] md:text-[35px] font-bold text-black mb-2 font-['alike']"
              variants={fadeIn}
            >
              TIME <span className="font-normal">IS ONE OF THE MOST PRECIOUS RESOURCES</span>
            </motion.h2>
            <motion.p className="text-[22px] text-black mb-4 font-['poppins']" variants={fadeIn}>
              &quot; If you find yourself in this situation most of the time &quot;
            </motion.p>
            <motion.div variants={staggerContainer}>
              <motion.p className="text-[20px] text-[#2E2E2E] leading-relaxed mb-4 font-['poppins']" variants={fadeIn}>
                You feel overwhelmed by managing everything on your own while trying to find your way.
              </motion.p>
              <motion.p className="text-[20px] text-[#2E2E2E] leading-relaxed mb-4 font-['poppins']" variants={fadeIn}>
                You have a team. But as the go-to person, you end up handling all the questions, which can quickly
                become overwhelming.
              </motion.p>
              <motion.p className="text-[20px] text-[#2E2E2E] leading-relaxed mb-4 font-['poppins']" variants={fadeIn}>
                Your business relies solely on you. This makes it difficult to take breaks and affects your
                relationships, mental health, and motivation.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Image Section - Right side */}
          <motion.div className="md:w-1/2 flex justify-center md:justify-end" variants={imageScale}>
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713723/tanishq2_zg1hdb.png"
              alt="Precious Time"
              width={400}
              height={700}
              className="max-w-[380px] h-[450px]"
            />
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.h3
            className="text-[16px] md:text-[40px] font-bold text-black mb-4 tracking-wide uppercase font-['afacad']"
            variants={fadeIn}
          >
            EXPLORE HOW I CAN HELP YOUR BUSINESS THRIVE <br></br> WITH MORE FLEXIBILITY AND LESS HUSTLE
          </motion.h3>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdUaQXeIheNXx6Z3TtMx8yQX-3FOefXzucMalGJgJ0HNiFtxA/viewform?usp=header">
            <motion.button
              className="bg-[#4e3b39] border-none text-[#ffffff] text-[14px] px-9 py-3 rounded-sm tracking-widest shadow-none hover:opacity-90 transition font-['poppins']"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={fadeIn}
            >
              SCHEDULE YOUR COMPLIMENTARY CALL
            </motion.button>
          </a>
        </motion.div>
      </section>
      <br></br>
      <section className=" bg-white py-1 px-6 md:px-20"></section>

      {/* What Will You Get Section */}
      <section className="bg-white px-6 py-12 md:px-20">
        <motion.h2
          className="text-center text-[40px] mb-10 text-[#3B2F2F] font-['afacads']"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          WHAT WILL YOU GET OUT OF THIS NO- OBLIGATION OFFER ?
        </motion.h2>

        <motion.div
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          {/* Left Image with Overlay Box */}
          <motion.div
            className="relative w-full md:w-[300px] min-w-[260px] flex justify-center md:justify-start"
            variants={imageScale}
          >
            {/* Brown Background Box Behind the Image */}
            <motion.div
              className="absolute top-6 left-0 w-[260px] h-[340px] bg-[#3B2F2F] -z-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            ></motion.div>
            {/* Actual Image Slightly Shifted Right */}
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713712/hero10_gffdi1.png"
              alt="Coffee Cup"
              width={300}
              height={350}
              className="w-[300px] h-[358px] object-cover relative left-4"
            />
          </motion.div>

          {/* Right Steps Box */}
          <motion.div
  className="bg-[#F3E7DD] border border-gray-300 p-4 md:p-8 w-full text-[16px] md:text-[18px] text-black leading-relaxed"
  variants={fadeInRight}
>
  <motion.div className="mb-4" variants={fadeIn}>
    <span className="text-[#8D5F42] font-semibold mr-2 md:mr-4 text-[20px] md:text-[25px]">01</span>
    Book a time that works for you and fill out the form.
  </motion.div>
  <motion.div className="mb-4" variants={fadeIn}>
    <span className="text-[#8D5F42] font-semibold mr-2 md:mr-4 text-[20px] md:text-[25px]">02</span>
    Receive a confirmation email with all the call details.
  </motion.div>
  <motion.div className="mb-4 flex items-start" variants={fadeIn}>
    <span className="text-[#8D5F42] font-semibold mr-2 md:mr-4 text-[20px] md:text-[25px]">03</span>
    <div>
      <p className="text-[#2E2E2E] text-[16px] md:text-[20px] leading-relaxed">
        During our call, we&apos;ll explore your business needs.
      </p>
      <p className="text-[#2E2E2E] text-[16px] md:text-[20px] leading-relaxed">
        and how my services can support you.
      </p>
    </div>
  </motion.div>

  <motion.div className="mb-4" variants={fadeIn}>
    <span className="text-[#8D5F42] font-semibold mr-2 md:mr-4 text-[20px] md:text-[25px]">04</span>
    If we decide to collaborate, I&apos;ll send you a proposal for review.
  </motion.div>
  <motion.div variants={fadeIn}>
    <span className="text-[#8D5F42] font-semibold mr-2 md:mr-4 text-[20px] md:text-[25px]">05</span>
    Once agreed, sign the contract and make the payment to kick things off.
  </motion.div>
</motion.div>
</motion.div>
      </section>

      <section
        className="relative bg-cover bg-center bg-no-repeat py-24 px-6 md:px-20 text-white"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713722/herobg_pxfxmy.png')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Content wrapper with relative to stack on top */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h3 className="text-2xl md:text-4xl font-semibold mt-10 text-white drop-shadow-md font-['alike_angular']">
            &quot;HAVING TANISHQ ON MY TEAM WAS AN ABSOLUTE BLESSING&quot;
          </h3>
        </motion.div>

        {/* Opaque content card */}
        <motion.div
          className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 max-w-5xl mx-auto p-6 md:p-10 rounded-xl shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          {/* Client Image */}
          <motion.div className="flex-shrink-0" variants={imageScale}>
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744871204/WhatsApp_Image_2025-04-03_at_12.38.30_mfnylu.jpg"
              alt="Client"
              width={256}
              height={256}
              className="w-90 h-120 object-cover border-8 border-white shadow-xl rounded"
            />
          </motion.div>

          {/* Testimonial Text */}
          <motion.div
  className="text-left text-white space-y-3 md:space-y-5 max-w-xl text-sm md:text-xl leading-relaxed font-['alike']"
  variants={staggerContainer}
>
  <motion.p variants={fadeIn}>
    It felt like she effortlessly took ownership of every task—and what stood out the most was her eagerness to learn and adapt to how things needed to flow.
  </motion.p>
  <motion.p variants={fadeIn}>
    Working with her wasn’t just productive—it gave me the space to see the value of collaborating with others.
  </motion.p>
  <motion.p variants={fadeIn}>
    It was an incredible experience, and I look forward to more opportunities to connect and work together in the future.
  </motion.p>
  <motion.p className="font-extrabold font-['afacad']" variants={fadeIn}>
    Kapila Rattan Bhowmick, Parenting Coach
  </motion.p>
</motion.div>

        </motion.div>
      </section>
      <Footer />
    </main>
  )
}
