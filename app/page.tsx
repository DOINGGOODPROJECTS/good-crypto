import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Globe, Heart, Lightbulb, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 px-4 py-24 text-center md:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/collaboration-meeting.png"
            alt="Collaborative meeting of innovators"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl space-y-6">
          <div className="inline-block rounded-full bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-400">
            Launching in 2025
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">GOOD CRYPTO!</h1>
          <p className="mx-auto max-w-2xl text-xl text-slate-300">
            The world's first pre-incubator program for launching high-impact nonprofits and public goods in the Web3
            space.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
              Apply Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-700">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-white px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Introduction</h2>
            <p className="text-lg text-slate-600">
              GOOD CRYPTO! is set to revolutionize the Web3 landscape as the world's first pre-incubator program
              specifically designed for launching high-impact nonprofits and public goods. We aim to cultivate a new
              wave of tech-driven philanthropy and public service by providing critical support and resources to
              aspiring innovators.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-6">
              <Lightbulb className="mb-4 h-10 w-10 text-emerald-500" />
              <h3 className="mb-2 text-xl font-bold text-slate-900">Innovation Overview</h3>
              <p className="text-slate-600">
                GOOD CRYPTO! uniquely focuses on the intersection of blockchain technology and social impact,
                facilitating the creation of organizations that leverage Web3 to address global challenges through an
                intensive, 8-week online program.
              </p>
            </div>
            <div className="rounded-xl bg-slate-50 p-6">
              <Users className="mb-4 h-10 w-10 text-emerald-500" />
              <h3 className="mb-2 text-xl font-bold text-slate-900">Operational Framework</h3>
              <p className="text-slate-600">
                We select a highly talented cohort of innovators with complementary skills, provide intensive training,
                and connect participants with mentors and seasoned entrepreneurs throughout their journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-slate-50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Impact</h2>
            <p className="text-lg text-slate-600">
              GOOD CRYPTO! drives meaningful change across economic, social, and environmental dimensions through Web3
              innovation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 rounded-full bg-emerald-100 p-3 w-fit">
                <Globe className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">Economic</h3>
              <p className="text-slate-600">
                Stimulating economic activity and innovation by fostering new nonprofits and startups in the Web3 space,
                creating jobs and attracting investment.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 rounded-full bg-emerald-100 p-3 w-fit">
                <Heart className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">Social</h3>
              <p className="text-slate-600">
                Contributing to societal well-being by supporting the development of transparent, efficient, and
                accountable solutions to pressing global issues.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 rounded-full bg-emerald-100 p-3 w-fit">
                <Lightbulb className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">Environmental</h3>
              <p className="text-slate-600">
                Encouraging projects that leverage blockchain technology to address environmental challenges and promote
                sustainable technological development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cohort Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 px-4 py-16 text-center md:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="inline-flex items-center rounded-full bg-emerald-500/10 px-4 py-1">
            <Calendar className="mr-2 h-4 w-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-400">Coming Soon</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">First Cohort Launching in 2025</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            Join our inaugural cohort of innovators and be part of the first wave of Web3 projects dedicated to creating
            positive social impact.
          </p>
          <Button size="lg" className="mt-4 bg-emerald-500 hover:bg-emerald-600">
            Get Notified
          </Button>
        </div>
      </section>

      {/* Program Details */}
      <section className="bg-white px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Program Details</h2>
            <p className="text-lg text-slate-600">
              Our comprehensive 8-week online program provides everything you need to transform your idea into a viable
              Web3 nonprofit or public good.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col rounded-xl border border-slate-200 p-6 md:flex-row md:items-start md:gap-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 md:mb-0">
                <span className="text-xl font-bold">1</span>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">Founder Pairing</h3>
                <p className="text-slate-600">
                  We carefully select innovators with complementary skills and match them to form dynamic founding teams
                  capable of bringing powerful ideas to life.
                </p>
              </div>
            </div>

            <div className="flex flex-col rounded-xl border border-slate-200 p-6 md:flex-row md:items-start md:gap-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 md:mb-0">
                <span className="text-xl font-bold">2</span>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">Intensive Training</h3>
                <p className="text-slate-600">
                  Our 8-week program arms participants with the necessary skills and knowledge to refine their project
                  ideas into actionable plans ready for implementation.
                </p>
              </div>
            </div>

            <div className="flex flex-col rounded-xl border border-slate-200 p-6 md:flex-row md:items-start md:gap-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 md:mb-0">
                <span className="text-xl font-bold">3</span>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">Community & Mentorship</h3>
                <p className="text-slate-600">
                  Gain access to a robust network of mentors, seasoned entrepreneurs, and value-aligned professionals
                  who provide guidance throughout your journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 px-4 py-16 text-center md:py-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Ready to Make an Impact?</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Join GOOD CRYPTO! and be part of the movement to transform the Web3 space with projects that create positive
            change for society and the environment.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
              Apply for 2025 Cohort
            </Button>
            <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-100">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 px-4 py-12 text-slate-400">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white">GOOD CRYPTO!</h3>
              <p className="mt-2">Launching high-impact nonprofits and public goods in Web3</p>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white">
                About
              </Link>
              <Link href="#" className="hover:text-white">
                Program
              </Link>
              <Link href="#" className="hover:text-white">
                Impact
              </Link>
              <Link href="#" className="hover:text-white">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} GOOD CRYPTO! All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
