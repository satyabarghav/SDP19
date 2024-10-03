import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-orange-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-orange-800 mb-8 text-center"
        >
          About ConstitutionEdu
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <p className="text-lg text-orange-700 mb-4">
            ConstitutionEdu is a platform dedicated to educating citizens about the Indian Constitution. Our mission is to make constitutional knowledge accessible to everyone, fostering a more informed and engaged citizenry.
          </p>
          <p className="text-lg text-orange-700 mb-4">
            We believe that understanding the framework of our nation, our fundamental rights, and our duties as citizens is crucial for the growth and development of our democracy.
          </p>
          <p className="text-lg text-orange-700">
            Through interactive content, expert insights, and community discussions, we aim to create a comprehensive resource for anyone interested in learning about the Indian Constitution.
          </p>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

export default AboutUs