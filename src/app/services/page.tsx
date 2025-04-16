"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"
import ProcessSection from "../components/process-section"
import { SlCheck } from "react-icons/sl";
import Image from "next/image";

const ServicesPage = () => {
  return (
    <>
      <Header />
      <div className="relative w-full h-screen overflow-hidden bg-black">
        {/* Background Image */}
        <img
          src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713799/service1_inaymw.png"
          alt="Bg1"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
  
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-start justify-center px-6 z-10">
          <div className="max-w-5xl text-white text-left">
          <h1 className="text-[50px] md:text-[50px] font-light leading-tight mb-6 font-['Poppins'] pt-28">
  RECLAIM YOUR TIME AND ENERGY WITH <br />
  GROWTH-DRIVEN OBM AND VA SERVICES
</h1>

  
            <p className="text-[50px] md:text-[40px] font-light mb-4">GO FROM…</p>
  
            <p className="text-[50px] md:text-[35px] py-10 font-light mb-8">
              OVERWHELMED BY ENDLESS TASKS, <br />
              LOST LEADS, AND BURNOUT… <br />
              TO-
            </p>
          </div>
  
          <div className="absolute right-6 top-1/2 transform -translate-y-1/100 text-white font-['arberto']D7D3BF">
            <p className="text-[50px] md:text-[35px] font-light">
            <span className="font-light uppercase">
            Streamlined operations, steady <br />
             growth — without the chaos
          </span>

            </p>
          </div>
  <br></br>
          <div className="w-full flex justify-center mt-10">
            <button className="px-6 py-3 bg-[#D7D3BF] text-black font-semibold tracking-wide rounded-md shadow-md hover:bg-gray-200 transition">
              LET&apos;S TALK
            </button>
          </div>
        </div>
      </div>  
            <section className="relative w-full bg-white overflow-hidden">
  {/* Background image */}
  <div className="absolute inset-0 w-full h-full">
    <img
      src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713803/service3_v8emjp.png"
      alt="Bg11"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Content container */}
  <div className="relative z-10 flex flex-col md:flex-row max-w-6xl mx-auto p-6 md:p-16 items-center justify-center">
    {/* Left - Lady image */}
    <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden">
        <img
          src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713796/service2_rsobm1.png"
          alt="Tanishq Testimonial"
          className="w-[300px] md:w-[340px] h-auto object-cover"
        />
      </div>
    </div>

    {/* Right - Text box */}
    <div className="w-full md:w-1/2 bg-white bg-opacity-95 rounded-xl shadow-xl p-6 md:p-10 text-black flex flex-col justify-between">
      <p className="text-md md:text-lg font-semibold mb-4">
        IF YOU NEED SOMEONE TO HELP YOU ORGANISE AND GROW YOUR ONLINE BUSINESS, I HIGHLY RECOMMEND TANISHQ!
      </p>
      <p className="text-sm md:text-base mb-4">
        <strong>Tanishq</strong> was amazing as my Online Business Manager when I launched my digital product.
      </p>
      <p className="text-sm md:text-base mb-4">
        She really helped me with everything from managing my daily tasks to making sure our product launch went
        smoothly. As a coach who helps people create content, having Tanishq on board was a huge relief.
      </p>
      <p className="text-sm md:text-base mb-4">
        She took care of all the details and challenges, allowing me to focus on my first digital product and
        creating content. If you need someone to help you organise and grow your online business, I highly
        recommend Tanishq!
      </p>
      <p className="text-sm md:text-base font-semibold">Anmol, Coach, Company Name</p>
    </div>
  </div>
</section>



      <section className=" flex flex-col md:flex-row justify-between items-start px-6 md:px-20 py-14 font-serif text-[#141414]">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-medium tracking-wide leading-snug font-['aboreto']">
            YOUR TIME AND ENERGY ARE
            <br />
            <span className="block">MY TOP PRIORITIES</span>
          </h1>
          <p className="text-[#444] text-xl mt-4 mb-6 font-['afacad']">
            The Flexibility And Balance You Wished For Now Feel Just Out Of Reach
          </p>

          <h2 className="text-xl font-light mb-4 font-['poppins']">You Are Making Money. But Here&apos;s The Catch…</h2>

          <ul className="space-y-4 text-xl font-['afacad']">
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
        </div>

        <div className="w-full md:w-1/3 mt-10 md:mt-0 flex flex-col items-center">
          <img src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713800/service4_qhqdid.png" alt="Clock" className="rounded-md w-full h-auto object-contain" />
          <p className="italic text-2xl mt-4 text-left text-[#141414] font-['poppins'] font-semibold">
            IT DOESN&apos;T HAVE TO BE THIS
            <br />
            <span className="block">WAY….</span>
          </p>
        </div>
      </section>

      <section className="bg-white px-6 md:px-20 py-14 flex flex-col md:flex-row items-center justify-between font-sans text-[#141414]">
        <div className="w-full md:w-1/3 mb-10 md:mb-0">
          <img src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713810/service6_vehgza.png" alt="Forest Path" className="w-full h-auto object-cover" />
        </div>

        <div className="w-full md:w-3/5 md:pl-12 text-left">
          <h1 className="text-2xl md:text-3xl font-extrabold uppercase leading-snug font-['afacad']">
            THE MOST EFFICIENT WAY TO ACHIEVE <br />
            THIS IS BY PARTNERING WITH AN EXPERT <br />
            TO STREAMLINE YOUR OPERATIONS
          </h1>

          <p className="text-[#777] tracking-wide mt-4 text-sm md:text-base uppercase font-['aboreto']">
            This will align your goals with your business and personal <br />
            life. Allowing you to work with more focus and clarity.
          </p>

          <p className="text-lg md:text-2xl mt-6 leading-relaxed font-['afacad']">
            Think about how much time you&apos;d gain to focus on <br />
            your true priorities. Letting an expert handle the <br />
            day-to-day tasks that keep everything running <br />
            smoothly.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py px-6 md:px-20 text-center font-['Didot',serif]">
        {/* Top Text */}
        <div className="max-w-4xl mx-auto mb-20 py-10 ">
          <h2 className="text-[36px] md:text-[35px] leading-tight font-light tracking-wide uppercase text-black font-['poppins']">
            WANNA SCALE YOUR BUSINESS...
          </h2>
          <h2 className="text-[36px] md:text-[35px] leading-tight font-light tracking-wide uppercase text-black mt-2 font-['poppins']">
            WITHOUT THE <span className="font-light">OVERLOAD</span> ON YOUR SHOULDERS?
          </h2>
          <p className="mt-8 text-[22px] tracking-wide text-[#2E2E2E] uppercase font-['aboreto']">HERE&apos;S HOW WE CAN WORK TOGETHER</p>

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

              <button className="mt-6 px-6 py-2 bg-[#4A3733] text-white tracking-widest text-[14px] uppercase rounded-sm font-semibold">
                GET THE DETAILS
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <img
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713713/hero6_li2r1f.png"
              alt="Virtual Assistant"
              className="w-[260px] md:w-[300px] border-[6px] border-[#f4e9de]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 md:px-20 py-20 font-['Didot',serif]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12 mb-20">
          {/* Image Left */}
          <div className="md:w-1/3 flex justify-center md:justify-start">
            <img
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713710/hero7_ol7jzy.png"
              alt="Online Business Manager"
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

              <button className="mt-6 px-6 py-2 bg-[#4A3733] text-white tracking-widest text-[14px] uppercase rounded-sm font-semibold">
                GET THE DETAILS
              </button>
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

              <button className="mt-6 px-6 py-2 bg-[#4A3733] text-white tracking-widest text-[14px] uppercase rounded-sm font-semibold">
                GET THE DETAILS
              </button>
            </div>
          </div>

          {/* Image Right */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <img
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713714/IMG20241031150823_5_ixi4ia.png"
              alt="60 Minute Strategy Call"
              className="w-[260px] md:w-[300px] border-[6px] border-[#f4e9de]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 md:px-20 pb-16 font-['Didot',serif]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Image Left */}
          <div className="md:w-1/3 flex justify-center md:justify-start">
            <img
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713714/hero9_fptahl.png"
              alt="Need Something Else"
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

              <button className="mt-6 px-6 py-2 bg-[#4A3733] text-white tracking-widest text-[14px] uppercase rounded-sm font-semibold">
                GET THE DETAILS
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
  <h1 className="text-[50px] font-light text-black leading-none">ONGOING SUPPORT</h1>
</div>

      <section className="bg-white px-6 md:px-20 py-16 flex flex-col md:flex-row items-start justify-between font-sans text-[#141414] gap-10">
        {/* Image */}
        <div className="w-full md:w-[42%]">
          <img src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713810/service6_vehgza.png" alt="Support Forest Path" className="w-full h-auto object-cover" />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-[55%] text-left">
          <h1 className="text-[26px] md:text-[32px] font-light uppercase inline-block pb-1 mb-4 font-['poppins'] underline">
            ONLINE BUSINESS MANAGER
          </h1>

          <p className="text-base md:text-xl mb-3 leading-relaxed font-['afacad']">
            You Want Dedicated Support As Your Operations Manager To Ensure
            <br />
            Your Business Runs Smoothly And Your Team Performs Seamlessly.
          </p>

          <p className="font-extrabold mb-6 font-['afacad'] text-xl">
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
          <button className="mt-6 px-6 py-2 text-white bg-[#4B3A36] hover:bg-[#362825] text-sm tracking-wide uppercase font-['poppins'] rounded">
            GET THE DETAILS
          </button>
        </div>
      </section>
      <section className="bg-white px-6 md:px-20 py-16 flex flex-col md:flex-row items-start justify-between font-sans text-[#141414] gap-10">
        {/* Text Content */}
        <div className="w-full md:w-[55%] text-left">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-2 underline underline-offset-4 font-['poppins']">
            VIRTUAL ASSISTANT
          </h2>

          <p className="text-base md:text-lg mt-4 mb-4 leading-relaxed font-['afacad']">
            You Want Support To Handle Day-To-Day, Tedious Tasks So You Can Focus On
            <br />
            Growing Your Business.
          </p>

          <p className="text-base md:text-lg mb-4 leading-relaxed font-['afacad']">
            As Your VA, I&apos;ll Take Care Of The Draining Admin Tasks—Like The Hours Spent
            <br />
            Replying To DMs—While The Work Piles Up. You&apos;ll Finally Have Time For What
            <br />
            Truly Matters.
          </p>

          <p className="text-base md:text-lg mb-6 leading-relaxed">
            With My Help, You Can Avoid That Stress And Stay Focused On The Bigger Picture.
          </p>

          {/* Key Features */}
          <h3 className="text-xl font-semibold underline underline-offset-4 mb-4">Key Features:</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-xl font-['afacad'] ">
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
          <button className="mt-8 px-6 py-2 text-white bg-[#4B3A36] hover:bg-[#362825] text-base tracking-widest uppercase rounded font-['afacad']">
            GET THE DETAILS
          </button>
        </div>

        {/* Image */}
        <div className="w-full md:w-[35%]">
          <img src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713810/service6_vehgza.png" alt="Virtual Assistant Forest" className="w-full h-auto object-cover" />
        </div>
      </section>


      <section
      className="w-full bg-cover bg-center bg-no-repeat text-white py-20 px-6"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713809/service7_backsg.png')",
      }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div>
          <p className="text-3xl tracking-wider uppercase font-['poppins']">Consultation Support</p>
          <br></br>
          <h2 className="text-2xl md:text-3xl font-light mt-4 font-['aboreto']">
            60-Minute Strategy Consultation
          </h2>
          <p className="mt-4 text-base md:text-lg font-light leading-relaxed font-['poppins']">
            If you&apos;re not quite ready for 1:1 support, but still crave <br></br>personalised strategy advice.
            It goes beyond what you&apos;ll find online.
          </p>
        </div>

        {/* STEP 1 */}
        <div className="space-y-2">
          <h3 className="text-xl md:text-3xl tracking-wider font-light font-['aboreto']">STEP 1: LOCK IN YOUR SPOT</h3>
          <br></br>
          <p className="text-base font-medium font-['poppins']">
            Once your payment goes through, you&apos;ll receive an email with the link you need to:
          </p>
          <ul className="text-sm md:text-base mt-2 space-y-1 font-['poppins']">
            <li>• Book your consult date and time.</li>
            <li>• Access your briefing questionnaire.</li>
          </ul>
        </div>

        {/* STEP 2 */}
        <div className="space-y-2">
          <h3 className="text-xl md:text-3xl tracking-wider font-light font-['aboreto']">STEP 2: SHARE YOUR BUSINESS DETAILS</h3>
          <br></br>
          <p className="text-base font-light leading-relaxed font-['poppins']">
            At least 24 hours before our call, fill out the questionnaire. This helps me understand your challenges
            and goals, as well as what you aim to achieve during our session. The more details you provide, the better
            prepared we&apos;ll be to maximise our time together.
          </p>
        </div>

        {/* STEP 3 */}
        <div className="space-y-2">
          <h3 className="text-xl md:text-3xl tracking-wider font-light font-['aboreto']">STEP 3: DIVE INTO STRATEGY</h3>
          <br></br>
          <p className="text-base font-light leading-relaxed font-['poppins']">
            Join the call ready to explore ways to streamline your operations and grow your business. We&apos;ll use 60 minutes
            to focus on your unique needs. This may include optimising team performance, fine-tuning processes, or
            addressing specific pain points.
          </p>
        </div>
      </div>
    </section>
      <section className="w-full bg-white px-6 py-20 flex flex-col items-center text-black">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-16">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713807/service8_icrnyv.png"
            alt="Abstract Line Art"
            width={400}
            height={400}
            className="w-[500px] h-[500px] object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-6 font-['Poppins']">
          <h2 className="text-3xl md:text-5xl font-light underline underline-offset-8 mb-4">
            What You Get:
          </h2>

          <div className="space-y-4 text-[16px] leading-relaxed">
            <p>
              <span className="font-bold">A 60-Minute Consult Call:</span> Pure Strategy Tailored To Your Business
              Challenges.
            </p>
            <p>
              <span className="font-bold">Recorded Call:</span> You&apos;ll Receive A Full Recording Of Our Session, Allowing You
              To Revisit The Insights Whenever
              <br />
              <span className="flex items-start mt-2">
                <SlCheck className="mt-[5px] mr-2 text-black" />
                You Need A Refresher.
              </span>
            </p>
            <p>
              <span className="font-bold">Recommendation Document:</span> Within 48 Hours, I&apos;ll Send
              <br />
              <span className="flex items-start mt-2">
                <SlCheck className="mt-[5px] mr-2 text-black" />
                You A Personalised Guide Summarising Our Call And Providing Clear Action Steps.
              </span>
            </p>
            <p>
              <span className="font-bold">7 Days Of Email Support:</span> After Our Session, You&apos;ll Have A
              <br />
              <span className="flex items-start mt-2">
                <SlCheck className="mt-[5px] mr-2 text-black" />
                Week Of Email Access For Any Lingering Questions.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-20 text-center">
        <h3 className="text-2xl md:text-5xl font-light tracking-wide mb-2 font-['Poppins']">
          A PEEK INTO MY <span className="font-light">OBM AND VA PROCESS:</span>
        </h3>
        <p className="text-lg md:text-3xl py-7 font-light font-['Poppins']">
          HOW I HELP YOUR BUSINESS THRIVE
        </p>
      </div>
    </section>
    <ProcessSection />
      <section>
        <div className="bg-[#f2dbcd] py-16 px-4 flex justify-center items-center">
          <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* Circular Image */}
            <div className="w-64 h-64 rounded-full overflow-hidden border-[10px] border-[#ebd6c6] flex-shrink-0">
              <img src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713804/service10_gthdb2.png" alt="Client Testimonial" className="w-full h-full object-cover" />
            </div>

            {/* Testimonial Text */}
            <div className="text-[#3a2d2c] text-center md:text-left">
              <p className="text-2xl font-semibold mb-4 font-['afacad']">
                THE BEST PART IS YOU WORK ON IT LIKE IT&apos;S YOUR OWN,
                <br />
                and even push me to be my better version everyday!”
              </p>
              <p className="text-lg font-bold mt-6 font-['poppins']">
                WITH YOUR HELP I COULD ACTUALLY LAUNCH MY NEW DIGITAL PRODUCT IN LESS THAN 10 DAYS!
                <span className="font-bold"> ( IT WAS ON HOLD SINCE MORE THAN 2 MONTHS)</span>
                WHICH ALSO GOT ME 4 SALES ON THE FIRST DAY ITSELF!!
              </p>
              <p className="mt-6 text-sm uppercase tracking-wide text-[#7a625f]">NAME, DESIGNATION, COMPANY NAME</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
      <h2 className="text-5xl font-medium tracking-wider mb-10 text-center font-['aboreto']">MY UNWAVERING COMMITMENT TO YOU</h2>
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto">
        {/* Left Content Block */}
        <div className="bg-[#f3e4da] rounded-xl p-8 lg:p-10 flex-1">
          <p className="text-[#3a2d2c] mb-6 font-['poppins']">
            I&apos;M COMMITTED TO MAKING YOUR BUSINESS RUN SMOOTHLY. YOU CAN FOCUS ON GROWTH WITHOUT GETTING BOGGED DOWN
            BY DAY-TO-DAY TASKS.
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
                <span className="font-semibold">A Values-Driven Partnership:</span> I work with clients whose missions I
                believe in, which means I&apos;m fully invested in helping you succeed.
              </div>
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="rounded-xl overflow-hidden flex-1">
          <img
            src="/services/service1.png"
            alt="Woman in yellow dress sitting by a window with city view"
            className="w-full h-full object-center object-cover rounded-xl"
          />
        </div>
      </div>
    </section>

      <section>
  <div
    className="bg-contain bg-no-repeat bg-right py-20 px-4 text-center"
    style={{
      backgroundImage: "url('https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713808/service12_syiluw.png')",
    }}
  >
    <h2 className="text-4xl md:text-4xl  text-black mb-6 font-['poppins']">
      LET&apos;S SIMPLIFY YOUR SYSTEMS,
      <br />
      PROCESSES, AND DAILY OPERATIONS
    </h2>
    <p className="text-lg md:text-xl text-black mb-10 max-w-3xl mx-auto font-['poppins']">
      Prefer talking it out instead of reading through details? Let&apos;s connect, and I&apos;ll help you choose the best
      offer to suit your business needs.
    </p>
    <a
      href="#schedule-call"
      className="inline-block bg-[#3a2d2c] text-white text-lg tracking-widest px-8 py-4 rounded-md shadow-md hover:bg-[#2e2322] transition font-['poppins']"
    >
      I&apos;M IN! SCHEDULE THE CALL
    </a>
  </div>
</section>

      <Footer />
    </>
  )
}

export default ServicesPage
