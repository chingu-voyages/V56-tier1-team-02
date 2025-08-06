import React from 'react'
import { useState } from 'react';

function FAQ() {
    const [openFaq, setOpenFaq] = useState(null);
    const toggleFaq = (faqId) => {
      setOpenFaq(openFaq === faqId ? null : faqId);
    };
   // FAQ data
    const faqs = [
    {
      id: 1,
      icon: '🔐',
      question: 'Is login required?',
      answer: "Only if you're staff. Guests can access public patient status with a single click.",
      bgColor: 'from-red-50 to-pink-50',
      iconColor: 'text-pink-600'
    },
    {
      id: 2,
      icon: '📱',
      question: 'Can I use this on mobile?',
      answer: 'Yes! The interface is fully responsive and works on smartphones and tablets.',
      bgColor: 'from-blue-50 to-indigo-50',
      iconColor: 'text-blue-600'
    },
    {
      id: 3,
      icon: '🔒',
      question: 'Is personal data displayed?',
      answer: 'No. Only anonymized patient codes and statuses are shown — no names or sensitive data.',
      bgColor: 'from-green-50 to-emerald-50',
      iconColor: 'text-green-600'
    },
    {
      id: 4,
      icon: '❓',
      question: "What if I don't log in?",
      answer: 'You can still view status as guest.',
      bgColor: 'from-purple-50 to-violet-50',
      iconColor: 'text-purple-600'
    }
  ];
  return (
        <section className="py-20 bg-blue-50" id='FAQ '>
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#0069AB] mb-4">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq) => (
                <article key={faq.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-6 text-left flex items-center gap-4 hover:bg-gray-50 transition-colors duration-200  outline-none"
                    aria-expanded={openFaq === faq.id}
                  >
                    <div className={`w-10 h-10 bg-gradient-to-br ${faq.bgColor} rounded-lg flex items-center justify-center ${faq.iconColor} flex-shrink-0`}>
                      {faq.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 flex-1">{faq.question}</h3>
                    <div className={`transform transition-transform duration-200 ${openFaq === faq.id ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {openFaq === faq.id && (
                    <div className="px-6 pb-6 pl-20">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
  )
}

export default FAQ