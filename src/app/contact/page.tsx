"use client"

import { useState } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"

// Define the form data type
interface FormData {
  name: string
  phone: string
  email: string
  businessName?: string
  website?: string
  businessType: string
  businessDuration: string[]
  revenueRange: string[]
  message: string
}

export default function Contact() {
  const { register, handleSubmit, reset } = useForm<FormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true)
    setIsSuccess(false)

    try {
      // Convert the form data to URLSearchParams format
      const formData = new URLSearchParams()

      // Append each field in the data to formData
      Object.keys(data).forEach((key) => {
        if (Array.isArray(data[key as keyof FormData])) {
          // If the field is an array (checkboxes), join values with commas
          formData.append(key, (data[key as keyof FormData] as string[]).join(","))
        } else {
          formData.append(key, data[key as keyof FormData] as string)
        }
      })

      const response = await fetch("https://getform.io/f/ajjmwwqa", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData, // Pass the URLSearchParams object as the body
      })

      if (response.ok) {
        setIsSuccess(true)
        reset()
      } else {
        console.error("Form submission failed")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
      {isSuccess && <div className="bg-green-200 p-3 rounded mb-4 text-green-800">Message sent successfully!</div>}
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            {...register("message", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  )
}
