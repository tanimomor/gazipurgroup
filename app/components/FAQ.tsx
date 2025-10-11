'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: Record<string, FAQItem[]> = {
  General: [
    {
      question: 'What services does The Gazipur Group provide?',
      answer: 'We specialize in international manpower recruitment and placement services, connecting skilled workers with employers across the Middle East, Asia, and Europe. Our services include candidate sourcing, training, documentation, and post-placement support.',
    },
    {
      question: 'Which countries do you recruit for?',
      answer: 'We have active partnerships with employers in Saudi Arabia, UAE, Qatar, Malaysia, and several European countries. Our network continues to expand to meet the growing demand for skilled workers.',
    },
    {
      question: 'How long does the recruitment process take?',
      answer: 'The timeline varies depending on the destination country and job requirements. Typically, the process takes 2-4 months from application to deployment, including documentation, medical tests, and visa processing.',
    },
    {
      question: 'What are the costs involved in overseas employment?',
      answer: 'Costs vary based on the destination country and position. We provide transparent pricing with no hidden fees. Our team will provide a detailed breakdown during your consultation.',
    },
  ],
  'For Workers': [
    {
      question: 'What qualifications do I need to work abroad?',
      answer: 'Requirements vary by country and position. Generally, you need relevant skills or experience, valid identification documents, and good health. Our team will assess your eligibility during the initial consultation.',
    },
    {
      question: 'Do you provide training programs?',
      answer: 'Yes, we offer comprehensive training programs including language courses, technical skills development, and cultural orientation to prepare you for working abroad.',
    },
    {
      question: 'What support do you provide after placement?',
      answer: 'We maintain contact with our workers and provide ongoing support including assistance with workplace issues, contract renewals, and emergency situations.',
    },
    {
      question: 'Can I choose which country I want to work in?',
      answer: 'Yes, we work with you to match your preferences and qualifications with available opportunities in your desired destination country.',
    },
  ],
  'For Employers': [
    {
      question: 'How do you ensure worker quality?',
      answer: 'We have a rigorous screening process including skills assessment, background verification, and interviews. All candidates undergo training and orientation before deployment.',
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We recruit for construction, hospitality, healthcare, manufacturing, agriculture, and various other sectors. Our diverse talent pool can meet most industry requirements.',
    },
    {
      question: 'Do you handle visa and documentation?',
      answer: 'Yes, we manage the entire documentation process including work permits, visas, medical certificates, and all required legal paperwork in compliance with local regulations.',
    },
    {
      question: 'What is your replacement policy?',
      answer: 'We offer a replacement guarantee if a worker is unable to continue employment due to valid reasons within the agreed period. Terms are outlined in our service agreement.',
    },
  ],
  Process: [
    {
      question: 'How do I start the application process?',
      answer: 'Contact us through our website, phone, or visit our office. Our team will schedule a consultation to discuss your goals, assess your qualifications, and explain the next steps.',
    },
    {
      question: 'What documents do I need to provide?',
      answer: 'Typically you need a valid passport, educational certificates, experience letters, medical fitness certificate, and passport-sized photographs. Specific requirements vary by destination.',
    },
    {
      question: 'How do I track my application status?',
      answer: 'We provide regular updates throughout the process. You can also contact our office anytime for status updates on your application.',
    },
    {
      question: 'What happens if my visa is rejected?',
      answer: 'In the rare case of visa rejection, we work with you to understand the reasons and explore alternative options or reapplication. Our experienced team minimizes such risks through proper documentation.',
    },
  ],
};

export default function FAQ() {
  const [activeTab, setActiveTab] = useState('General');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side - Title and CTA */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Clarity is luxury. Here are the questions we&apos;re asked most. And if there&apos;s anything more you need, we&apos;re just a message away.
              </p>
              
              <div className="mb-8">
                <p className="text-xl font-semibold text-gray-900 mb-4">Got more questions?</p>
                <a
                  href="/contact"
                  className="inline-block px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  Contact Us
                </a>
              </div>

              {/* Decorative illustration */}
              <div className="hidden lg:block mt-12">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-emerald-100 rounded-full opacity-50 animate-pulse"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-emerald-200 rounded-full opacity-70"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - FAQ Content */}
          <div className="lg:col-span-8">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
              {Object.keys(faqData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setOpenIndex(null);
                  }}
                  className={`px-6 py-3 font-medium transition-all duration-200 border-b-2 ${
                    activeTab === tab
                      ? 'border-emerald-600 text-emerald-600'
                      : 'border-transparent text-gray-600 hover:text-emerald-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Questions */}
            <div className="space-y-4">
              {faqData[activeTab].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 hover:border-emerald-300 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <span className="text-lg font-medium text-gray-900 pr-4">
                      {item.question}
                    </span>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <Minus className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <Plus className="w-5 h-5 text-emerald-600" />
                      )}
                    </div>
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
