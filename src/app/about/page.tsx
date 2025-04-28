"use client"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Image from "next/image"
import { motion } from "framer-motion"

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

export default function AboutPage() {
  return (
    <div className="bg-white text-black">
      <Header />
      <section className="flex flex-col md:flex-row items-center justify-center px-4 md:px-20 py-20 gap-12 bg-white relative overflow-hidden">
        {/* Left Half Background Image */}
        <div className="absolute top-0 left-0 w-1/3 h-full z-0 overflow-hidden">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713752/about2_yvnlwt.png"
              alt="Background shadow"
              width={500}
              height={800}
              className="w-full h-13/14 object-cover"
            />
          </motion.div>
        </div>

        {/* Left Side: Foreground Image */}
        <motion.div
          className="relative z-10 w-full md:w-1/3 flex justify-center items-center ml-8"
          initial="hidden"
          animate="visible"
          variants={imageScale}
        >
          <Image
            src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713752/about1_osdjgc.png"
            alt="Tanishq hugging a dog"
            width={320}
            height={420}
            className="w-[320px] h-[420px] object-cover shadow-xl"
          />
        </motion.div>

        {/* Right Side: Text */}
        <motion.div
          className="w-full md:w-2/3 max-w-xl text-left z-10"
          initial="hidden"
          animate="visible"
          variants={fadeInRight}
        >
          <motion.h2 className="text-lg md:text-7xl font-normal mb-3 tracking-wide font-['afacad']" variants={fadeIn}>
            HI, I AM TANISHQ...
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl leading-relaxed tracking-wide font-light font-['afacad']"
            variants={fadeIn}
          >
            I AM ON A MISSION TO HELP ENTREPRENEURS{" "}
            <span className="font-bold text-[#3e2f2f]font-['poppins']">BUILD A SUCCESSFUL BUSINESS</span> WITH
          </motion.p>

          <motion.div className="" variants={fadeIn} transition={{ delay: 0.4 }}>
            <h1 className="relative inline-block text-4xl md:text-4xl font-semibold tracking-wide text-[#2A2A2A] mt-7">
              <span className="relative z-10 font-['afacad']">FREEDOM AND FULFILMENT</span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-[40%] bg-[#EFD5C4] -z-0"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.8 }}
              ></motion.span>
            </h1>
          </motion.div>

          <motion.p className="text-2xl mt-6 font-['poppins']" variants={fadeIn} transition={{ delay: 0.6 }}>
            (Yes, you can have both)
          </motion.p>
        </motion.div>
      </section>

      <section className="relative bg-white px-6 md:px-20 border-t-1 border-[#4A3733]"></section>
      <section className="px-6 md:px-20 py-16 bg-white">
        {/* Title */}
        <motion.h2
          className="text-2xl md:text-4xl font-light text-center mb-12 leading-relaxed font-['afacad']"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          IT&apos;S BEEN A GREAT RIDE THROUGH THE LAST ONE YEAR
          <br />
          AND I AM LOOKING FORWARD TO MANY MORE....
        </motion.h2>

        {/* Testimonial Box */}
        <motion.div
          className="bg-[#ecd7c8] rounded-none md:rounded-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-12 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          {/* Image */}
          <motion.div variants={imageScale}>
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744871621/Screenshot_2025-04-17_at_12.03.06_dsdqlw.png"
              alt="Roshni"
              width={220}
              height={280}
              className="w-[900px] h-[280px] object-cover rounded-[25px] shadow-lg"
            />
          </motion.div>

          {/* Testimonial Text */}
          <motion.div
            className="text-base md:text-2xl leading-relaxed text-black font-['poppins']"
            variants={fadeInRight}
          >
            <motion.p variants={fadeIn}>
              Tanishq came on board to help me in creating my freebie, help me with the launch. She completely took the
              entire process and work off my shoulders and did it with such perfection. She is not only skilled but also
              very punctual, efficient in handling tasks. I would highly recommend her to anyone looking to onboard a
              VA.
            </motion.p>
            <motion.p className="font-semibold mt-4" variants={fadeIn}>
              Roshni, Copywriter & Business Strategist
            </motion.p>
          </motion.div>
        </motion.div>
      </section>
      <section className="relative bg-white px-6 md:px-20 border-t-1 border-[#4A3733]"></section>
      <section className="relative bg-[#f7f5f2] px-7 md:px-16 lg:px-10 py-10 overflow-hidden">
        {/* Heading */}
        <motion.div
          className="text-left max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-left text-black tracking-tight leading-tight font-['afacad']">
            YOUR BUSINESS. SIMPLIFIED AND STREAMLINED.
          </h2>

          <p className="text-lg md:text-2xl text-black mt-2 tracking-wide font-['afacad']">
            (MORE RESULTS, LESS STRESS)
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-12 md:mt-16 max-w-6xl mx-auto">
          {/* "Here's how it works" heading positioned inside the box */}
          <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-12">
            {/* Left Side - Image with brown box */}
            <motion.div
              className="relative w-full md:w-5/12 flex justify-center items-end mb-8 md:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageScale}
            >
              {/* Brown box behind image - made more prominent */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-[95%] bg-[#3e2e2b] -z-10 rounded-tr-[70px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              />

              {/* Image - positioned slightly higher */}
              <Image
                src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713756/about4_vv4dpl.png"
                alt="Business professional"
                width={400}
                height={500}
                className="w-full h-[550px] max-w-sm object-cover shadow-xl relative z-10 -translate-y-4"
              />
            </motion.div>

            {/* Right Side - Text box that extends to the right edge */}
            <motion.div
              className="w-full md:w-7/12 bg-white rounded-[30px] shadow-xl p-6 md:p-10 flex flex-col justify-center relative md:pr-0 md:rounded-r-none"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
            >
              {/* "Here's how it works" text inside the box */}
              <motion.h3
                className="text-4xl md:text-6xl text-[#5f4b46] mb-4 font-medium text-left pr-8 z-20 font-['afacad']"
                variants={fadeIn}
              >
                Here&apos;s how it works:
              </motion.h3>

              {/* Inner content with padding to ensure text doesn't touch the edge */}
              <motion.div className="pr-6 md:pr-10" variants={staggerContainer}>
                <motion.p
                  className="text-[#5f4b46] text-sm md:text-base mb-5 leading-relaxed tracking-wide font-['poppins']"
                  variants={fadeIn}
                >
                  YOU&apos;RE GOING ABOUT YOUR DAILY LIFE—HANDLING CLIENT MEETINGS, PROJECT DELIVERY, AND PERSONAL
                  RESPONSIBILITIES. MEANWHILE, YOUR BUSINESS RUNS LIKE A WELL-OILED MACHINE, WITH EVERYTHING ON TRACK.
                </motion.p>

                <motion.p
                  className="text-[#5f4b46] text-sm md:text-base mb-5 leading-relaxed tracking-wide font-['poppins']"
                  variants={fadeIn}
                >
                  YOUR TEAM KNOWS WHAT TO DO. TASKS ARE GETTING DONE WITHOUT YOU HAVING TO MICROMANAGE. CLIENTS ARE
                  HAPPY, AND YOU CAN FINALLY FOCUS ON WHAT YOU LOVE TO DO.
                </motion.p>

                <motion.p
                  className="text-[#5f4b46] text-sm md:text-base mb-5 leading-relaxed tracking-wide font-['poppins']"
                  variants={fadeIn}
                >
                  NOW, PICTURE THAT HAPPENING EVERY SINGLE DAY.
                </motion.p>

                <motion.p
                  className="text-[#5f4b46] text-sm md:text-base mb-5 leading-relaxed tracking-wide font-['poppins']"
                  variants={fadeIn}
                >
                  WITH A SPECIALIST MANAGING YOUR OPERATIONS, YOUR{" "}
                  <strong>BUSINESS IS GROWING WITHOUT HITTING A PLATEAU.</strong> THAT MEANS MORE TIME FOR WHAT MATTERS
                  MOST IN YOUR LIFE.
                </motion.p>

                <motion.p
                  className="text-[#5f4b46] text-sm md:text-base leading-relaxed tracking-wide font-['poppins']"
                  variants={fadeIn}
                >
                  EFFECTIVE MANAGEMENT LEADS TO A FLOURISHING BUSINESS READY TO EXPAND. AND WITH A THRIVING BUSINESS,
                  YOUR ENTREPRENEURIAL DREAMS CAN TRULY TAKE FLIGHT.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-start justify-between px-6 md:px-12 py-10 gap-8 bg-white max-w-7xl mx-auto">
        {/* Left - Text Content */}
        <motion.div
          className="md:w-1/2 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInLeft}
        >
          <motion.h2 className="text-4xl font-bold text-amber-950 font-['afacad']" variants={fadeIn}>
            TANISHQJHA.CO STARTED WITH AN ASPIRATION FOR FREEDOM AND FULFILLMENT
          </motion.h2>
          <motion.p className="font-semibold text-gray-800 font-['poppins'] text-xl" variants={fadeIn}>
            Hi, I am Tanishq, founder of TanishqJha.co OBM and VA services
          </motion.p>
          <motion.div variants={staggerContainer}>
            <motion.p className="text-amber-950 font-['poppins'] text-xl" variants={fadeIn}>
              I grew up watching my father build a thriving business. He loved what he was doing, but he was working
              himself to the bone.
            </motion.p>
            <motion.p className="text-amber-950 font-['poppins'] text-xl" variants={fadeIn}>
              Even when he fractured his hand in an accident, he couldn&apos;t stop. The fear of letting down his
              customers kept him committed to his responsibilities, even while he was healing.
            </motion.p>
            <motion.p className="text-amber-950 font-['poppins'] text-xl" variants={fadeIn}>
              Despite his success, he could never truly take a break. Even during vacations, he was constantly worried
              about the business and its operations.
            </motion.p>
            <motion.p className=" text-amber-950 font-['poppins'] text-xl" variants={fadeIn}>
              This was heartbreaking for me.{" "}
              <strong>Entrepreneurship should not come at the cost of personal well-being.</strong>
            </motion.p>
            <motion.p className="text-amber-950 font-['poppins'] text-xl" variants={fadeIn}>
              I was always intrigued by how someone could thrive in their business without pushing themselves to their
              limit…
            </motion.p>
            <motion.p className="text-amber-950 font-['poppins'] text-xl" variants={fadeIn}>
              …And every great story starts with a spark of curiosity.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageScale}
        >
          <Image
            src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713752/about1_osdjgc.png"
            alt="Work setup with notes and coffee"
            width={500}
            height={900}
            className="rounded-lg shadow-lg w-full max-w-[500px] h-[700px] object-cover"
          />
        </motion.div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-center px-6 py-12 max-w-7xl mx-auto">
        {/* Left Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageScale}
        >
          <Image
            src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713808/service11_vac0on.png"
            alt="Forest Path"
            width={600}
            height={450}
            className="rounded-md object-cover w-9/10 h-auto"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="w-full md:w-1/2 md:pl-10 pt-10 md:pt-0 text-[#3D2B2B]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInRight}
        >
          <motion.h2 className="`text-3xl md:text-6xl font-semibold mb-6 font-['afacad']" variants={fadeIn}>
            This is how <span className=" ">my journey started</span>
            <span className="text-2xl">...</span>
          </motion.h2>

          <motion.div variants={staggerContainer}>
            <motion.p className="text-lg mb-4 font-['poppins']" variants={fadeIn}>
              I ventured into freelancing back in 2023. My core value was always freedom. I sought a career that would
              allow me to embrace this principle fully.
            </motion.p>

            <motion.p className="text-lg mb-4 font-['poppins']" variants={fadeIn}>
              I honed my skills as an operation manager and virtual assistant. <br />I started working with
              entrepreneurs who wanted to <br />
              scale their business without the overwhelm.
            </motion.p>

            <motion.p className="text-lg mb-4 font-['poppins']" variants={fadeIn}>
              I quickly discovered that this work was more than just a means to an end. It was a source of immense
              meaning and fulfilment.
            </motion.p>

            <motion.p className="text-lg mb-4 font-['poppins']" variants={fadeIn}>
              Each day, I woke up excited to tackle new challenges and support business owners in realising their
              dreams.
            </motion.p>

            <motion.p className="text-lg mb-4 font-['poppins']" variants={fadeIn}>
              They can take a step back and relax. This leads to a healthier work-life balance, opening up new
              opportunities for creativity and innovation.
            </motion.p>

            <motion.p
              className="text-lg font-extrabold mt-6 font-['afacad'] text-black uppercase tracking-wide"
              variants={fadeIn}
            >
              THEIR SUCCESS IS MY SUCCESS. BECAUSE HELPING THEM GROW THEIR BUSINESSES AND ACHIEVE THEIR GOALS IS MY
              DRIVING FORCE.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>
      <section
        className="w-full h-auto bg-cover bg-center text-white text-center py-20 px-4"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713758/about7_svf4gm.png')",
        }}
      >
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.h2 className="text-3xl md:text-5xl font-bold mb-4 font-['afacad']" variants={fadeIn}>
            SUCCESS THRIVES ON TIME AND ENERGY
          </motion.h2>
          <motion.h3 className="text-2xl md:text-3xl font-light mb-6 font-['poppins']" variants={fadeIn}>
            (NOT EXHAUSTION AND OVERWHELM)
          </motion.h3>
          <motion.p className="text-base md:text-lg font-medium font-['poppins']" variants={fadeIn}>
            When you aim to grow with OBM and VA support, you focus on building stable wealth and creating a balanced
            lifestyle that aligns with your vision.
          </motion.p>
        </motion.div>
      </section>
      <section className="w-full py-16 px-6 text-center">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.h2 className="text-3xl md:text-7xl font-light mb-2 font-['afacad']" variants={fadeIn}>
            I BELIEVE IN WALKING THE TALK
          </motion.h2>
          <motion.h3 className="text-xl md:text-4xl font-light mb-12 mt-7 font-['poppins']" variants={fadeIn}>
            THIS IS MY FOUNDATION…
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-12">
            {/* First Block */}
            <motion.div variants={fadeInLeft}>
              <motion.div variants={imageScale}>
                <Image
                  src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713755/about8_ept4e0.png"
                  alt="Freedom and Fulfillment"
                  width={240}
                  height={240}
                  className="mx-auto mb-6 w-60 h-auto object-cover"
                />
              </motion.div>
              <motion.h4 className="text-3xl font-medium font-['afacad']" variants={fadeIn}>
                Freedom and Fulfillment
              </motion.h4>
              <motion.p
                className="text-md uppercase tracking-widest text-gray-600 mt-1 mb-4 font-['afacad']"
                variants={fadeIn}
              >
                YOUR BUSINESS, YOUR FREEDOM, YOUR GROWTH
              </motion.p>
              <motion.p className="text-base max-w-md mx-auto font-['poppins']" variants={fadeIn}>
                I believe that your business should grant you freedom, not restrict it. My goal is to help you grow in a
                way that fits your life. Allowing you to take charge and enjoy the process as much as the result.
              </motion.p>
            </motion.div>

            {/* Second Block */}
            <motion.div variants={fadeInRight}>
              <motion.div variants={imageScale}>
                <Image
                  src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713757/about9_ihqzjk.png"
                  alt="Empathy and Care"
                  width={240}
                  height={240}
                  className="mx-auto mb-6 w-60 h-auto object-cover"
                />
              </motion.div>
              <motion.h4 className="text-3xl font-medium font-['afacad']" variants={fadeIn}>
                Empathy and Care
              </motion.h4>
              <motion.p
                className="text-md uppercase tracking-widest text-gray-600 mt-1 mb-4 font-['afacad']"
                variants={fadeIn}
              >
                YOUR WIN, MY WIN
              </motion.p>
              <motion.p className="text-base max-w-md mx-auto font-['poppins'] mt-5" variants={fadeIn}>
                When I work with you, it&apos;s not just business. I put myself in your shoes. I care deeply about your
                success and am committed to helping you thrive.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </section>
      <section className="w-full py-16 px-6 text-center">
        <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-12 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          {/* Authenticity & Transparency */}
          <motion.div variants={fadeInLeft}>
            <motion.div variants={imageScale}>
              <Image
                src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713758/about10_myqvem.png"
                alt="Authenticity & Transparency"
                width={240}
                height={240}
                className="mx-auto mb-6 w-60 h-auto object-cover"
              />
            </motion.div>
            <motion.h4 className="text-3xl font-medium font-['afacad']" variants={fadeIn}>
              Authenticity & Transparency
            </motion.h4>
            <motion.p
              className="text-md uppercase tracking-widest text-gray-600 mt-1 mb-4 font-['afacad']"
              variants={fadeIn}
            >
              WHAT YOU SEE IS WHAT YOU GET
            </motion.p>
            <motion.p className="text-base max-w-md mx-auto font-['poppins']" variants={fadeIn}>
              I believe in building relationships with complete openness. From our first interaction to the last,
              you&apos;ll always know where we stand. My commitment is to be clear, genuine, and real, every step of the
              way.
            </motion.p>
          </motion.div>

          {/* Honesty & Ethical Practices */}
          <motion.div variants={fadeInRight}>
            <motion.div variants={imageScale}>
              <Image
                src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713760/about11_lwn5hv.png"
                alt="Honesty & Ethical Practices"
                width={240}
                height={240}
                className="mx-auto mb-6 mt-5 w-60 h-auto object-cover"
              />
            </motion.div>
            <motion.h4 className="text-3xl font-medium font-['afacad']" variants={fadeIn}>
              Honesty & Ethical Practices
            </motion.h4>
            <motion.p
              className="text-md uppercase tracking-widest text-gray-600 mt-1 mb-4 font-['afacad']"
              variants={fadeIn}
            >
              BUILDING YOUR SUCCESS WITH INTEGRITY
            </motion.p>
            <motion.p className="text-base max-w-md mx-auto font-['poppins']" variants={fadeIn}>
              I value honesty above all else. I don&apos;t claim to be perfect, and I do make mistakes. But, I will
              always be the first to acknowledge and take responsibility for them. I strive to honour my commitments. My
              goal is to ensure you receive the best service possible.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Respect and Collaboration */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.div variants={imageScale}>
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713761/about12_vgyhdv.png"
              alt="Respect and Collaboration"
              width={240}
              height={240}
              className="mx-auto mb-6 w-60 h-auto object-cover"
            />
          </motion.div>
          <motion.h4 className="text-3xl font-medium font-['afacad']" variants={fadeIn}>
            Respect and Collaboration
          </motion.h4>
          <motion.p
            className="text-md uppercase tracking-widest text-gray-600 mt-1 mb-4 font-['afacad']"
            variants={fadeIn}
          >
            OUR MUTUAL RESPECT STRENGTHENS TEAMWORK AND DRIVES SUCCESS
          </motion.p>
          <motion.p className="text-base max-w-md mx-auto font-['poppins']" variants={fadeIn}>
            I believe collaboration flourishes when we value each other&apos;s perspectives. This mutual respect builds
            a strong sense of teamwork that drives your growth and success.
          </motion.p>
        </motion.div>
      </section>
      <section className="relative bg-white px-6 md:px-20 border-t-2 border-[#4A3733]"></section>
      <section className="relative bg-white  px-6 md:px-20 border-t-1 border-[#4A3733]"></section>
      {/* Services Section */}
      <section className="bg-white py px-6 md:px-20 text-center font-['Didot',serif] mt-20">
        {/* Top Text */}
        <motion.div
          className="max-w-4xl mx-auto mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <motion.h2
            className="text-[36px] md:text-[50px] leading-tight font-light tracking-wide uppercase text-black font-['afacad']"
            variants={fadeIn}
          >
            WANNA SCALE YOUR BUSINESS...
          </motion.h2>
          <motion.h2
            className="text-[36px] md:text-[50px] leading-tight font-light tracking-wide uppercase text-black mt-2 font-['afacad']"
            variants={fadeIn}
          >
            WITHOUT THE <span className="font-bold">OVERLOAD</span> ON YOUR SHOULDERS?
          </motion.h2>
          <motion.p
            className="mt-8 text-[26px] tracking-wide text-[#2E2E2E] uppercase font-['poppins']"
            variants={fadeIn}
          >
            HERE&apos;S HOW WE CAN WORK TOGETHER
          </motion.p>

          {/* Arrow */}
          <motion.div
            className="mt-6"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          >
            <span className="text-[36px] text-black select-none">↓</span>
          </motion.div>
        </motion.div>

        {/* Service 1 */}
        <motion.div
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          {/* Text Content */}
          <motion.div className="md:w-2/3 flex gap-6" variants={fadeInLeft}>
            {/* Number */}
            <motion.h3
              className="text-[100px] font-light text-black leading-none"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              1
            </motion.h3>

            {/* Description */}
            <motion.div variants={staggerContainer}>
              <motion.h4
                className="text-[50px] font-normal uppercase text-black border-b border-black pb-1 mb-4 w-fit font-['afacad']"
                variants={fadeIn}
              >
                VIRTUAL ASSISTANT
              </motion.h4>
              <motion.p
                className="text-[26px] text-[#2E2E2E] leading-relaxed tracking-wide font-light font-['poppins']"
                variants={fadeIn}
              >
                YOU WANT A TRUSTED VIRTUAL ASSISTANT
                <br />
                TO HANDLE YOUR ADMIN AND CLIENT COMMUNICATION, FREEING YOU FROM THE DAILY GRIND SO YOU CAN FOCUS ON WHAT
                YOU DO BEST.
              </motion.p>

              <a href="/services/#virtualassistant">
                <motion.button
                  className="mt-6 px-6 py-2 bg-[#4A3733] text-white tracking-widest text-[14px] uppercase rounded-sm font-semibold font-['poppins']"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variants={fadeIn}
                >
                  GET THE DETAILS
                </motion.button>
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div className="md:w-1/3 flex justify-center md:justify-end" variants={imageScale}>
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713713/hero6_li2r1f.png"
              alt="Virtual Assistant"
              width={300}
              height={400}
              className="w-[260px] md:w-[300px] border-[6px] border-[#f4e9de]"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Service 2 */}
      <section className="bg-white px-6 md:px-20 py-20 font-['Didot',serif]">
        <motion.div
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          {/* Image Left */}
          <motion.div className="md:w-1/3 flex justify-center md:justify-right" variants={imageScale}>
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713710/hero7_ol7jzy.png"
              alt="Online Business Manager"
              width={300}
              height={400}
              className="w-[260px] md:w-[300px] border-[6px] border-[#f4e9de]"
            />
          </motion.div>

          {/* Text Right */}
          <motion.div className="md:w-2/3 flex gap-6 text-left" variants={fadeInRight}>
            {/* Number */}
            <motion.h3
              className="text-[100px] font-light text-black leading-none"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              2
            </motion.h3>

            {/* Content */}
            <motion.div variants={staggerContainer}>
              <motion.h4
                className="text-[50px] font-normal uppercase text-black border-b border-black pb-1 mb-4 w-fit font-['afacad']"
                variants={fadeIn}
              >
                ONLINE BUSINESS MANAGER
              </motion.h4>
              <motion.p
                className="text-[24px] text-[#2E2E2E] leading-relaxed tracking-wide font-light max-w-xl font-['poppins']"
                variants={fadeIn}
              >
                YOU WANT A BIG-PICTURE THINKER AND A DOER AS YOUR ONLINE BUSINESS MANAGER. THIS SUPPORT WILL KEEP
                EVERYTHING RUNNING SMOOTHLY, ALLOWING YOU TO FOCUS ON SCALING YOUR BUSINESS AND ACHIEVING YOUR BROADER
                GOALS.
              </motion.p>

              <a href="/services/#onlinebusinessmanager">
                <motion.button
                  className="mt-6 px-6 py-2 bg-[#4A3733] text-white tracking-widest text-[14px] uppercase rounded-sm font-semibold font-['poppins']"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variants={fadeIn}
                >
                  GET THE DETAILS
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Service 3 */}
        <motion.div
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          {/* Text Left */}
          <motion.div className="md:w-2/3 flex gap-6 text-left" variants={fadeInLeft}>
            {/* Number */}
            <motion.h3
              className="text-[100px] font-light text-black leading-none"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              3
            </motion.h3>

            {/* Content */}
            <motion.div variants={staggerContainer}>
              <motion.h4
                className="text-[50px] font-normal uppercase text-black border-b border-black pb-1 mb-4 w-fit font-['afacad']"
                variants={fadeIn}
              >
                60 MINUTE-STRATEGY CONSULTATION
              </motion.h4>
              <motion.p
                className="text-[25px] text-[#2E2E2E] leading-relaxed tracking-wide font-light max-w-xl font-['poppins']"
                variants={fadeIn}
              >
                YOU WANT A STRATEGIC 60-MINUTE CONSULTATION THAT PROVIDES TAILORED ADVICE, AND A ROADMAP FOR TAKING YOUR
                BUSINESS TO THE NEXT LEVEL.
              </motion.p>

              <a href="/services/#consultation">
                <motion.button
                  className="mt-6 px-6 py-2 bg-[#4A3733] text-white tracking-widest text-[14px] uppercase rounded-sm font-semibold font-['poppins']"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variants={fadeIn}
                >
                  GET THE DETAILS
                </motion.button>
              </a>
            </motion.div>
          </motion.div>

          {/* Image Right */}
          <motion.div className="md:w-1/3 flex justify-center md:justify-end" variants={imageScale}>
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713723/hero8_toysbn.png"
              alt="60 Minute Strategy Call"
              width={300}
              height={400}
              className="w-[260px] md:w-[300px] border-[6px] border-[#f4e9de]"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Service 4 */}
      <section className="bg-white px-6 md:px-20 pb-16 font-['Didot',serif] border-b border-black">
        <motion.div
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          {/* Image Left */}
          <motion.div className="md:w-1/3 flex justify-center md:justify-start" variants={imageScale}>
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713714/hero9_fptahl.png"
              alt="Need Something Else"
              width={300}
              height={400}
              className="w-[260px] md:w-[350px] border-[6px] border-[#f4e9de]"
            />
          </motion.div>

          {/* Text Right */}
          <motion.div className="md:w-2/3 flex gap-6 text-left" variants={fadeInRight}>
            {/* Number */}
            <motion.h3
              className="text-[100px] font-light text-black leading-none"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              4
            </motion.h3>

            {/* Content */}
            <motion.div variants={staggerContainer}>
              <motion.h4
                className="text-[50px] font-normal uppercase text-black border-b border-black pb-1 mb-4 w-fi font-['afacad']"
                variants={fadeIn}
              >
                NEED SOMETHING THAT ISN&apos;T LISTED?
              </motion.h4>
              <motion.p
                className="text-[23px] text-[#2E2E2E] leading-relaxed tracking-wide font-light max-w-xl font-['poppins']"
                variants={fadeIn}
              >
                YOU WANT A BIG-PICTURE THINKER AND A DOER AS YOUR ONLINE BUSINESS MANAGER. THIS SUPPORT WILL KEEP
                EVERYTHING RUNNING SMOOTHLY, ALLOWING YOU TO FOCUS ON SCALING YOUR BUSINESS AND ACHIEVING YOUR BROADER
                GOALS.
              </motion.p>

              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdUaQXeIheNXx6Z3TtMx8yQX-3FOefXzucMalGJgJ0HNiFtxA/viewform?usp=header">
                <motion.button
                  className="mt-6 px-6 py-2 bg-[#4A3733] text-white tracking-widest text-[14px] uppercase rounded-sm font-semibold font-['poppins']"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variants={fadeIn}
                >
                  GET THE DETAILS
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-[#483435] text-white px-6 py-16">
        <motion.div
          className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          {/* Text Content */}
          <motion.div className="text-center lg:text-left max-w-2xl" variants={fadeInLeft}>
            <motion.h2
              className="text-3xl sm:text-5xl font-light tracking-widest mb-7 font-['afacad']"
              variants={fadeIn}
            >
              I AM ALWAYS HERE FOR YOU
            </motion.h2>
            <motion.p
              className="uppercase font-semibold tracking-wider text-lg sm:text-xl mb-8 font-['poppins']"
              variants={fadeIn}
            >
              Still have big questions? Maybe even small ones? I am here to answer all of them.
            </motion.p>
            <motion.a
  href="https://docs.google.com/forms/d/e/1FAIpQLSdUaQXeIheNXx6Z3TtMx8yQX-3FOefXzucMalGJgJ0HNiFtxA/viewform?usp=header"
  className="bg-white text-black px-6 py-3 font-medium tracking-widest rounded hover:bg-gray-200 transition font-['poppins']"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  variants={fadeIn}
>
  GET THE FREEDOM-FOCUSED SUPPORT YOU NEED
</motion.a>

          </motion.div>

          {/* Image */}
          <motion.div className="w-full max-w-sm" variants={imageScale}>
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713763/about13_ex4zcb.png"
              alt="Support Person"
              width={400}
              height={500}
              className="w-full h-auto object-cover border-8 border-white"
            />
          </motion.div>
        </motion.div>
      </section>
      <Footer />
    </div>
  )
}
