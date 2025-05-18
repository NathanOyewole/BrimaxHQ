"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    content: "BrimaxHQ transformed our business with their innovative SaaS solution. The team's expertise and professionalism are unmatched.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
  },
  {
    id: 2,
    content: "Working with BrimaxHQ was a game-changer for our company. Their attention to detail and technical expertise exceeded our expectations.",
    author: "Michael Chen",
    role: "CTO, Digital Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
  },
  {
    id: 3,
    content: "The team at BrimaxHQ delivered a solution that perfectly matched our needs. Their approach to problem-solving is truly impressive.",
    author: "Emily Rodriguez",
    role: "Operations Director, GrowthCo",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
  },
]

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative overflow-hidden py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="mb-8">
              <Image
                src={testimonials[current].image}
                alt={testimonials[current].author}
                width={150}
                height={150}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                &ldquo;{testimonials[current].content}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {testimonials[current].author}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {testimonials[current].role}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                current === index
                  ? "bg-blue-600"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 