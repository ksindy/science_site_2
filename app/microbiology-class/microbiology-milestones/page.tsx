"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Brain, Eye, Users, Clock, Lightbulb } from "lucide-react"
import Image from "next/image"

export default function MicrobiologyMilestonesLanding() {
  const handleDownload = (filename: string) => {
    console.log(`Downloading ${filename}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">Lab Manager</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                Activities
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                Resources
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
                About
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="mb-8">
              <Image
                src="/placeholder.jpg"
                alt="Microbiology Milestones: A Selection of Pioneers and Their Discoveries"
                width={800}
                height={400}
                className="mx-auto rounded-lg shadow-lg"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Microbiology Milestones Activity</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Engage your students with an interactive timeline activity that combines visual learning with historical
              discovery. Perfect for enhancing memory retention and creating lasting associations through multi-sensory
              learning.
            </p>
          </div>
        </div>
      </section>

      {/* Educational Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Visual Learning Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              This activity leverages multiple learning pathways to enhance student engagement and retention
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Eye className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle className="text-xl text-gray-800">Visual Memory</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Facial recognition and visual cues create stronger memory pathways, making historical figures more
                  memorable and relatable.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Brain className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle className="text-xl text-gray-800">Active Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Students actively match researchers to discoveries, engaging problem-solving skills and critical
                  thinking.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Lightbulb className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle className="text-xl text-gray-800">Association Building</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Visual clues help students build mental connections between people, discoveries, and time periods.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Activity Materials Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Activity Materials</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to run this engaging microbiology timeline activity in your classroom
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Complete Timeline */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <Clock className="w-5 h-5 text-orange-500" />
                  Complete Timeline
                </CardTitle>
                <CardDescription>Full timeline with all researchers, discoveries, and dates revealed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Image
                    src="/placeholder.jpg"
                    alt="Complete Microbiology Timeline"
                    width={300}
                    height={200}
                    className="w-full rounded-lg border"
                  />
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Use this as your answer key or for initial instruction before the activity.
                </p>
                <Button
                  onClick={() => handleDownload("microbiology_milestones_complete.pdf")}
                  className="w-full bg-orange-500 hover:bg-orange-600"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Complete Timeline
                </Button>
              </CardContent>
            </Card>

            {/* Mystery Timeline */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <Eye className="w-5 h-5 text-orange-500" />
                  Mystery Timeline
                </CardTitle>
                <CardDescription>Timeline with covered faces and names for the matching activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Image
                    src="/placeholder.jpg"
                    alt="Mystery Timeline with Covered Faces"
                    width={300}
                    height={200}
                    className="w-full rounded-lg border"
                  />
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Students use visual clues and context to match researchers to their discoveries.
                </p>
                <Button
                  onClick={() => handleDownload("microbiology_milestones_mystery.pdf")}
                  className="w-full bg-orange-500 hover:bg-orange-600"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Mystery Timeline
                </Button>
              </CardContent>
            </Card>

            {/* Researcher Cards */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-800">
                  <Users className="w-5 h-5 text-orange-500" />
                  Researcher Cards
                </CardTitle>
                <CardDescription>Cut-out cards with researcher images, names, and discovery blanks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Image
                    src="/placeholder-user.jpg"
                    alt="Researcher Cards with Names and Blank Discovery Fields"
                    width={300}
                    height={400}
                    className="w-full rounded-lg border"
                  />
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Individual cards for hands-on matching. Students fill in discovery details and dates.
                </p>
                <Button
                  onClick={() => handleDownload("microbiology_researcher_cards.pdf")}
                  className="w-full bg-orange-500 hover:bg-orange-600"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Researcher Cards
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How to Use This Activity</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Setup Instructions</h3>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      1
                    </span>
                    Print the mystery timeline and researcher cards
                  </li>
                  <li className="flex items-start">
                    <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      2
                    </span>
                    Cut out the individual researcher cards
                  </li>
                  <li className="flex items-start">
                    <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      3
                    </span>
                    Display the mystery timeline for students
                  </li>
                  <li className="flex items-start">
                    <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      4
                    </span>
                    Distribute researcher cards to student groups
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Activity Flow</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">•</span>
                    Students examine visual clues in timeline illustrations
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">•</span>
                    Match researcher cards to corresponding timeline entries
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">•</span>
                    Fill in discovery details and dates on cards
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">•</span>
                    Discuss findings and reveal complete timeline
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Lab Manager</span>
              </div>
              <p className="text-gray-400">Creating engaging educational activities for science educators worldwide.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    More Activities
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Teaching Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Educational Benefits</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Visual Learning Enhancement</li>
                <li>Memory Retention Improvement</li>
                <li>Active Student Engagement</li>
                <li>Historical Context Building</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Lab Manager. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

