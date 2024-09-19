import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <section className='bg-gradient-to-r from-slate-200 to-slate-400 text-slate-900 min-h-screen flex items-center justify-center'>
        <div className='text-center space-y-6'>
          <h1 className='text-4xl font-bold'>
            Automate Your Marketing with GEN AI-Powered Campaigns
          </h1>
          <p className='text-lg'>
            Reach your audience on Email, WhatsApp, and Instagram with
            personalized content generated by AI.
          </p>
        </div>
      </section>

      <section className='how-it-works py-16'>
        <div className='max-w-6xl mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-8'>How It Works</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <StepCard
              step='1'
              title='Input Your Goals'
              description='Tell us your marketing objectives.'
            />
            <StepCard
              step='2'
              title='AI Generates Content'
              description='Our AI creates text and images tailored to your audience.'
            />
            <StepCard
              step='3'
              title='Deploy Campaigns'
              description='Send them via Email, WhatsApp, and Instagram with a click.'
            />
          </div>
        </div>
      </section>

      <section className='cta bg-gray-300 text-slate-600 py-12'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold mb-4 '>
            Start automating your campaigns today!
          </h2>
          <Link to='/signup'>
            <button className='bg-white text-slate-600 font-semibold py-2 px-4 rounded-lg'>
              Get Started !
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

// Step Card Component
const StepCard = ({ step, title, description }) => (
  <div className='bg-white shadow-lg p-6 rounded-lg'>
    <div className='text-5xl font-bold text-slate-600 mb-4'>{step}</div>
    <h3 className='text-xl font-bold'>{title}</h3>
    <p>{description}</p>
  </div>
)

export default LandingPage
