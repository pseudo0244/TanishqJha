"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"
import ProcessSection from "../components/process-section"

const ServicesPage = () => {
  return (
    <>
      <Header />
      <div className="relative w-full h-screen overflow-hidden bg-black">
        {/* Background Image */}
        <img
          src="/services/service1.png"
          alt="Bg1"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
          onError={(e) => {
            e.currentTarget.style.display = "none"
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-start justify-center px-6 z-10">
          <div className="max-w-5xl text-white text-left font-['Poppins']">
            <h1 className="text-[50px] md:text-[50px] font-light leading-tight mb-6">
              RECLAIM YOUR TIME AND ENERGY WITH <br />
              GROWTH-DRIVEN OBM AND VA SERVICES
            </h1>

            <p className="text-[50px] md:text-[30px] font-light mb-4">GO FROM…</p>

            <p className="text-[50px] md:text-[30px] font-light mb-8">
              OVERWHELMED BY ENDLESS TASKS, <br />
              LOST LEADS, AND BURNOUT… <br/>
              TO-
            </p>
          </div>
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white font-['Poppins']">
            <p className="text-[50px] md:text-[30px] font-light ">
              <span className="font-light">
                <br>
                </br>
              Streamlined operations, steady <br>
              </br>growth —without the chaos
          <br />
              </span>
            </p>
          </div>
          <div className="w-full flex justify-center mt-10"></div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2"></div>
              <div className="w-full flex justify-center"></div>
                <button className="px-6 py-3 bg-white text-black font-semibold tracking-wide align-center rounded-md shadow-md hover:bg-gray-200 transition">
                  LET'S TALK
                </button>
              </div>
            </div>

      <section className="relative w-full bg-white overflow-hidden">
        {/* Background image */}
        <img src="/services/service3.png" alt="Bg11" className="absolute inset-0 w-full h-full object-cover z-0" />

        {/* Content container */}
        <div className="relative z-10 flex flex-col md:flex-row max-w-6xl mx-auto p-6 md:p-16 items-center justify-center">
          {/* Left - Lady image */}
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <img
                src="/services/service2.png"
                alt="Tanishq Testimonial"
                className="w-[300px] md:w-[340px] h-auto object-cover"
              />
            </div>
          </div>

          {/* Right - Text box */}
          <div className="w-full md:w-1/2 bg-white bg-opacity-95 rounded-xl shadow-xl p-6 md:p-10 text-black">
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
              recommend Tanishq!"
            </p>
            <p className="text-sm md:text-base font-semibold">Anmol, Coach, Company Name</p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F3EF] flex flex-col md:flex-row justify-between items-start px-6 md:px-20 py-14 font-serif text-[#141414]">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-medium tracking-wide leading-snug">
            YOUR TIME AND ENERGY ARE
            <br />
            <span className="block">MY TOP PRIORITIES</span>
          </h1>
          <p className="text-[#444] text-sm mt-4 mb-6">
            The Flexibility And Balance You Wished For Now Feel Just Out Of Reach
          </p>

          <h2 className="text-xl font-semibold mb-4">You Are Making Money. But Here's The Catch…</h2>

          <ul className="space-y-4 text-sm">
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
          <img src="/services/service4.png" alt="Clock" className="rounded-md w-full h-auto object-contain" />
          <p className="italic text-md mt-4 text-center text-[#141414]">
            IT DOESN'T HAVE TO BE THIS
            <br />
            <span className="block">WAY….</span>
          </p>
        </div>
      </section>

      <section className="bg-white px-6 md:px-20 py-14 flex flex-col md:flex-row items-center justify-between font-sans text-[#141414]">
        <div className="w-full md:w-1/3 mb-10 md:mb-0">
          <img src="/services/service6.png" alt="Forest Path" className="w-full h-auto object-cover" />
        </div>

        <div className="w-full md:w-1/2 md:pl-12 text-left">
          <h1 className="text-2xl md:text-3xl font-extrabold uppercase leading-snug">
            THE MOST EFFICIENT WAY TO ACHIEVE <br />
            THIS IS BY PARTNERING WITH AN EXPERT <br />
            TO STREAMLINE YOUR OPERATIONS
          </h1>

          <p className="text-[#777] tracking-wide mt-4 text-sm md:text-base uppercase">
            This will align your goals with your business and personal <br />
            life. Allowing you to work with more focus and clarity.
          </p>

          <p className="text-lg md:text-xl mt-6 leading-relaxed">
            Think about how much time you'd gain to focus on <br />
            your true priorities. Letting an expert handle the <br />
            day-to-day tasks that keep everything running <br />
            smoothly.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20 px-6 md:px-20 text-center font-['Didot',serif]">
        {/* Top Text */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-[36px] md:text-[42px] leading-tight font-light tracking-wide uppercase text-black">
            WANNA SCALE YOUR BUSINESS...
          </h2>
          <h2 className="text-[36px] md:text-[42px] leading-tight font-light tracking-wide uppercase text-black mt-2">
            WITHOUT THE <span className="font-bold">OVERLOAD</span> ON YOUR SHOULDERS?
          </h2>
          <p className="mt-8 text-[22px] tracking-wide text-[#2E2E2E] uppercase">HERE'S HOW WE CAN WORK TOGETHER</p>

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
              src="/home/hero6.png"
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
              src="/home/hero7.png"
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
              src="/home/hero8.png"
              alt="60 Minute Strategy Call"
              className="w-[260px] md:w-[300px] border-[6px] border-[#f4e9de]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 md:px-20 pb-16 font-['Didot',serif] border-b border-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Image Left */}
          <div className="md:w-1/3 flex justify-center md:justify-start">
            <img
              src="/home/hero9.png"
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
                NEED SOMETHING THAT ISN'T LISTED?
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

      <section className="bg-white px-6 md:px-20 py-16 flex flex-col md:flex-row items-start justify-between font-sans text-[#141414] gap-10">
        {/* Image */}
        <div className="w-full md:w-[42%]">
          <img src="/services/service6.png" alt="Support Forest Path" className="w-full h-auto object-cover" />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-[55%] text-left">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-2">ONGOING SUPPORT</h2>
          <h1 className="text-[26px] md:text-[32px] font-semibold uppercase border-b-2 border-black inline-block pb-1 mb-4">
            ONLINE BUSINESS MANAGER
          </h1>

          <p className="text-base md:text-lg mb-3 leading-relaxed">
            You Want Dedicated Support As Your Operations Manager To Ensure
            <br />
            Your Business Runs Smoothly And Your Team Performs Seamlessly.
          </p>

          <p className="font-semibold mb-6">
            Whether You're Scaling Your Business Or Slowing Down To Take A Break And Relax.
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
          <button className="mt-6 px-6 py-2 text-white bg-[#4B3A36] hover:bg-[#362825] text-sm tracking-wide uppercase">
            GET THE DETAILS
          </button>
        </div>
      </section>
      <section className="bg-white px-6 md:px-20 py-16 flex flex-col md:flex-row items-start justify-between font-sans text-[#141414] gap-10">
        {/* Text Content */}
        <div className="w-full md:w-[55%] text-left">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-2 underline underline-offset-4">
            VIRTUAL ASSISTANT
          </h2>

          <p className="text-base md:text-lg mt-4 mb-4 leading-relaxed">
            You Want Support To Handle Day-To-Day, Tedious Tasks So You Can Focus On
            <br />
            Growing Your Business.
          </p>

          <p className="text-base md:text-lg mb-4 leading-relaxed">
            As Your VA, I'll Take Care Of The Draining Admin Tasks—Like The Hours Spent
            <br />
            Replying To DMs—While The Work Piles Up. You'll Finally Have Time For What
            <br />
            Truly Matters.
          </p>

          <p className="text-base md:text-lg mb-6 leading-relaxed">
            <span className="inline-block mr-2">✔</span>
            With My Help, You Can Avoid That Stress And Stay Focused On The Bigger Picture.
          </p>

          {/* Key Features */}
          <h3 className="text-xl font-semibold underline underline-offset-4 mb-4">Key Features:</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-base">
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
          <button className="mt-8 px-6 py-2 text-white bg-[#4B3A36] hover:bg-[#362825] text-xs tracking-widest uppercase rounded">
            GET THE DETAILS
          </button>
        </div>

        {/* Image */}
        <div className="w-full md:w-[42%]">
          <img src="/services/service6.png" alt="Virtual Assistant Forest" className="w-full h-auto object-cover" />
        </div>
      </section>

      <ProcessSection />

      <section>
        <div className="bg-[#f2dbcd] py-16 px-4 flex justify-center items-center">
          <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* Circular Image */}
            <div className="w-64 h-64 rounded-full overflow-hidden border-[10px] border-[#ebd6c6] flex-shrink-0">
              <img src="/services/service10.png" alt="Client Testimonial" className="w-full h-full object-cover" />
            </div>

            {/* Testimonial Text */}
            <div className="text-[#3a2d2c] text-center md:text-left">
              <p className="text-xl font-semibold mb-4">
                "THE BEST PART IS YOU WORK ON IT LIKE IT'S YOUR OWN,
                <br />
                AND EVEN PUSH ME TO BE MY BETTER VERSION EVERYDAY!"
              </p>
              <p className="text-lg font-bold mt-6">
                WITH YOUR HELP I COULD ACTUALLY LAUNCH MY NEW DIGITAL PRODUCT IN LESS THAN 10 DAYS!
                <span className="font-normal"> ( IT WAS ON HOLD SINCE MORE THAN 2 MONTHS)</span>
                WHICH ALSO GOT ME 4 SALES ON THE FIRST DAY ITSELF!!"
              </p>
              <p className="mt-6 text-sm uppercase tracking-wide text-[#7a625f]">NAME, DESIGNATION, COMPANY NAME</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white py-16 px-6 flex flex-col lg:flex-row justify-center items-center gap-10">
          {/* Left Content Block */}
          <div className="bg-[#e7cfc0] rounded-xl p-8 max-w-xl text-[#3a2d2c]">
            <h2 className="text-3xl font-light tracking-wider mb-6 text-center lg:text-left">
              MY UNWAVERING COMMITMENT TO YOU
            </h2>
            <p className="uppercase text-sm font-medium mb-4">
              I'M COMMITTED TO MAKING YOUR BUSINESS RUN SMOOTHLY. YOU CAN FOCUS ON GROWTH WITHOUT GETTING BOGGED DOWN BY
              DAY-TO-DAY TASKS.
            </p>
            <p className="mb-4">HERE'S WHAT WORKING WITH ME LOOKS LIKE:</p>
            <ul className="list-disc list-inside space-y-3 text-base">
              <li>
                <strong>Constant Communication:</strong> Expect timely updates, so you're never left in the dark about
                where things stand.
              </li>
              <li>
                <strong>Reliable Results:</strong> I ensure that every task, project, and system is completed on time
                and handled with precision.
              </li>
              <li>
                <strong>A Values-Driven Partnership:</strong> I work with clients whose missions I believe in, which
                means I'm fully invested in helping you succeed.
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="rounded-xl overflow-hidden max-w-md w-full">
            <img src="/services/service11.png" alt="Commitment" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      <section>
        <div
          className="bg-cover bg-center py-20 px-4 text-center"
          style={{
            backgroundImage: "url('/services/service12.png')",
          }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-black mb-6">
            LET'S SIMPLIFY YOUR SYSTEMS,
            <br />
            PROCESSES, AND DAILY OPERATIONS
          </h2>
          <p className="text-lg md:text-xl text-black mb-10 max-w-3xl mx-auto">
            Prefer talking it out instead of reading through details? Let's connect, and I'll help you choose the best
            offer to suit your business needs.
          </p>
          <a
            href="#schedule-call"
            className="inline-block bg-[#3a2d2c] text-white text-lg tracking-widest px-8 py-4 rounded-md shadow-md hover:bg-[#2e2322] transition"
          >
            I'M IN! SCHEDULE THE CALL
          </a>
        </div>
      </section>

      <section className="w-full">
        {/* Top White Section */}
        <div className="bg-white text-center pt-16 pb-8">
          <h2 className="text-black text-[22px] tracking-[0.15em] font-normal uppercase">
            CONNECT WITH ME ON INSTAGRAM
          </h2>
          <p className="text-black text-[22px] tracking-[0.15em] font-normal uppercase mt-2">
            EXCITED TO SHARE THIS JOURNEY!
          </p>
        </div>

        {/* Half White + Half Pink Section */}
        <div className="relative w-full h-[600px]">
          {/* Bottom Pink Layer */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#F3E5DC] z-0" />

          {/* Image Cards */}
          <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-10 h-full px-6">
            <div className="w-[400px] h-[400px] bg-[#D9D9D9]" />
            <div className="w-[400px] h-[400px] bg-[#D9D9D9]" />
            <div className="w-[400px] h-[400px] bg-[#D9D9D9]" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ServicesPage
