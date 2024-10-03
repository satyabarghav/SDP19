import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Citizen = () => {
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
          Citizen Learning Center
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Explore Content</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Access a wide range of educational materials on the Indian Constitution.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Participate in Discussions</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Engage in meaningful discussions with other citizens and educators on constitutional topics.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Interactive Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Access quizzes, infographics, and other interactive tools to enhance your understanding.</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Citizen