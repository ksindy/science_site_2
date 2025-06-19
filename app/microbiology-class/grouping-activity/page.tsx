import { Download, Users, Microscope, BookOpen, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function ActivityLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Microscope className="h-8 w-8 text-orange-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Lab Manager Resources</h1>
              <p className="text-sm text-gray-600">Educational Activities & Materials</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section with Title Image */}
        <div className="text-center mb-12">
          <div className="mb-8">
            <Image
              src="/grouping_activity_docs/grouping_crop.png"
              alt="Grouping Microorganisms Title"
              width={600}
              height={300}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
            Biology • Classification • Hands-on Learning
          </Badge>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            An interactive classification activity that helps students understand taxonomy and phylogeny through
            hands-on sorting of microorganism cards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <a
                href="/grouping_docs/microorganism_grouping_activity.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Activity PDF
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-50"
            >
              <a
                href="/grouping_docs/grouping_activity_cards.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Card Cutouts
              </a>
            </Button>
          </div>
        </div>

        {/* Activity Materials Preview */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Activity Materials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-orange-800">Microorganism Cards</CardTitle>
                <CardDescription>
                  Print and cut out these cards featuring various microorganisms and cellular structures
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/grouping_activity_docs/card_cards.png"
                  alt="Microorganism card cutouts spread on table"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md w-full"
                />
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-orange-800">Phylogenetic Tree Activity</CardTitle>
                <CardDescription>
                  Students arrange cards to show evolutionary relationships between organisms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/grouping_activity_docs/phylo_cards.png"
                  alt="Phylogenetic tree activity with cards arranged in evolutionary order"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md w-full"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Activity Overview */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-orange-600" />
                Learning Objectives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                  Understand the principles of biological classification
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                  Distinguish between taxonomy and phylogeny
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                  Practice grouping organisms by different criteria
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                  Explore evolutionary relationships among microorganisms
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-orange-600" />
                Activity Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Duration:</span>
                  <span className="text-gray-600">45-60 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Group Size:</span>
                  <span className="text-gray-600">2-4 students</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Materials:</span>
                  <span className="text-gray-600">Printed cutouts, paper</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Level:</span>
                  <span className="text-gray-600">High School / College</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Concepts */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Key Concepts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-orange-50 border-orange-200">
              <CardHeader>
                <CardTitle className="text-orange-800">Taxonomy</CardTitle>
                <CardDescription className="text-orange-700">
                  The science of naming, describing, and classifying organisms
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-amber-50 border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-800">Phylogeny</CardTitle>
                <CardDescription className="text-amber-700">
                  The study of evolutionary relationships among organisms
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Three Challenges */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Three Classification Challenges</h2>
          <div className="space-y-8">
            {/* Challenge 1 */}
            <Card className="hover:shadow-lg transition-shadow border-orange-200">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-orange-600">1</span>
                  </div>
                  <div>
                    <CardTitle className="text-orange-800">Challenge #1: Size</CardTitle>
                    <CardDescription>
                      Students arrange microorganism cutouts from smallest to largest, then verify their predictions.
                    </CardDescription>
                  </div>
                </div>
                <div className="mb-4">
                  <Image
                    src="/grouping_activity_docs/size_cards.png"
                    alt="Challenge 1 completed - microorganisms arranged by size from smallest to largest"
                    width={600}
                    height={200}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  A hands-on introduction to scale and relative sizing in the microscopic world. Students learn to
                  visualize the dramatic size differences between viruses, bacteria, cells, and multicellular organisms.
                </p>
              </CardContent>
            </Card>

            {/* Challenge 2 */}
            <Card className="hover:shadow-lg transition-shadow border-orange-200">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-orange-600">2</span>
                  </div>
                  <div>
                    <CardTitle className="text-orange-800">Challenge #2: Components</CardTitle>
                    <CardDescription>
                      Sort organisms into "Eukaryotes" (true nucleus) and "Akaryotes" (no nucleus) categories.
                    </CardDescription>
                  </div>
                </div>
                <div className="mb-4">
                  <Image
                    src="/grouping_activity_docs/group_cards.png"
                    alt="Challenge 2 completed - organisms sorted into Akaryotes and Eukaryotes groups with single-cell markings"
                    width={600}
                    height={300}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Explore fundamental cellular structures and organization principles. Students identify which organisms
                  have membrane-bound nuclei and can optionally mark single-celled organisms with an "S".
                </p>
              </CardContent>
            </Card>

            {/* Challenge 3 */}
            <Card className="hover:shadow-lg transition-shadow border-orange-200">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-orange-600">3</span>
                  </div>
                  <div>
                    <CardTitle className="text-orange-800">Challenge #3: Relatedness</CardTitle>
                    <CardDescription>
                      Arrange organisms based on evolutionary development using phylogenetic principles.
                    </CardDescription>
                  </div>
                </div>
                <div className="mb-4">
                  <Image
                    src="/grouping_activity_docs/phylo_cards.png"
                    alt="Challenge 3 completed - phylogenetic tree showing evolutionary relationships between organisms"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  The most advanced challenge, requiring understanding of evolutionary relationships. Students create a
                  phylogenetic tree showing how different organisms are related through common ancestors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Download Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-orange-100">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Ready to Get Started?</h2>
            <p className="text-gray-600">
              Download the complete activity materials and start exploring classification!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <a
                href="/grouping_docs/microorganism_grouping_activity.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                Complete Activity Guide (PDF)
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-50"
            >
              <a
                href="/grouping_docs/grouping_activity_cards.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                Printable Card Cutouts (PDF)
              </a>
            </Button>
          </div>
        </div>

        {/* Author Info */}
        <Card className="bg-amber-50 border-amber-200">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Created by Karly Sindy</h3>
                <p className="text-sm text-gray-600 mb-2">Last updated: May 21, 2025</p>
                <p className="text-sm text-gray-500">Questions or corrections? Reach out for support and feedback.</p>
              </div>
              <Button variant="outline" className="mt-4 md:mt-0 border-orange-600 text-orange-600 hover:bg-orange-50">
                <Mail className="mr-2 h-4 w-4" />
                karlysindy@abtech.edu
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2025 Lab Manager Resources. Educational materials for science education.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
