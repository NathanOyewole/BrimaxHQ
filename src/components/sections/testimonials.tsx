"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    content: "BrimaxHQ transformed our business with their innovative SaaS solution. Highly recommended!",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
  },
  {
    content: "Professional, efficient, and delivered beyond our expectations. Great team to work with!",
    author: "Michael Chen",
    role: "CTO, Digital Solutions",
  },
  {
    content: "Their expertise in software development helped us scale our operations significantly.",
    author: "Emily Rodriguez",
    role: "Operations Director, GrowthCo",
  },
]

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Client Testimonials
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            What our clients say about us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg"
            >
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.author}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 