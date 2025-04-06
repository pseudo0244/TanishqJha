// app/page.tsx
import Header from './components/Header'
import { Playfair_Display } from 'next/font/google'
import { FaCheckCircle } from 'react-icons/fa'
import Footer from './components/Footer'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] })

export default function Home() {
  return (
    <main className={`bg-white min-h-screen ${playfair.className}`}>
      <Header />

      <section className="flex flex-col md:flex-row items-center justify-between px-6 py-20 max-w-7xl mx-auto">
        {/* Left */}
        <div className="w-full md:w-1/2 space-y-8">
          <h1 className="text-3xl md:text-5xl font-semibold text-black leading-tight">
            SECOND BRAIN FOR ENTREPRENEURS <br />
            READY TO SCALE... WITHOUT EXHAUSTION
          </h1>
          <p className="text-lg text-black/90 font-medium leading-relaxed">
            From Strategy To Implementation With Your Freedom- <br />
            Focused OBM & VA
          </p>

          <div className="space-y-4 mt-6 text-[#2f2f2f]">
            <p className="flex items-center text-base">
              <FaCheckCircle className="text-[#4e3b39] mr-3 text-xl" />
              I make proactive decisions and manage key aspects of your business
            </p>
            <p className="flex items-center text-base">
              <FaCheckCircle className="text-[#4e3b39] mr-3 text-xl" />
              Ensuring everything runs smoothly
            </p>
            <p className="flex items-center text-base">
              <FaCheckCircle className="text-[#4e3b39] mr-3 text-xl" />
              Without the need for your constant intervention
            </p>
          </div>

          <div className="flex gap-6 mt-10">
            <button className="bg-[#4e3b39] text-white px-8 py-4 uppercase tracking-widest text-sm rounded-md">
              Tell Me More
            </button>
            <button className="bg-[#4e3b39] text-white px-8 py-4 uppercase tracking-widest text-sm rounded-md">
              View All Services
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2 mt-16 md:mt-0 relative flex justify-center items-center">
          {/* Background image */}
          <img
            src="/home/hero1.png"
            alt="Background"
            className="w-[300px] md:w-[360px] rounded-lg shadow-lg relative z-0"
          />
          {/* Overlay image */}
          <img
            src="/home/hero2.png"
            alt="Foreground"
            className="absolute top-6 left-6 w-[260px] md:w-[300px] rounded-lg shadow-xl z-10"
          />
        </div>
      </section>
      <section className="bg-white py-20 px-6 md:px-12">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
    {/* Left Image */}
    <div className="w-full md:w-1/2">
      <img
        src="/home/hero3.png"
        alt="Support"
        className="w-full h-auto rounded-lg shadow-md"
      />
    </div>

    {/* Right Text Content */}
    <div className="w-full md:w-1/2 text-[#2f2f2f]">
      <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
        STILL WAITING FOR THE RIGHT<br />TIME TO HIRE SUPPORT...
      </h2>

      <p className="text-lg font-light mb-6 tracking-wide">
        .......LIKE REACHING A CERTAIN NUMBER OF CLIENTS<br />
        OR ACHIEVING A REVENUE GOAL?
      </p>

      <p className="italic text-lg font-medium mb-4">IMAGINE THIS.....</p>

      <div className="space-y-4 text-base font-light italic leading-relaxed">
        <p>WHAT IF YOU COULD BRING IN THE RIGHT EXPERTISE TODAY?</p>
        <p>YOU’D FINALLY FEEL AT EASE. NO MORE BEING WIRED 24/7.</p>
        <p>YOUR BUSINESS WOULD KEEP MOVING FORWARD, EVEN WHEN YOU’RE NOT GLUED TO IT.</p>
        <p>DON’T LET HESITATION HOLD YOU BACK FROM ACHIEVING YOUR BUSINESS GOALS.</p>
      </div>
    </div>
  </div>
</section>
<section
  className="relative bg-cover bg-center bg-no-repeat py-24 px-6 md:px-20 text-white"
  style={{ backgroundImage: "url('/home/herobg.png')" }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/60 z-0"></div>

  {/* Content wrapper with relative to stack on top */}
  <div className="relative z-10 max-w-7xl mx-auto text-center mb-16">
    <h2 className="text-3xl md:text-5xl font-light tracking-wide text-white drop-shadow-md">
      ACCELERATE YOUR BUSINESS…SUSTAINABLY
    </h2>
    <p className="text-lg md:text-xl mt-4 font-light italic text-white drop-shadow-md">
      (AKA GOODBYE OVERWHELM, WELCOME CLARITY!)
    </p>
    <h3 className="text-2xl md:text-3xl font-semibold mt-10 text-white drop-shadow-md">
      Here’s A Glimpse Of Client Love
    </h3>
  </div>

  {/* Opaque content card */}
  <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto p-10 rounded-xl shadow-2xl">
    {/* Client Image */}
    <div className="flex-shrink-0">
      <img
        src="/home/sohan.png"
        alt="Client"
        className="w-64 h-64 object-cover border-8 border-white shadow-xl rounded"
      />
    </div>

    {/* Testimonial Text */}
    <div className="text-left text-white space-y-4 max-w-xl text-base md:text-lg leading-relaxed">
      <p>
        <em>Tanishq was amazing as my Online Business Manager</em> when I launched my digital product.
      </p>
      <p>
        She really helped me with everything from managing my daily tasks to making sure our product launch went smoothly. As a coach who helps people create content, having Tanishq on board was a huge relief.
      </p>
      <p>
        She took care of all the details and challenges, allowing me to focus on my first digital product and creating content. If you need someone to help you organise and grow your online business, I highly recommend Tanishq!
      </p>
      <p className="font-semibold italic">Anmol, Coach, Company Name</p>
    </div>
  </div>
</section>
<section className="bg-white py-24 px-6 md:px-20 text-black">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">
    {/* Left Column - Clock Image */}
    <div>
      <img
        src="/home/hero4.png"
        alt="Clock"
        className="w-full max-w-sm rounded shadow-lg"
      />
    </div>

    {/* Right Column - Text & Big Quotation */}
    <div className="flex flex-col justify-center">
      <h2 className="text-2xl md:text-4xl font-light tracking-tight uppercase leading-snug">
        YOUR TIME AND ENERGY ARE MY TOP PRIORITIES
      </h2>
      <p className="mt-6 text-xl md:text-2xl uppercase">SO YOU CAN…</p>
      <div className="relative mt-10">
        <span className="text-[120px] text-gray-200 absolute -left-6 -top-16 leading-none select-none z-0">
          “
        </span>
        <p className="text-3xl md:text-4xl font-medium z-10 relative leading-tight">
          FOCUS ON GROWTH, NOT THE GRIND, AND BUILD YOUR FREEDOM-FOCUSED BUSINESS
        </p>
      </div>
    </div>
  </div>

  {/* Bottom Grid */}
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start mt-28">
    {/* Left Column - Dive Into */}
    <div>
      <h3 className="text-2xl md:text-3xl font-bold mb-8">
        Let’s dive into how it’s done:
      </h3>
      <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed">
        <p>
          <strong>By Streamlining Your Projects, Team, Operations, And Client Communication.</strong>
        </p>
        <p>
          I Ensure That Everything Runs Smoothly And Efficiently.
        </p>
        <p>
          This Empowers You To Step Back, Focus On Business Growth, And Think Strategically— Without Constantly Putting Out Fires.
        </p>
        <p>
          Imagine The Mental Space You’ll Gain When You’re No Longer Juggling A Million Tasks At Once.
        </p>
      </div>
    </div>

    {/* Right Column - Laptop Image with Quote */}
    <div className="relative">
      <img
        src="/home/hero5.png"
        alt="Desk with notes and coffee"
        className="w-full max-w-sm rounded shadow-lg"
      />
      <span className="text-[120px] text-gray-300 absolute bottom-0 right-0 leading-none select-none z-0">
        ”
      </span>
    </div>
  </div>
</section>
<section className="relative bg-white py-16 px-6 md:px-20">
  <div className="max-w-7xl mx-auto grid md:grid-cols-[auto_1fr] items-start gap-10 relative">

    {/* Image + Vertical Text Wrapper */}
    <div className="relative flex items-center">
      {/* Vertical Handwriting Text Beside Image */}
      <div className="absolute -left-10 top-1/2 -translate-y-1/2 rotate-[-90deg] origin-left z-10">
        <p className="text-2xl md:text-3xl italic text-[#3f3f3f] whitespace-nowrap tracking-wider">
          I Am Working On Myself For Myself
        </p>
      </div>

      {/* Left Image */}
      <img
        src="/home/hero2.png"
        alt="Tanishq"
        className="w-[350px] md:w-[400px] rounded-md shadow-xl relative z-20"
      />
    </div>

    {/* Right Side Content */}
    <div className="flex flex-col w-full relative z-10">

      {/* Heading (outside brown box) */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-5xl font-light uppercase text-[#4A3733]">
          HI, I’M TANISHQ!
        </h2>
        <h3 className="text-2xl md:text-4xl font-light text-[#4A3733] mt-2">
          FOUNDER OF TANISHQJHA.CO
        </h3>
        <p className="italic text-lg md:text-xl mt-2 text-[#4A3733]">
          YOUR FREEDOM-PARTNER, YOUR GO-TO FOR GETTING THINGS DONE
        </p>
      </div>

      {/* Brown Box */}
      <div className="bg-[#4A3733] text-white p-6 md:p-10 space-y-6 text-base md:text-lg font-light rounded-sm">
        <p className="uppercase font-semibold tracking-wide">
          (PRIORITIZING IS MY STRENGTH!)
        </p>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="text-xl leading-6">✔</span>
            <span>
              CAN SMART STRATEGY AND SEAMLESS EXECUTION AMPLIFY YOUR FREEDOM?
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl leading-6">✔</span>
            <span>
              ABSOLUTELY! I DON’T JUST TACKLE YOUR TO-DO LIST—<br />
              I BLEND OBM AND VA EXPERTISE TO ENHANCE YOUR DAILY OPERATIONS AND STRATEGIC PLANNING.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl leading-6">✔</span>
            <span>
              FROM BIG-PICTURE PROJECTS TO INBOX MASTERY, I’M THE EFFICIENCY-DRIVEN PARTNER YOUR BUSINESS CRAVES.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl leading-6">✔</span>
            <span>
              STEP INTO A WORLD WHERE STRATEGY MEETS ACTION, AND OVERWHELM BECOMES A THING OF THE PAST.
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section className="bg-white py-20 px-6 md:px-20 text-center font-['Didot',serif]">
  {/* Top Text */}
  <div className="max-w-4xl mx-auto mb-20">
    <h2 className="text-[36px] md:text-[42px] leading-tight font-light tracking-wide uppercase text-black">
      WANNA SCALE YOUR BUSINESS...
    </h2>
    <h2 className="text-[36px] md:text-[42px] leading-tight font-light tracking-wide uppercase text-black mt-2">
      WITHOUT THE <span className="font-bold">OVERLOAD</span> ON YOUR SHOULDERS?
    </h2>
    <p className="mt-8 text-[22px] tracking-wide text-[#2E2E2E] uppercase">
      HERE’S HOW WE CAN WORK TOGETHER
    </p>

    {/* Arrow */}
    <div className="mt-6">
      <span className="text-[36px] text-black select-none">↓</span>
    </div>
  </div>

  {/* Main Content */}
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
          YOU WANT A TRUSTED VIRTUAL ASSISTANT<br />
          TO HANDLE YOUR ADMIN AND CLIENT COMMUNICATION,<br />
          FREEING YOU FROM THE DAILY GRIND<br />
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
        src="/home/hero6.png" // Replace with your actual image path
        alt="Virtual Assistant"
        className="w-[260px] md:w-[300px] border-[6px] border-[#f4e9de]"
      />
    </div>
  </div>
</section>
<section className="bg-white px-6 md:px-20 py-20 font-['Didot',serif]">
  {/* Section 2 */}
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12 mb-20">
    {/* Image Left */}
    <div className="md:w-1/3 flex justify-center md:justify-start">
      <img
        src="/home/hero7.png" // replace with your image path
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
          YOU WANT A BIG-PICTURE THINKER AND A DOER<br />
          AS YOUR ONLINE BUSINESS MANAGER. THIS SUPPORT<br />
          WILL KEEP EVERYTHING RUNNING SMOOTHLY, ALLOWING<br />
          YOU TO FOCUS ON SCALING YOUR BUSINESS AND<br />
          ACHIEVING YOUR BROADER GOALS.
        </p>

        <button className="mt-6 px-6 py-2 bg-[#4A3733] text-white tracking-widest text-[14px] uppercase rounded-sm font-semibold">
          GET THE DETAILS
        </button>
      </div>
    </div>
  </div>

  {/* Section 3 */}
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
          YOU WANT A STRATEGIC 60-MINUTE CONSULTATION<br />
          THAT PROVIDES TAILORED ADVICE, AND A ROADMAP FOR<br />
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
        src="/home/hero8.png" // replace with your image path
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
        src="/home/hero9.png" // replace with your image path
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
          NEED SOMETHING THAT ISN’T LISTED?
        </h4>
        <p className="text-[18px] text-[#2E2E2E] leading-relaxed tracking-wide font-light max-w-xl">
          YOU WANT A BIG-PICTURE THINKER AND A DOER<br />
          AS YOUR ONLINE BUSINESS MANAGER. THIS SUPPORT<br />
          WILL KEEP EVERYTHING RUNNING SMOOTHLY, ALLOWING<br />
          YOU TO FOCUS ON SCALING YOUR BUSINESS AND<br />
          ACHIEVING YOUR BROADER GOALS.
        </p>

        <button className="mt-6 px-6 py-2 bg-[#4A3733] text-white tracking-widest text-[14px] uppercase rounded-sm font-semibold">
          GET THE DETAILS
        </button>
      </div>
    </div>
  </div>
</section>
<section className="font-['Didot',serif] border-t border-black bg-white py-12 px-6 md:px-20">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">
    {/* Image Section */}
    <div className="md:w-1/2 flex justify-center md:justify-start">
      <img
        src="/home/tanishq.png" // replace this with your actual image path
        alt="Support Person"
        className="border-4 border-[#2E63C2] max-w-[400px]"
      />
    </div>

    {/* Text Section */}
    <div className="md:w-1/2 bg-[#EBD3C1] p-8 rounded-md">
      <h2 className="text-[28px] text-black font-normal leading-snug mb-2">
        YOU’RE NOT DOING IT ALONE ANYMORE...
      </h2>
      <h3 className="text-[20px] text-[#fff] font-semibold tracking-wide mb-4 uppercase">
        INSTEAD...
      </h3>
      <p className="italic text-[17px] text-[#2E2E2E] mb-4 leading-relaxed">
        You now have someone who’s uniquely positioned as your trusted support system,
        ensuring you make the most of your time and resources.
      </p>
      <p className="italic text-[17px] text-[#2E2E2E] mb-4 leading-relaxed">
        After all, there are only so many hours in a day.
      </p>
      <p className="italic text-[17px] text-[#2E2E2E] mb-4 leading-relaxed">
        While you can manage tasks yourself, every moment spent on those details takes away
        from your capacity to onboard larger clients.
      </p>
      <p className="italic text-[17px] text-[#2E2E2E] mb-6 leading-relaxed">
        No more exhausting back-and-forth with clients and leads.
      </p>
      <p className="text-[17px] font-bold text-black tracking-wide leading-relaxed">
        NOW, YOU’LL FINALLY HAVE THE ENERGY TO FOCUS ON WHAT TRULY MATTERS—YOUR DELIVERABLES.
      </p>
    </div>
  </div>
</section>
<section className="font-['Didot',serif] bg-white pt-12 px-6 md:px-20 border-b border-black">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
    
    {/* Image */}
    <div className="md:w-1/2 flex justify-center md:justify-start">
      <img
        src="/home/tanishq2.png" // Replace with your actual image path
        alt="Precious Time"
        className="border-[10px] border-[#F7E9DD] max-w-[400px]"
      />
    </div>

    {/* Text */}
    <div className="md:w-1/2">
      <h2 className="text-[22px] md:text-[24px] font-bold text-black mb-2">
        TIME <span className="font-normal">IS ONE OF THE MOST PRECIOUS RESOURCES</span>
      </h2>
      <p className="italic text-[17px] text-black mb-4">
        If you find yourself in this situation most of the time...
      </p>
      <p className="text-[16.5px] text-[#2E2E2E] leading-relaxed mb-4">
        You feel overwhelmed by managing everything on your own while trying to find your way.
      </p>
      <p className="text-[16.5px] text-[#2E2E2E] leading-relaxed mb-4">
        You have a team. But as the go-to person, you end up handling all the questions, which can quickly become overwhelming.
      </p>
      <p className="text-[16.5px] text-[#2E2E2E] leading-relaxed mb-4">
        Your business relies solely on you. This makes it difficult to take breaks and affects your relationships, mental health, and motivation.
      </p>
    </div>
  </div>

  {/* CTA Section */}
  <div className="text-center mt-10">
    <h3 className="text-[16px] md:text-[17px] font-bold text-black mb-4 tracking-wide uppercase">
      EXPLORE HOW I CAN HELP YOUR BUSINESS THRIVE WITH MORE FLEXIBILITY AND LESS HUSTLE
    </h3>
    <button className="bg-[#EBD3C1] border border-[#D6C3B1] text-[#2E2E2E] text-[14px] px-6 py-3 rounded-sm tracking-widest shadow-sm hover:opacity-90 transition">
      SCHEDULE YOUR COMPLIMENTARY CALL
    </button>
  </div>
</section>
<section className="bg-white px-6 py-12 md:px-20 font-['Didot',serif] border-t border-black">
  <h2 className="text-center text-[20px] italic underline mb-10 text-[#3B2F2F]">
    WHAT WILL YOU GET OUT OF THIS NO- OBLIGATION OFFER ?
  </h2>

  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">

    {/* Left Image with Overlay Box */}
    <div className="relative w-full md:w-[300px] min-w-[260px] flex justify-center md:justify-start">
      {/* Brown Background Box Behind the Image */}
      <div className="absolute top-6 left-0 w-[260px] h-[340px] bg-[#3B2F2F] -z-10"></div>
      {/* Actual Image Slightly Shifted Right */}
      <img
        src="/home/hero10.png" // Replace with your actual image path
        alt="Coffee Cup"
        className="w-[260px] h-[340px] object-cover relative left-4"
      />
    </div>

    {/* Right Steps Box */}
    <div className="bg-[#F3E7DD] border border-gray-300 p-8 w-full text-[16px] text-black leading-relaxed">
      <div className="mb-4">
        <span className="text-[#8D5F42] font-semibold mr-4">01</span>
        BOOK A TIME THAT WORKS FOR YOU AND FILL OUT THE FORM.
      </div>
      <div className="mb-4">
        <span className="text-[#8D5F42] font-semibold mr-4">02</span>
        RECEIVE A CONFIRMATION EMAIL WITH ALL THE CALL DETAILS.
      </div>
      <div className="mb-4">
        <span className="text-[#8D5F42] font-semibold mr-4">03</span>
        DURING OUR CALL, WE’LL EXPLORE YOUR BUSINESS NEEDS<br />
        AND HOW MY SERVICES CAN SUPPORT YOU.
      </div>
      <div className="mb-4">
        <span className="text-[#8D5F42] font-semibold mr-4">04</span>
        IF WE DECIDE TO COLLABORATE, I’LL SEND YOU A PROPOSAL FOR REVIEW
      </div>
      <div>
        <span className="text-[#8D5F42] font-semibold mr-4">05</span>
        ONCE AGREED, SIGN THE CONTRACT AND MAKE THE PAYMENT TO KICK THINGS OFF
      </div>
    </div>
  </div>
</section>
<section
  className="relative bg-cover bg-center text-white py-20 px-6 md:px-16"
  style={{ backgroundImage: "url('/home/herobg.png')" }} // Replace with your image
>
<div className="absolute inset-0 bg-black/60 z-0"></div>

  <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 z-10">
    {/* Image */}
    <div className="w-full md:w-1/2 flex justify-center md:justify-start">
      <img
        src="/home/sohan.png" // Replace with actual testimonial photo
        alt="Testimonial"
        className="w-[320px] h-auto border-8 border-white object-cover"
      />
    </div>

    {/* Text */}
    <div className="w-full md:w-1/2 text-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-snug">
        HAVING TANISHQ ON MY TEAM WAS AN ABSOLUTE BLESSING.
      </h2>
      <p className="italic mb-4 text-[17px] leading-relaxed">
        Tanishq was amazing as my Online Business Manager
        <span className="not-italic"> when I launched my digital product.</span>
      </p>
      <p className="mb-4 text-[17px] leading-relaxed">
        She really helped me with everything from managing my daily tasks to making sure our
        product launch went smoothly. As a coach who helps people create content, having
        Tanishq on board was a huge relief.
      </p>
      <p className="mb-6 text-[17px] leading-relaxed">
        She took care of all the details and challenges, allowing me to focus on my first digital
        product and creating content. If you need someone to help you organise and grow your
        online business, I highly recommend Tanishq!
      </p>
      <p className="italic text-[17px]">Anmol, Coach, Company Name</p>
    </div>
  </div>

  {/* Carousel dots */}
  <div className="relative z-10 mt-10 flex justify-center space-x-2">
    <span className="w-3 h-3 bg-white rounded-full"></span>
    <span className="w-3 h-3 bg-[#8D5F42] rounded-full"></span>
    <span className="w-3 h-3 bg-white rounded-full"></span>
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
<Footer/>



    </main>
  )
}
