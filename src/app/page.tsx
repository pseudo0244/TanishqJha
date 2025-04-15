'use client'
import Header from "./components/Header"
import { SlCheck } from "react-icons/sl"
import Footer from "./components/Footer"
import Image from "next/image"
import { useEffect } from "react"
import confetti from "canvas-confetti"


export default function Home() {
  useEffect(() => {
    // Run confetti when component mounts
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }, [])
  return (
    <main>
      <Header />
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 py-20 max-w-7xl mx-auto !bg-white">
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-8">
          <h1 className="text-2xl md:text-3xl text-black font-poppins">
            SECOND BRAIN FOR ENTREPRENEURS <br />
            READY TO SCALE... WITHOUT EXHAUSTION
          </h1>
          <p className="text-lg text-black/90 font-poppins">
            From Strategy To Implementation With Your Freedom- <br />
            Focused OBM & VA
          </p>

          <div className="space-y-4 mt-6 text-[#2f2f2f]">
            <p className="flex items-center text-base font-aboreto">
              <SlCheck className="text-[#4e3b39] mr-3 text-xl" />I make proactive decisions and manage key aspects of
              your business
            </p>
            <p className="flex items-center text-base font-aboreto">
              <SlCheck className="text-[#4e3b39] mr-3 text-xl" />
              Ensuring everything runs smoothly
            </p>
            <p className="flex items-center text-base font-aboreto">
              <SlCheck className="text-[#4e3b39] mr-3 text-xl" />
              Without the need for your constant intervention
            </p>
          </div>

          <div className="flex gap-6 mt-10">
          <a href="/about">
  <button className="bg-[#4e3b39] text-white px-8 py-4 uppercase tracking-widest text-sm rounded-md">
    Tell Me More
  </button>
</a>
<a href="/services">
  <button className="bg-[#4e3b39] text-white px-8 py-4 uppercase tracking-widest text-sm rounded-md">
    View All Services
  </button>
</a>

          </div>
        </div>

        {/* Right Section (Images) */}
        <div className="absolute top-30 right-0 w-1/3 h-full z-0 overflow-hidden">
          {/* Background image */}
          <Image
            src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713708/hero1_ejhpgo.png"
            alt="Background"
            width={400}
            height={500}
            className="absolute right-0 w-[3400px] md:w-[400px] rounded-lg shadow-lg z-0"
          />
          {/* Overlay image */}
          <Image
            src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713708/hero2_n9mw0u.png"
            alt="Foreground"
            width={340}
            height={400}
            className="absolute top-[-10] right-30 translate-y-[70px] translate-x-[-20px] w-[300px] md:w-[340px] rounded-lg shadow-xl z-10"
          />
        </div>
      </section>

      {/* Still Waiting Section */}
      <section className="bg-white py-30 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-16">
          {/* Left Image */}
          <div className="w-full md:w-[50%]">
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713709/hero3_smedab.png"
              alt="Support"
              width={616}
              height={631}
              className="w-[616px] h-[631px] object-cover rounded-b-none"
            />
          </div>

          {/* Right Text Content */}
          <div className="w-full md:w-[50%] text-[#3b2f30]">
            <h2 className="text-[64px] md:text-[50px] font-bold leading-snug font-afacad uppercase tracking-tight">
              STILL WAITING FOR THE RIGHT
              <br />
              TIME TO HIRE SUPPORT...
            </h2>

            <p className="text-[20px] md:text-[24px] font-afacad tracking-wide mt-6">
              .......LIKE REACHING A CERTAIN NUMBER OF CLIENTS
              <br />
              OR ACHIEVING A REVENUE GOAL?
            </p>

            <p className="italic text-[20px] md:text-[24px] font-bold mt-8 font-afacad">IMAGINE THIS.....</p>

            <div className="space-y-4 mt-6 text-[16px] md:text-[18px] font-medium italic font-afacad leading-relaxed">
              <p>WHAT IF YOU COULD BRING IN THE RIGHT EXPERTISE TODAY?</p>
              <p>YOU&apos;D FINALLY FEEL AT EASE. NO MORE BEING WIRED 24/7.</p>
              <p>YOUR BUSINESS WOULD KEEP MOVING FORWARD, EVEN WHEN YOU&apos;RE NOT GLUED TO IT.</p>
              <p>DON&apos;T LET HESITATION HOLD YOU BACK FROM ACHIEVING YOUR BUSINESS GOALS.</p>
            </div>
          </div>
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
        <div className="relative z-10 max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-white drop-shadow-md font-aboreto">
            ACCELERATE YOUR BUSINESS…SUSTAINABLY
          </h2>
          <p className="text-lg md:text-xl mt-4 font-light italic text-white drop-shadow-md font-afacad">
            (AKA GOODBYE OVERWHELM, WELCOME CLARITY!)
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold mt-10 text-white drop-shadow-md font-poppins">
            Here&apos;s A Glimpse Of Client Love
          </h3>
        </div>

        {/* Opaque content card */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto p-10 rounded-xl shadow-2xl">
          {/* Client Image */}
          <div className="flex-shrink-0">
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713721/sohan_dgv1qs.png"
              alt="Client"
              width={256}
              height={256}
              className="w-64 h-64 object-cover border-8 border-white shadow-xl rounded"
            />
          </div>

          {/* Testimonial Text */}
          <div className="text-left text-white space-y-5 max-w-xl text-base md:text-lg leading-relaxed font-afacad ">
            <p>
              <em>Tanishq was amazing as my Online Business Manager</em> when I launched my digital product.
            </p>
            <p>
              She really helped me with everything from managing my daily tasks to making sure our product launch went
              smoothly. As a coach who helps people create content, having Tanishq on board was a huge relief.
            </p>
            <p>
              She took care of all the details and challenges, allowing me to focus on my first digital product and
              creating content. If you need someone to help you organise and grow your online business, I highly
              recommend Tanishq!
            </p>
            <p className="font-semibold italic font-afacad">Anmol, Coach, Company Name</p>
          </div>
        </div>
      </section>

      {/* Time Section */}
<section className="bg-white py-24 px-6 md:px-20 text-black font-serif">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
  {/* Left Column - Clock Image */}
  <div className="flex justify-start">
    <Image
      src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713709/hero4_rld5y8.png"
      alt="Clock"
      width={600}
      height={600}
      className="w-full max-w-md rounded"
    />
  </div>

  {/* Right Column - Text */}
  <div className="flex flex-col justify-start text-left -ml-6 md:-ml-12">
    <h2 className="text-[32px] md:text-[32px] font-light uppercase leading-tight tracking-wide">
      <br></br>
      YOUR TIME AND ENERGY ARE MY TOP PRIORITIES
    </h2>
    <p className="mt-6 text-[24px] md:text-[32px] uppercase tracking-widest">
      SO YOU CAN...
    </p>

    <div className="relative mt-20">
      <span className="text-[500px] text-gray-200 absolute -left-20 -top-20 select-none leading-none z-0">“</span>
      <p className="text-[32px] md:text-[32px] font-light relative z-10 leading-snug tracking-tight">
        FOCUS ON GROWTH, NOT THE GRIND, AND <br /> BUILD YOUR FREEDOM-FOCUSED BUSINESS
      </p>
    </div>
  </div>
</div>


  {/* Bottom Section */}
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start mt-28">
    {/* Left Column - How it's done */}
    <div>
      <h3 className="text-2xl md:text-3xl font-bold mb-8">Let&apos;s dive into how it&apos;s done:</h3>
      <div className="space-y-6 text-base md:text-lg font-medium leading-relaxed">
        <p>
          <strong>By Streamlining Your Projects, Team, Operations, And Client Communication.</strong>
        </p>
        <p>I Ensure That Everything Runs Smoothly And Efficiently.</p>
        <p>
          This Empowers You To Step Back, Focus On Business Growth, And Think Strategically— Without Constantly Putting Out Fires.
        </p>
        <p>
          Imagine The Mental Space You&apos;ll Gain When You&apos;re No Longer Juggling A Million Tasks At Once.
        </p>
      </div>
    </div>

    {/* Right Column - Desk Image with Quote */}
    <div className="relative flex justify-center">
      <Image
        src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713712/hero5_t6psvg.png"
        alt="Desk with notes and coffee"
        width={600}
        height={400}
        className="w-full max-w-md rounded shadow-md"
      />
      <span className="text-[180px] text-amber-950 absolute bottom-[-40px] right-[-20px] leading-none select-none z-0">”</span>
    </div>
  </div>
</section>


      {/* About Me Section */}
<section className="relative bg-white py-20 px-6 md:px-20 border-t-4 border-[#4A3733]">
  <div className="max-w-7xl mx-auto grid md:grid-cols-[auto_1fr] items-start gap-10 relative">
    
    {/* Image + Overlay */}
    <div className="relative flex items-center z-30">
      <Image
        src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713708/hero2_n9mw0u.png"
        alt="Tanishq"
        width={400}
        height={500}
        className="w-[350px] md:w-[400px] rounded-md shadow-xl -mb-12 mt-20 md:-mb-20 md:-ml-5 relative z-30"
      />
    </div>

    {/* Right Side Content */}
    <div className="flex flex-col w-full relative z-10">
      
      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-5xl font-light uppercase text-[#4A3733]">HI, I&apos;M TANISHQ!</h2>
        <h3 className="text-2xl md:text-4xl font-light text-[#4A3733] mt-2">FOUNDER OF TANISHQJHA.CO</h3>
        <p className="italic text-lg md:text-xl mt-2 text-[#4A3733]">
          YOUR FREEDOM-PARTNER, YOUR GO-TO FOR GETTING THINGS DONE
        </p>
      </div>

      {/* Brown Box */}
      <div className="bg-[#4A3733] text-white p-6 md:p-10 space-y-6 text-base md:text-lg font-light rounded-sm relative z-20">
        <p className="uppercase font-semibold tracking-wide">(PRIORITIZING IS MY STRENGTH!)</p>
        <ul className="space-y-6">
          <li className="flex items-start gap-3">
            <SlCheck className="mt-1 text-xl" />
            <span>CAN SMART STRATEGY AND SEAMLESS EXECUTION AMPLIFY YOUR FREEDOM?</span>
          </li>
          <li className="flex items-start gap-3">
            <SlCheck className="mt-1 text-xl" />
            <span>
              ABSOLUTELY! I DON&apos;T JUST TACKLE YOUR TO-DO LIST—
              <br />I BLEND OBM AND VA EXPERTISE TO ENHANCE YOUR DAILY OPERATIONS AND STRATEGIC PLANNING.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <SlCheck className="mt-1 text-xl" />
            <span>
              FROM BIG-PICTURE PROJECTS TO INBOX MASTERY, I&apos;M THE EFFICIENCY-DRIVEN PARTNER YOUR BUSINESS CRAVES.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <SlCheck className="mt-1 text-xl" />
            <span>
              STEP INTO A WORLD WHERE STRATEGY MEETS ACTION, AND OVERWHELM BECOMES A THING OF THE PAST.
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section className="relative bg-white  px-6 md:px-20 border-t-4 border-[#4A3733]"></section>
      {/* Services Section */}
      <section className="bg-white py px-6 md:px-20 text-center font-['Didot',serif]">
        {/* Top Text */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-[36px] md:text-[42px] leading-tight font-light tracking-wide uppercase text-black">
            WANNA SCALE YOUR BUSINESS...
          </h2>
          <h2 className="text-[36px] md:text-[42px] leading-tight font-light tracking-wide uppercase text-black mt-2">
            WITHOUT THE <span className="font-bold">OVERLOAD</span> ON YOUR SHOULDERS?
          </h2>
          <p className="mt-8 text-[22px] tracking-wide text-[#2E2E2E] uppercase">
            HERE&apos;S HOW WE CAN WORK TOGETHER
          </p>

          {/* Arrow */}
          <div className="mt-6">
            <span className="text-[36px] text-black select-none">↓</span>
          </div>
        </div>

        {/* Service 1 */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12 text-left">
          {/* Text Content */}
          <div className="md:w-2/3 flex gap-6">
            {/* Number */}
            <h3 className="text-[60px] font-light text-black leading-none">1</h3>

            {/* Description */}
            <div>
              <h4 className="text-[28px] font-normal uppercase text-black border-b border-black pb-1 mb-4 w-fit">
                VIRTUAL ASSISTANT
              </h4>
              <p className="text-[18px] text-[#2E2E2E] leading-relaxed tracking-wide font-light">
                YOU WANT A TRUSTED VIRTUAL ASSISTANT
                <br />
                TO HANDLE YOUR ADMIN AND CLIENT COMMUNICATION,
                <br />
                FREEING YOU FROM THE DAILY GRIND
                <br />
                SO YOU CAN FOCUS ON WHAT YOU DO BEST.
              </p>

              <a href="/services">
              <button className="mt-6 px-6 py-2 bg-[#4A3733] text-white tracking-widest text-[14px] uppercase rounded-sm font-semibold">
               GET THE DETAILS
              </button>
              </a>

            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713713/hero6_li2r1f.png"
              alt="Virtual Assistant"
              width={300}
              height={400}
              className="w-[260px] md:w-[300px] border-[6px] border-[#f4e9de]"
            />
          </div>
        </div>
      </section>

      {/* Service 2 */}
      <section className="bg-white px-6 md:px-20 py-20 font-['Didot',serif]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12 mb-20">
          {/* Image Left */}
          <div className="md:w-1/3 flex justify-center md:justify-start">
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713710/hero7_ol7jzy.png"
              alt="Online Business Manager"
              width={300}
              height={400}
              className="w-[260px] md:w-[300px] border-[6px] border-[#f4e9de]"
            />
          </div>

          {/* Text Right */}
          <div className="md:w-2/3 flex gap-6 text-left">
            {/* Number */}
            <h3 className="text-[60px] font-light text-black leading-none">2</h3>

            {/* Content */}
            <div>
              <h4 className="text-[26px] font-normal uppercase text-black border-b border-black pb-1 mb-4 w-fit">
                ONLINE BUSINESS MANAGER
              </h4>
              <p className="text-[18px] text-[#2E2E2E] leading-relaxed tracking-wide font-light max-w-xl">
                YOU WANT A BIG-PICTURE THINKER AND A DOER
                <br />
                AS YOUR ONLINE BUSINESS MANAGER. THIS SUPPORT
                <br />
                WILL KEEP EVERYTHING RUNNING SMOOTHLY, ALLOWING
                <br />
                YOU TO FOCUS ON SCALING YOUR BUSINESS AND
                <br />
                ACHIEVING YOUR BROADER GOALS.
              </p>

              <a href="/services">
              <button className="mt-6 px-6 py-2 bg-[#4A3733] text-white tracking-widest text-[14px] uppercase rounded-sm font-semibold">
               GET THE DETAILS
              </button>
              </a>
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Text Left */}
          <div className="md:w-2/3 flex gap-6 text-left">
            {/* Number */}
            <h3 className="text-[60px] font-light text-black leading-none">3</h3>

            {/* Content */}
            <div>
              <h4 className="text-[26px] font-normal uppercase text-black border-b border-black pb-1 mb-4 w-fit">
                60 MINUTE-STRATEGY CONSULTATION
              </h4>
              <p className="text-[18px] text-[#2E2E2E] leading-relaxed tracking-wide font-light max-w-xl">
                YOU WANT A STRATEGIC 60-MINUTE CONSULTATION
                <br />
                THAT PROVIDES TAILORED ADVICE, AND A ROADMAP FOR
                <br />
                TAKING YOUR BUSINESS TO THE NEXT LEVEL.
              </p>

              <a href="/services">
              <button className="mt-6 px-6 py-2 bg-[#4A3733] text-white tracking-widest text-[14px] uppercase rounded-sm font-semibold">
               GET THE DETAILS
              </button>
              </a>
            </div>
          </div>

          {/* Image Right */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713723/hero8_toysbn.png"
              alt="60 Minute Strategy Call"
              width={300}
              height={400}
              className="w-[260px] md:w-[300px] border-[6px] border-[#f4e9de]"
            />
          </div>
        </div>
      </section>

      {/* Service 4 */}
      <section className="bg-white px-6 md:px-20 pb-16 font-['Didot',serif] border-b border-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Image Left */}
          <div className="md:w-1/3 flex justify-center md:justify-start">
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713714/hero9_fptahl.png"
              alt="Need Something Else"
              width={300}
              height={400}
              className="w-[260px] md:w-[300px] border-[6px] border-[#f4e9de]"
            />
          </div>

          {/* Text Right */}
          <div className="md:w-2/3 flex gap-6 text-left">
            {/* Number */}
            <h3 className="text-[60px] font-light text-black leading-none">4</h3>

            {/* Content */}
            <div>
              <h4 className="text-[26px] font-normal uppercase text-black border-b border-black pb-1 mb-4 w-fit">
                NEED SOMETHING THAT ISN&apos;T LISTED?
              </h4>
              <p className="text-[18px] text-[#2E2E2E] leading-relaxed tracking-wide font-light max-w-xl">
                YOU WANT A BIG-PICTURE THINKER AND A DOER
                <br />
                AS YOUR ONLINE BUSINESS MANAGER. THIS SUPPORT
                <br />
                WILL KEEP EVERYTHING RUNNING SMOOTHLY, ALLOWING
                <br />
                YOU TO FOCUS ON SCALING YOUR BUSINESS AND
                <br />
                ACHIEVING YOUR BROADER GOALS.
              </p>

              <a href="/services">
              <button className="mt-6 px-6 py-2 bg-[#4A3733] text-white tracking-widest text-[14px] uppercase rounded-sm font-semibold">
               GET THE DETAILS
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* You're Not Alone Section */}
<section className="font-['Didot',serif] border-t border-black bg-white py-12 px-6 md:px-20">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">
    
    {/* Image Section - Small */}
    <div className="md:w-1/3 flex justify-center md:justify-start">
      <Image
        src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713720/tanishq_dncoua.png"
        alt="Support Person"
        width={450}
        height={500}
        className="border-4 rounded-md shadow-md max-w-[700px]"
      />
    </div>

    {/* Text Section - Expanded */}
    <div className="md:w-3/5 bg-[#EBD3C1] p-8 rounded-md">
      <h2 className="text-[28px] text-black font-normal leading-snug mb-2">
        YOU&apos;RE NOT DOING IT ALONE ANYMORE...
      </h2>
      <h3 className="text-[20px] text-white font-semibold tracking-wide mb-4 uppercase">INSTEAD...</h3>

      <p className="italic text-[17px] text-[#2E2E2E] mb-4 leading-relaxed">
        You now have someone who&apos;s uniquely positioned as your trusted support system, ensuring you make the
        most of your time and resources.
      </p>
      <p className="italic text-[17px] text-[#2E2E2E] mb-4 leading-relaxed">
        After all, there are only so many hours in a day.
      </p>
      <p className="italic text-[17px] text-[#2E2E2E] mb-4 leading-relaxed">
        While you can manage tasks yourself, every moment spent on those details takes away from your capacity to
        onboard larger clients.
      </p>
      <p className="italic text-[17px] text-[#2E2E2E] mb-6 leading-relaxed">
        No more exhausting back-and-forth with clients and leads.
      </p>
      <p className="text-[17px] font-bold text-black tracking-wide leading-relaxed">
        NOW, YOU&apos;LL FINALLY HAVE THE ENERGY TO FOCUS ON WHAT TRULY MATTERS—YOUR DELIVERABLES.
      </p>
    </div>
  </div>
</section>


     {/* Time is Precious Section */}
<section className="font-['Didot',serif] bg-white pt-12 px-6 md:px-20">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
    {/* Image */}
    <div className="md:w-1/2 flex justify-center md:justify-start">
      <Image
        src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713723/tanishq2_zg1hdb.png"
        alt="Precious Time"
        width={400}
        height={500}
        className="max-w-[400px]"
      />
    </div>

    {/* Text */}
    <div className="">
      <h2 className="text-[42px] md:text-[30px] font-bold text-black mb-2">
        TIME <span className="font-normal">IS ONE OF THE MOST PRECIOUS RESOURCES</span>
      </h2>
      <p className="italic text-[27px] text-black mb-4">
        If you find yourself in this situation most of the time...
      </p>
      <p className="text-[23px] text-[#2E2E2E] leading-relaxed mb-4">
        You feel overwhelmed by managing everything on your own while trying to find your way.
      </p>
      <p className="text-[23px] text-[#2E2E2E] leading-relaxed mb-4">
        You have a team. But as the go-to person, you end up handling all the questions, which can quickly become
        overwhelming.
      </p>
      <p className="text-[23px] text-[#2E2E2E] leading-relaxed mb-4">
        Your business relies solely on you. This makes it difficult to take breaks and affects your relationships,
        mental health, and motivation.
      </p>
    </div>
  </div>

  {/* CTA Section */}
  <div className="text-center mt-10">
    <h3 className="text-[16px] md:text-[20px] font-bold text-black mb-4 tracking-wide uppercase">
      EXPLORE HOW I CAN HELP YOUR BUSINESS THRIVE WITH MORE FLEXIBILITY AND LESS HUSTLE
    </h3>
    <a href="https://calendly.com/jhatanishq2504/30min">
    <button className="bg-[#EBD3C1] border-none text-[#2E2E2E] text-[14px] px-6 py-3 rounded-sm tracking-widest shadow-none hover:opacity-90 transition">
      SCHEDULE YOUR COMPLIMENTARY CALL
    </button>
    </a>
  </div>
</section>
<br></br>
<section className="font-['Didot',serif] border-t border-black bg-white py-1 px-6 md:px-20"></section>
      {/* What Will You Get Section */}
      <section className="bg-white px-6 py-12 md:px-20 font-['Didot',serif">
        <h2 className="text-center text-[28px] italic underline mb-10 text-[#3B2F2F]">
          WHAT WILL YOU GET OUT OF THIS NO- OBLIGATION OFFER ?
        </h2>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">
          {/* Left Image with Overlay Box */}
          <div className="relative w-full md:w-[300px] min-w-[260px] flex justify-center md:justify-start">
            {/* Brown Background Box Behind the Image */}
            <div className="absolute top-6 left-0 w-[260px] h-[340px] bg-[#3B2F2F] -z-10"></div>
            {/* Actual Image Slightly Shifted Right */}
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713712/hero10_gffdi1.png"
              alt="Coffee Cup"
              width={300}
              height={350}
              className="w-[300px] h-[350px] object-cover relative left-4"
            />
          </div>

          {/* Right Steps Box */}
          <div className="bg-[#F3E7DD] border border-gray-300 p-8 w-full text-[18px] text-black leading-relaxed">
            <div className="mb-4">
              <span className="text-[#8D5F42] font-semibold mr-4 text-[25px]">01</span>
              BOOK A TIME THAT WORKS FOR YOU AND FILL OUT THE FORM.
            </div>
            <div className="mb-4">
              <span className="text-[#8D5F42] font-semibold mr-4 text-[25px]">02</span>
              RECEIVE A CONFIRMATION EMAIL WITH ALL THE CALL DETAILS.
            </div>
            <div className="mb-4">
              <span className="text-[#8D5F42] font-semibold mr-4 text-[25px]">03</span>
              DURING OUR CALL, WE&apos;LL EXPLORE YOUR BUSINESS NEEDS
              <br />
              AND HOW MY SERVICES CAN SUPPORT YOU.
            </div>
            <div className="mb-4">
              <span className="text-[#8D5F42] font-semibold mr-4 text-[25px]">04</span>
              IF WE DECIDE TO COLLABORATE, I&apos;LL SEND YOU A PROPOSAL FOR REVIEW
            </div>
            <div>
              <span className="text-[#8D5F42] font-semibold mr-4 text-[25px]">05</span>
              ONCE AGREED, SIGN THE CONTRACT AND MAKE THE PAYMENT TO KICK THINGS OFF
            </div>
          </div>
        </div>
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
        <div className="relative z-10 max-w-7xl mx-auto text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold mt-10 text-white drop-shadow-md font-poppins">
          HAVING TANISHQ ON MY TEAM WAS AN ABSOLUTE BLESSING.
          </h3>
        </div>

        {/* Opaque content card */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto p-10 rounded-xl shadow-2xl">
          {/* Client Image */}
          <div className="flex-shrink-0">
            <Image
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713721/sohan_dgv1qs.png"
              alt="Client"
              width={256}
              height={256}
              className="w-90 h-90 object-cover border-8 border-white shadow-xl rounded"
            />
          </div>

          {/* Testimonial Text */}
          <div className="text-left text-white space-y-5 max-w-xl text-base md:text-lg leading-relaxed font-afacad ">
            <p>
              <em>Tanishq was amazing as my Online Business Manager</em> when I launched my digital product.
            </p>
            <p>
              She really helped me with everything from managing my daily tasks to making sure our product launch went
              smoothly. As a coach who helps people create content, having Tanishq on board was a huge relief.
            </p>
            <p>
              She took care of all the details and challenges, allowing me to focus on my first digital product and
              creating content. If you need someone to help you organise and grow your online business, I highly
              recommend Tanishq!
            </p>
            <p className="font-semibold italic font-afacad">Anmol, Coach, Company Name</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
