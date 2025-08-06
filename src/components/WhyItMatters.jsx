import React from 'react'
import { useState, useEffect } from 'react';

function WhyItMatters() {
  // Features data
  const features = [
    {
      icon: '💗',
      title: 'Reduces Anxiety',
      description: 'Loved ones in the waiting room often feel helpless. This app provides peace of mind by keeping them informed without needing constant updates from staff.',
      bgColor: 'from-red-50 to-pink-50',
      iconColor: 'text-pink-600'
    },
    {
      icon: '⏱️',
      title: 'Saves Time for Medical Staff',
      description: 'Rather than answering repeated questions, staff can focus on patient care while families receive updates automatically.',
      bgColor: 'from-blue-50 to-indigo-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: '🛡️',
      title: 'Keeps Information Secure',
      description: 'Patient names are displayed using initials or anonymized tags to respect privacy while still keeping the process transparent.',
      bgColor: 'from-purple-50 to-violet-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: '📱',
      title: 'Centralized & Digital',
      description: 'Whether accessed from a waiting room screen or on a personal device, the information is live, synced, and easy to follow.',
      bgColor: 'from-green-50 to-emerald-50',
      iconColor: 'text-green-600'
    },
    {
      icon: '🤖',
      title: 'Optional AI Chat Support',
      description: 'Need help understanding the process or have a question? Use the built-in chatbot to get instant answers—no need to track down busy personnel.',
      bgColor: 'from-yellow-50 to-amber-50',
      iconColor: 'text-yellow-600'
    }
  ];
     
 
  return (
    <section className="py-20 bg-blue-50" id='WhyItMatters'>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#0069AB] mb-4">Why This Matters</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Surgery is stressful. We make it clearer.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <article 
                  key={index}
                  className="bg-white rounded-2xl p-8 border text-black border-gray-100 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300"
                  style={{
                    opacity: 0,
                    transform: 'translateY(20px)',
                    animation: `fadeInUp 0.6s ease forwards ${index * 0.1}s`
                  }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.bgColor} rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm`}>
                    <span className={feature.iconColor}>{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
  )
}

export default WhyItMatters