import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Educator = () => {
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
          Educator Portal
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Create Content</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Develop educational materials on various aspects of the Indian Constitution.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Interactive Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Conduct live sessions and webinars to engage with citizens and answer their questions.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Provide Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Share expert insights and interpretations of constitutional matters.</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Educator