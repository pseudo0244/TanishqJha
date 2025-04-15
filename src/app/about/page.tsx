'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="bg-white text-black">
      <Header />
      <section className="flex flex-col md:flex-row items-center justify-center px-4 md:px-20 py-20 gap-12 bg-white relative overflow-hidden">
  {/* Left Half Background Image */}
  <div className="absolute top-0 left-0 w-1/3 h-full z-0 overflow-hidden">
    <img
      src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713752/about2_yvnlwt.png"
      alt="Background shadow"
      className="w-full h-13/14 object-cover"
    />
  </div>

  {/* Left Side: Foreground Image */}
  <div className="relative z-10 w-full md:w-1/3 flex justify-center items-center ml-8">
  <img
    src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713752/about1_osdjgc.png"
    alt="Tanishq hugging a dog"
    className="w-[320px] h-[420px] object-cover shadow-xl"
  />
</div>


  {/* Right Side: Text */}
  <div className="w-full md:w-2/3 max-w-xl text-left z-10">
    <h2 className="text-lg md:text-4xl font-normal mb-3 tracking-wide">HI, I AM TANISHQ...</h2>

    <p className="text-xl md:text-4xl leading-relaxed tracking-wide">
      I AM ON A MISSION TO HELP ENTREPRENEURS{" "}
      <span className="font-semibold text-[#3e2f2f]">BUILD A SUCCESSFUL BUSINESS</span> WITH
    </p>

    <div className="inline-block mt-2 mb-3 bg-[#f1e5dd] px-1">
      <p className="text-xl md:text-4xl font-bold tracking-wide text-[#2c2c2c]">
        FREEDOM AND FULFILMENT
      </p>
    </div>

    <p className="text-2xl mt-6 italic">(Yes, you can have both)</p>
  </div>
</section>


      <section className="relative bg-white  px-6 md:px-20 border-t-4 border-[#4A3733]"></section>
      <section className="px-6 md:px-20 py-16 bg-white">
  {/* Title */}
  <h2 className="text-2xl md:text-3xl font-medium text-center mb-12 leading-relaxed">
    IT&apos;S BEEN A GREAT RIDE THROUGH THE LAST ONE YEAR<br />
    AND I AM LOOKING FORWARD TO MANY MORE....
  </h2>

  {/* Testimonial Box */}
  <div className="bg-[#ecd7c8] rounded-none md:rounded-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-12 max-w-6xl mx-auto">
    
    {/* Image */}
    <img
      src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713758/about3_p9qowj.png"
      alt="Roshni"
      className="w-[220px] h-[280px] object-cover rounded-[25px] shadow-lg"
    />

    {/* Testimonial Text */}
    <div className="text-base md:text-lg leading-relaxed text-black">
      <p>
        Hey Tanishq, i don&apos;t say this often but thank you so much for everything you have done and do for me,
        for being there for me, for looking up to me, for cheering me and many such things. I love you for all
        this and for the person you are. It&apos;s been a great ride through the last one year and I am looking forward
        to many more
      </p>
      <p className="font-semibold mt-4">Roshni, Designation, Company Name</p>
    </div>
  </div>
</section>
<section className="relative bg-white  px-6 md:px-20 border-t-4 border-[#4A3733]"></section>
<section className="relative bg-[#f7f5f2] px-4 md:px-16 lg:px-20 py-16 overflow-hidden">
      {/* Heading */}
      <div className="text-left max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-black tracking-tight leading-tight">
          YOUR BUSINESS. SIMPLIFIED AND STREAMLINED.
        </h2>
        <p className="text-lg md:text-2xl text-black mt-2 tracking-wide">(MORE RESULTS, LESS STRESS)</p>
      </div>

      {/* Content */}
      <div className="mt-12 md:mt-16 max-w-6xl mx-auto">
        {/* "Here's how it works" heading outside the text box */}
        <h3
          className={`text-3xl md:text-6xl text-[#5f4b46] mb-6 font-medium italic text-right pr-8`}
        >
          Here&apos;s how it works:
        </h3>

        <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-12">
          {/* Left Side - Image with brown box */}
          <div className="relative w-full md:w-5/12 flex justify-center items-end mb-8 md:mb-0">
            {/* Brown box behind image - made more prominent */}
            <div className="absolute bottom-0 left-0 w-full h-[95%] bg-[#3e2e2b] -z-10 rounded-tr-[70px]" />

            {/* Image */}
            <img
              src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713756/about4_vv4dpl.png"
              alt="Business professional"
              className="w-full max-w-sm object-cover rounded-tr-[70px] shadow-xl relative z-10"
            />
          </div>

          {/* Right Side - Text box */}
          <div className="w-full md:w-7/12 bg-white rounded-[30px] shadow-lg p-6 md:p-10 flex flex-col justify-center">
            <p className="text-[#5f4b46] text-sm md:text-base mb-5 leading-relaxed tracking-wide">
              YOU&apos;RE GOING ABOUT YOUR DAILY LIFE—HANDLING CLIENT MEETINGS, PROJECT DELIVERY, AND PERSONAL
              RESPONSIBILITIES. MEANWHILE, YOUR BUSINESS RUNS LIKE A WELL-OILED MACHINE, WITH EVERYTHING ON TRACK.
            </p>

            <p className="text-[#5f4b46] text-sm md:text-base mb-5 leading-relaxed tracking-wide">
              YOUR TEAM KNOWS WHAT TO DO. TASKS ARE GETTING DONE WITHOUT YOU HAVING TO MICROMANAGE. CLIENTS ARE HAPPY,
              AND YOU CAN FINALLY FOCUS ON WHAT YOU LOVE TO DO.
            </p>

            <p className="text-[#5f4b46] text-sm md:text-base mb-5 leading-relaxed tracking-wide">
              NOW, PICTURE THAT HAPPENING EVERY SINGLE DAY.
            </p>

            <p className="text-[#5f4b46] text-sm md:text-base mb-5 leading-relaxed tracking-wide">
              WITH A SPECIALIST MANAGING YOUR OPERATIONS, YOUR{" "}
              <strong>BUSINESS IS GROWING WITHOUT HITTING A PLATEAU.</strong> THAT MEANS MORE TIME FOR WHAT MATTERS MOST
              IN YOUR LIFE.
            </p>

            <p className="text-[#5f4b46] text-sm md:text-base leading-relaxed tracking-wide">
              EFFECTIVE MANAGEMENT LEADS TO A FLOURISHING BUSINESS READY TO EXPAND. AND WITH A THRIVING BUSINESS, YOUR
              ENTREPRENEURIAL DREAMS CAN TRULY TAKE FLIGHT.
            </p>
          </div>
        </div>
      </div>
    </section>
<section className="flex flex-col md:flex-row items-center justify-center px-6 py-12 max-w-7xl mx-auto">
  {/* Left Image */}
  <div className="w-full md:w-1/2">
    <img
      src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713764/about6_lsgapn.png"
      alt="Forest Path"
      className="rounded-md object-cover w-9/10 h-auto"
    />
  </div>

  {/* Right Content */}
  <div className="w-full md:w-1/2 md:pl-10 pt-10 md:pt-0 text-[#3D2B2B]">
    <h2 className="text-3xl md:text-4xl font-semibold italic font-serif mb-6">
      this is how <span className="italic font-semibold">my journey started</span><span className="text-2xl">...</span>
    </h2>

    <p className="text-lg mb-4">
      I ventured into freelancing back in 2023. My core value was always freedom. I sought a career that would allow me to embrace this principle fully.
    </p>

    <p className="text-lg mb-4">
      I honed my skills as an operation manager and virtual assistant. <br />
      I started working with entrepreneurs who wanted to <br />
      scale their business without the overwhelm.
    </p>

    <p className="text-lg mb-4">
      I quickly discovered that this work was more than just a means to an end. It was a source of immense meaning and fulfilment.
    </p>

    <p className="text-lg mb-4">
      Each day, I woke up excited to tackle new challenges and support business owners in realising their dreams.
    </p>

    <p className="text-lg mb-4">
      They can take a step back and relax. This leads to a healthier work-life balance, opening up new opportunities for creativity and innovation.
    </p>

    <p className="text-lg font-semibold italic mt-6">
      Their success is my success. Because helping them grow their businesses and achieve their goals is my driving force.
    </p>
  </div>
</section>
<section
  className="w-full h-auto bg-cover bg-center text-white text-center py-20 px-4"
  style={{
    backgroundImage: "url('https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713758/about7_svf4gm.png')",
  }}
>
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      SUCCESS THRIVES ON TIME AND ENERGY
    </h2>
    <h3 className="text-2xl md:text-3xl font-light mb-6">
      (NOT EXHAUSTION AND OVERWHELM)
    </h3>
    <p className="text-base md:text-lg font-medium">
      When you aim to grow with OBM and VA support, you focus on building stable wealth
      and creating a balanced lifestyle that aligns with your vision.
    </p>
  </div>
</section>
<section className="w-full py-16 px-6 text-center">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-semibold mb-2">
      I BELIEVE IN WALKING THE TALK
    </h2>
    <h3 className="text-xl md:text-2xl font-light mb-12">
      THIS IS MY FOUNDATION…
    </h3>

    <div className="grid md:grid-cols-2 gap-12">
      {/* First Block */}
      <div>
        <img src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713755/about8_ept4e0.png" alt="Freedom and Fulfillment" className="mx-auto mb-6 w-60 h-auto object-cover" />
        <h4 className="text-xl font-medium">Freedom and Fulfillment</h4>
        <p className="text-sm uppercase tracking-widest text-gray-600 mt-1 mb-4">
          YOUR BUSINESS, YOUR FREEDOM, YOUR GROWTH
        </p>
        <p className="text-base max-w-md mx-auto">
          I believe that your business should grant you freedom, not restrict it. My goal is to help you grow in a way that fits your life. Allowing you to take charge and enjoy the process as much as the result.
        </p>
      </div>

      {/* Second Block */}
      <div>
        <img src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713757/about9_ihqzjk.png" alt="Empathy and Care" className="mx-auto mb-6 w-60 h-auto object-cover" />
        <h4 className="text-xl font-medium">Empathy and Care</h4>
        <p className="text-sm uppercase tracking-widest text-gray-600 mt-1 mb-4">
          YOUR WIN, MY WIN
        </p>
        <p className="text-base max-w-md mx-auto">
          When I work with you, it&apos;s not just business. I put myself in your shoes. I care deeply about your success and am committed to helping you thrive.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="w-full py-16 px-6 text-center">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-12 mb-12">
    {/* Authenticity & Transparency */}
    <div>
      <img src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713758/about10_myqvem.png" alt="Authenticity & Transparency" className="mx-auto mb-6 w-60 h-auto object-cover" />
      <h4 className="text-xl font-medium">Authenticity & Transparency</h4>
      <p className="text-sm uppercase tracking-widest text-gray-600 mt-1 mb-4">
        WHAT YOU SEE IS WHAT YOU GET
      </p>
      <p className="text-base max-w-md mx-auto">
        I believe in building relationships with complete openness. From our first interaction to the last, you&apos;ll always know where we stand. My commitment is to be clear, genuine, and real, every step of the way.
      </p>
    </div>

    {/* Honesty & Ethical Practices */}
    <div>
      <img src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713760/about11_lwn5hv.png" alt="Honesty & Ethical Practices" className="mx-auto mb-6 w-60 h-auto object-cover" />
      <h4 className="text-xl font-medium">Honesty & Ethical Practices</h4>
      <p className="text-sm uppercase tracking-widest text-gray-600 mt-1 mb-4">
        BUILDING YOUR SUCCESS WITH INTEGRITY
      </p>
      <p className="text-base max-w-md mx-auto">
        I value honesty above all else. I don&apos;t claim to be perfect, and I do make mistakes. But, I will always be the first to acknowledge and take responsibility for them. I strive to honour my commitments. My goal is to ensure you receive the best service possible.
      </p>
    </div>
  </div>

  {/* Respect and Collaboration */}
  <div className="max-w-3xl mx-auto">
    <img src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713761/about12_vgyhdv.png" alt="Respect and Collaboration" className="mx-auto mb-6 w-60 h-auto object-cover" />
    <h4 className="text-xl font-medium">Respect and Collaboration</h4>
    <p className="text-sm uppercase tracking-widest text-gray-600 mt-1 mb-4">
      OUR MUTUAL RESPECT STRENGTHENS TEAMWORK AND DRIVES SUCCESS
    </p>
    <p className="text-base max-w-md mx-auto">
      I believe collaboration flourishes when we value each other&apos;s perspectives. This mutual respect builds a strong sense of teamwork that drives your growth and success.
    </p>
  </div>
</section>
<section className="relative bg-white  px-6 md:px-20 border-t-4 border-[#4A3733]"></section>
<section className="bg-white py-20 px-6 md:px-20 text-center font-['Didot',serif]">
  {/* Top Text */}
  <div className="max-w-4xl mx-auto mb-20">
    <h2 className="text-[36px] md:text-[30px] leading-tight font-light tracking-wide uppercase text-black">
    WANNA BUILD YOUR BUSINESS WHERE FREEDOM AND
    </h2>
    <h2 className="text-[36px] md:text-[30px] leading-tight font-light tracking-wide uppercase text-black mt-2">
    FULFILMENT AREN’T JUST DREAMS. BUT A REALITY
    </h2>
    <p className="mt-8 text-[26px] tracking-wide text-[#2E2E2E] uppercase">
      LET’S GET STARTED...
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
        src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713713/hero6_li2r1f.png"
        alt="Virtual Assistant"
        className="w-[260px] md:w-[300px] border-[6px] border-[#f4e9de]"
      />
    </div>
  </div>
</section>
<section className="bg-white px-6 md:px-20 py font-['Didot',serif]">
  {/* Section 2 */}
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
        src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713723/hero8_toysbn.png"
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
<section className="bg-[#483435] text-white px-6 py-16">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
    {/* Text Content */}
    <div className="text-center lg:text-left max-w-2xl">
      <h2 className="text-3xl sm:text-4xl font-light tracking-widest mb-7">
        I AM ALWAYS HERE FOR YOU
      </h2>
      <p className="uppercase font-semibold tracking-wider text-lg sm:text-xl mb-8">
        Still have big questions? Maybe even small ones? I am here to answer all of them.
      </p>
      <button className="bg-white text-black px-6 py-3 font-medium tracking-widest rounded hover:bg-gray-200 transition">
        GET THE FREEDOM-FOCUSED SUPPORT YOU NEED
      </button>
    </div>

    {/* Image */}
    <div className="w-full max-w-sm">
      <img
        src="https://res.cloudinary.com/dtzqrfg6q/image/upload/v1744713763/about13_ex4zcb.png"
        alt="Support Person"
        className="w-full h-auto object-cover border-8 border-white"
      />
    </div>
  </div>
</section>
      <Footer />
    </div>
  );
}