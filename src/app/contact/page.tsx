"use client"

import { useState } from "react"
import Image from "next/image"
import { useForm, SubmitHandler } from "react-hook-form"
import { motion } from "framer-motion"
import Header from "../components/Header"

// Define the form data type
interface FormData {
  name: string;
  phone: string;
  email: string;
  businessName?: string;
  website?: string;
  businessType: string;
  businessDuration: string[];
  revenueRange: string[];
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>() // Use the FormData type here

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
  
    try {
      // Convert the form data to URLSearchParams format
      const formData = new URLSearchParams();
  
      // Append each field in the data to formData
      Object.keys(data).forEach((key) => {
        if (Array.isArray(data[key])) {
          // If the field is an array (checkboxes), join values with commas
          formData.append(key, data[key].join(','));
        } else {
          formData.append(key, data[key]);
        }
      });
  
      const response = await fetch("https://getform.io/f/ajjmwwqa", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData, // Pass the URLSearchParams object as the body
      });
  
      if (response.ok) {
        setIsSubmitted(true);
        reset();
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="bg-white min-h-screen">
      <Header />
  {/* Hero Section with Burlap Background */}
  <div className="relative w-full h-[300px] md:h-[400px]">
    <Image
      src="/contact.png"
      alt="Get In Touch"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <h1 className="text-3xl md:text-8xl font-light text-white drop-shadow-lg font-['afacad']">
        Get In Touch
      </h1>
    </div>
  </div>
      {/* Heading Section */}
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl md:text-4xl font-light tracking-wide text-[#333] mb-8">
          HAVE QUESTIONS? I MAY HAVE ANSWERS FOR YOU
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-[#6D5A5A] mb-12">
          CONTACT ME VIA THE FORM GIVEN BELOW <br className="hidden md:block" />& I WILL GET BACK TO YOU
        </h2>
      </div>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto px-4 pb-20">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#f8f5f2] p-8 rounded-md text-center"
          >
            <h3 className="text-2xl font-medium text-[#6D5A5A] mb-4">Thank You!</h3>
            <p className="text-lg text-[#333]">
              Your message has been submitted successfully. I will get back to you soon.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm md:text-base font-medium uppercase tracking-wide mb-2">
                NAME
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true })}
                className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-[#6D5A5A]"
              />
              {errors.name && <span className="text-red-500 text-sm mt-1">This field is required</span>}
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-sm md:text-base font-medium uppercase tracking-wide mb-2">
                PHONE
              </label>
              <input
                type="tel"
                id="phone"
                {...register("phone", { required: true })}
                className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-[#6D5A5A]"
              />
              {errors.phone && <span className="text-red-500 text-sm mt-1">This field is required</span>}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm md:text-base font-medium uppercase tracking-wide mb-2">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-[#6D5A5A]"
              />
              {errors.email?.type === "required" && (
                <span className="text-red-500 text-sm mt-1">This field is required</span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="text-red-500 text-sm mt-1">Please enter a valid email address</span>
              )}
            </div>

            {/* Business Name Field */}
            <div>
              <label
                htmlFor="businessName"
                className="block text-sm md:text-base font-medium uppercase tracking-wide mb-2"
              >
                YOUR BUSINESS NAME (IF APPLICABLE)
              </label>
              <input
                type="text"
                id="businessName"
                {...register("businessName")}
                className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-[#6D5A5A]"
              />
            </div>

            {/* Website/Social Media Field */}
            <div>
              <label htmlFor="website" className="block text-sm md:text-base font-medium uppercase tracking-wide mb-2">
                WEBSITE / SOCIAL MEDIA HANDLES (IF ANY)
              </label>
              <input
                type="text"
                id="website"
                {...register("website")}
                className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-[#6D5A5A]"
              />
            </div>

            {/* Business Type Field */}
            <div>
              <label
                htmlFor="businessType"
                className="block text-sm md:text-base font-medium uppercase tracking-wide mb-2"
              >
                WHAT TYPE OF BUSINESS DO YOU RUN? (E.G., COACHING, FREELANCING, E-COMMERCE, AGENCY, SAAS, ETC.)
              </label>
              <textarea
                id="businessType"
                {...register("businessType", { required: true })}
                rows={5}
                className="w-full border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-[#6D5A5A]"
              ></textarea>
              {errors.businessType && <span className="text-red-500 text-sm mt-1">This field is required</span>}
            </div>

            {/* Business Duration Field */}
            <div>
              <p className="block text-sm md:text-base font-medium uppercase tracking-wide mb-3">
                HOW LONG HAVE YOU BEEN IN BUSINESS?
              </p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="duration1"
                    value="LESS THAN 6 MONTHS"
                    {...register("businessDuration")}
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="duration1" className="text-sm md:text-base">
                    LESS THAN 6 MONTHS
                  </label>
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="duration2"
                    value="6 MONTHS - 1 YEAR"
                    {...register("businessDuration")}
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="duration2" className="text-sm md:text-base">
                    6 MONTHS - 1 YEAR
                  </label>
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="duration3"
                    value="1-3 YEARS"
                    {...register("businessDuration")}
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="duration3" className="text-sm md:text-base">
                    1-3 YEARS
                  </label>
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="duration4"
                    value="3-5 YEARS"
                    {...register("businessDuration")}
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="duration4" className="text-sm md:text-base">
                    3-5 YEARS
                  </label>
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="duration5"
                    value="MORE THAN 5 YEARS"
                    {...register("businessDuration")}
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="duration5" className="text-sm md:text-base">
                    MORE THAN 5 YEARS
                  </label>
                </div>
              </div>
            </div>

            {/* Revenue Range Field */}
            <div>
              <p className="block text-sm md:text-base font-medium uppercase tracking-wide mb-3">
                WHAT IS YOUR CURRENT MONTHLY REVENUE RANGE?
              </p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="revenue1"
                    value="LESS THAN RS. 100,000"
                    {...register("revenueRange")}
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="revenue1" className="text-sm md:text-base">
                    LESS THAN RS. 100,000
                  </label>
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="revenue2"
                    value="RS. 100,000 - RS. 250,000"
                    {...register("revenueRange")}
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="revenue2" className="text-sm md:text-base">
                    RS. 100,000 - RS. 250,000
                  </label>
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="revenue3"
                    value="RS. 250,000 - RS. 500,000"
                    {...register("revenueRange")}
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="revenue3" className="text-sm md:text-base">
                    RS. 250,000 - RS. 500,000
                  </label>
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="revenue4"
                    value="RS. 500,000 - RS. 1,000,000"
                    {...register("revenueRange")}
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="revenue4" className="text-sm md:text-base">
                    RS. 500,000 - RS. 1,000,000
                  </label>
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="revenue5"
                    value="OVER RS. 1,000,000"
                    {...register("revenueRange")}
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="revenue5" className="text-sm md:text-base">
                    OVER RS. 1,000,000
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#6D5A5A] text-white uppercase tracking-wide py-3 px-12 hover:bg-[#5a4a4a] transition-colors duration-300 disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
