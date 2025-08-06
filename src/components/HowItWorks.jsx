import React from 'react'

function HowItWorks() {
  // Workflow steps
  const steps = [
    {
      number: 1,
      title: 'Choose Your Access',
      description: 'Start by selecting how you want to access the app. Hospital staff can log in with their credentials, while family members can continue as guests using a secure patient code.'
    },
    {
      number: 2,
      title: 'Follow the Progress',
      description: 'Once inside, staff can manage patient timelines and update surgical status. Guests can track real-time updates on their loved one\'s procedure using the code provided by the hospital.'
    },
    {
      number: 3,
      title: 'Stay Updated',
      description: 'Get instant updates when the surgery is complete or when the patient is moved to recovery. No need to wait for phone calls — the board keeps everyone informed.'
    }
  ];
  return (
     <section className="py-20 bg-blue-100" id='HowItWorks'>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#0069AB] mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The system adapts to each role — from hospital staff managing patient flow to families staying informed.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {steps.map((step, index) => (
                <article key={step.number} className="text-center">
                  <div className="relative mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto shadow-lg">
                      {step.number}
                    </div>
                    <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-700 rounded-full mx-auto animate-pulse opacity-75"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
  )
}

export default HowItWorks