const ProcessSection = () => {
    return (
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-24 px-6 md:px-28"
        style={{ backgroundImage: "url(/services/service9.png)" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />
  
        {/* Vertical line in the middle */}
        <div
          className="absolute left-1/2 top-24 bottom-24 w-[1px] bg-white/40 z-10 hidden md:block"
          style={{ transform: "translateX(-50%)" }}
        />
  
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide">A PEEK INTO MY OBM AND VA PROCESS:</h2>
            <h3 className="text-xl md:text-2xl font-light mt-2">HOW I HELP YOUR BUSINESS THRIVE</h3>
          </div>
  
          <div className="grid md:grid-cols-2 gap-20">
            {/* Left Column */}
            <div className="space-y-24">
              {/* Step 1 */}
              <div>
                <h3 className="text-2xl font-semibold mb-2">Step 1:</h3>
                <h4 className="uppercase tracking-widest font-bold text-[18px] mb-4">
                  STRATEGY CALL & BUSINESS
                  <br />
                  DEEP DIVE
                </h4>
                <p className="text-base leading-relaxed font-light max-w-md">
                  We'll kick off our collaboration with a session focused on understanding your business inside out.
                  Together, we'll identify your key challenges and aspirations. This will ensure we're aligned on your
                  vision and objectives from the start.
                </p>
              </div>
  
              {/* Step 3 */}
              <div>
                <h3 className="text-2xl font-semibold mb-2">Step 3:</h3>
                <h4 className="uppercase tracking-widest font-bold text-[18px] mb-4">
                  COLLABORATION &<br />
                  REFINEMENT
                </h4>
                <p className="text-base leading-relaxed font-light max-w-md">
                  Once you receive the action plan, we'll connect for a review. This is your opportunity to provide input
                  and make any necessary adjustments. Together, we'll finalise a roadmap that feels just right for your
                  business.
                </p>
              </div>
  
              {/* Step 5 */}
              <div>
                <h3 className="text-2xl font-semibold mb-2">Step 5:</h3>
                <h4 className="uppercase tracking-widest font-bold text-[18px] mb-4">REVIEW & INSIGHTS</h4>
                <p className="text-base leading-relaxed font-light max-w-md">
                  After implementation, we'll evaluate the results. We'll discuss what's working well and identify
                  opportunities for further improvement. This ongoing reflection helps us adapt and for sustained success.
                </p>
              </div>
            </div>
  
            {/* Right Column */}
            <div className="space-y-36 pt-28">
              {/* Step 2 */}
              <div>
                <h3 className="text-2xl font-semibold mb-2">Step 2:</h3>
                <h4 className="uppercase tracking-widest font-bold text-[18px] mb-4">
                  CUSTOMISED ACTION
                  <br />
                  PLAN & TIMELINE
                </h4>
                <p className="text-base leading-relaxed font-light max-w-md">
                  Based on our discussions, I'll develop a customised action plan to streamline your operations. The plan
                  will include clear timelines and milestones to keep us on track. This will ensure all efforts align with
                  your objectives.
                </p>
              </div>
  
              {/* Step 4 */}
              <div>
                <h3 className="text-2xl font-semibold mb-2">Step 4:</h3>
                <h4 className="uppercase tracking-widest font-bold text-[18px] mb-4">
                  SEAMLESS
                  <br />
                  EXECUTION
                </h4>
                <p className="text-base leading-relaxed font-light max-w-md">
                  With our plan in place, I'll handle the execution. I'll manage tasks and timelines to ensure everything
                  runs smoothly. You'll be free to focus on your core business and strategic growth, without getting
                  bogged down in the details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default ProcessSection
  