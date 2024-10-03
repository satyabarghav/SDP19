import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Book, Scale, Users, Landmark, FileText, Shield } from 'lucide-react'

const Home = () => {
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
          Welcome to ConstitutionEdu
        </motion.h1>
        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-orange-700 mb-8 text-center"
        >
          Explore the Indian Constitution, its framework, fundamental rights, and citizens' duties.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Book className="mr-2 h-6 w-6 text-orange-600" />
                Framework
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>The Indian Constitution, adopted on 26 January 1950, provides a comprehensive framework for governance. It establishes India as a sovereign, socialist, secular, and democratic republic, outlining the structure and functions of various institutions.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Scale className="mr-2 h-6 w-6 text-orange-600" />
                Fundamental Rights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>The Constitution guarantees six fundamental rights to all citizens:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Right to Equality</li>
                <li>Right to Freedom</li>
                <li>Right against Exploitation</li>
                <li>Right to Freedom of Religion</li>
                <li>Cultural and Educational Rights</li>
                <li>Right to Constitutional Remedies</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-6 w-6 text-orange-600" />
                Citizens' Duties
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>The Constitution outlines 11 fundamental duties for Indian citizens, including:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Respecting the Constitution and its ideals</li>
                <li>Cherishing and following the noble ideals of the freedom struggle</li>
                <li>Protecting the sovereignty, unity, and integrity of India</li>
                <li>Promoting harmony and the spirit of common brotherhood</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Landmark className="mr-2 h-6 w-6 text-orange-600" />
                Governance Structure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>The Constitution establishes a federal structure with a strong central government:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Parliament at the center (Lok Sabha and Rajya Sabha)</li>
                <li>State legislatures in the states</li>
                <li>Union Territories administered by the central government</li>
                <li>Clear division of powers between center and states</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-6 w-6 text-orange-600" />
                Key Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Some unique aspects of the Indian Constitution include:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Longest written constitution of any sovereign country</li>
                <li>Blend of rigidity and flexibility</li>
                <li>Provision for affirmative action</li>
                <li>Universal adult suffrage</li>
                <li>Independent judiciary</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-6 w-6 text-orange-600" />
                Constitutional Safeguards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>The Constitution provides various safeguards to protect democracy:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Separation of powers between executive, legislature, and judiciary</li>
                <li>Fundamental rights that are enforceable in courts</li>
                <li>Independent bodies like Election Commission and UPSC</li>
                <li>Special provisions for minorities and backward classes</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home