import Header from "../components/Header"
import Footer from "../components/Footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white font-['system-ui','-apple-system','BlinkMacSystemFont','Segoe_UI','Roboto','Helvetica_Neue',Arial,sans-serif]">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-white bg-opacity-50"
          style={{
            backgroundImage: "url('contact.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <h1 className="text-7xl font-['Playfair_Display',serif] text-[#6d4c41] relative z-10">GET IN TOUCH</h1>
      </section>

      {/* Questions Section */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-['aboreto'] text-center text-[#6d4c41] mb-8">
          HAVE QUESTIONS ? I MAY HAVE ANSWERS FOR YOU
        </h2>

        <h3 className="text-4xl font-medium text-center text-[#6d4c41] uppercase mb-12 font-['afacad']">
          CONTACT ME VIA THE FORM GIVEN BELOW
          <br />& I WILL GET BACK TO YOU
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h4 className="uppercase text-xl font-medium text-[#6d4c41] font-['afacad']">PHONE</h4>
              <p>+91 80179 66974</p>
            </div>

            <div>
              <h4 className="uppercase font-medium text-xl text-[#6d4c41] font-['afacad']">EMAIL</h4>
              <p>Tanishqjha@gmail.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form action="https://getform.io/f/ajjmwwqa" method="POST" className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="NAME"
                className="w-full border border-[#6d4c41] p-3 bg-transparent"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="PHONE"
                className="w-full border border-[#6d4c41] p-3 bg-transparent"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                className="w-full border border-[#6d4c41] p-3 bg-transparent"
                required
              />

              <textarea
                name="message"
                placeholder="MESSAGE"
                rows={6}
                className="w-full border border-[#6d4c41] p-3 bg-transparent"
                required
              />

              <button 
                type="submit" 
                className="bg-[#6B4E50] text-white py-2 px-8 uppercase w-full md:w-auto font-['poppins']"
                style={{ backgroundColor: '#6d4c41' }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />      
    </main>
  )
}
