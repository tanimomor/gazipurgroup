'use client';

import Image from 'next/image';
import { Mail, Phone, MessageCircle } from 'lucide-react';

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function TeamPage() {
  const scrollToForm = () => {
    window.location.href = '/contact#contact-form';
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
     

      {/* Managing Director Section */}
      <section className="py-12 bg-white mt-12">

        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-emerald-600">Leadership</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Meet our visionary leadership driving excellence in global manpower solutions
          </p>
        </div>

          {/* Managing Director */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
            {/* MD card (left, spans 2) */}
            <div className="bg-white/70 backdrop-blur-sm p-6 md:p-8 shadow-xl ring-1 ring-gray-100 lg:col-span-2 h-full">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
                <div className="lg:col-span-1 text-center">
                  <div className="w-full max-w-[22rem] aspect-[3/4] mx-auto mb-6 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white bg-white">
                    <Image
                      src="/managing_director.jpg"
                      alt="Managing Director"
                      width={384}
                      height={512}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1 tracking-tight">Managing Director</h3>
                  <p className="text-emerald-700 font-semibold">The Gazipur Group</p>
                </div>
                
                <div className="lg:col-span-3 min-w-0">
                  <div className="prose prose-base md:prose-lg max-w-none text-gray-700 leading-relaxed">
                    <p className="mb-0">
                      Industrialization was an irresistible trend made global by the dynamics of international markets. The new millennium globalization is shaping a new era of interaction among nations. The APEC (Asia – Pacific Economic Cooperation), SAARC (South Asian Association for Regional Cooperation), WTO (World Trade Organization), D8 (Developing Eight), G8 (Group of Eight), BIMSTEC (Bay of Bengal Initiative for Multi-sectorial Technical and Economic Cooperation), GCC (Gulf Cooperation Council), ASEAN(Association of Southeast Asian Nations) and ISO (International Organization of Standardization) will play major roles in governing all kinds of trades and services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Get in touch card (right) */}
            <div className="w-full">
              <div className="sticky top-24 bg-gradient-to-br from-emerald-50 via-white to-emerald-100 rounded-2xl p-6 shadow-xl ring-1 ring-emerald-100">
                <div className="flex items-center space-x-3 mb-4">
                  <MessageCircle className="w-6 h-6 text-emerald-600" />
                  <h4 className="text-lg font-semibold text-gray-900">Get in touch</h4>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Ready to start your international career journey? Contact us today for personalized guidance and program information.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                    <span>Quick response within 24 hours</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                    <span>Personalized consultation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                    <span>No obligation inquiry</span>
                  </li>
                </ul>
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow"
                >
                  Go to Contact Form
                </button>
              </div>
            </div>
          </div>

          {/* Directors Team */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-emerald-600 text-center mb-2">Our Directors Team</h3>
            <p className="text-base text-gray-500 text-center mb-8">
              Meet the leaders driving our global operations and client success
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             

             

              {/* Md. Liton */}
              <div className="bg-white/80 backdrop-blur shadow-xl p-6 text-center hover:shadow-2xl transition-shadow duration-300 ring-1 ring-gray-100">
                <div className="w-48 h-64 md:w-56 md:h-72 mx-auto mb-4 rounded-xl overflow-hidden shadow-xl bg-white">
                  <Image
                    src="/liton.jpg"
                    alt="Md. Liton"
                    width={256}
                    height={320}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Md. Liton</h4>
                <p className="text-emerald-600 font-semibold mb-3">Director Administration</p>
                <p className="text-sm text-gray-600 mb-4">
                Leads administrative operations and internal processes. Ensures service quality, training standards, and seamless candidate support, ensuring efficient compliance.
                </p>
                <div className="space-y-2.5">
                  <a 
                    href="mailto:liton@gajipurgroup.com"
                    className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 bg-white hover:bg-emerald-50 border border-gray-200 hover:border-emerald-300 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md w-full"
                  >
                    <Mail className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-medium text-gray-700">liton@gajipurgroup.com</span>
                  </a>
                  <a 
                    href="https://wa.me/8801990423908"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md w-full"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span className="text-sm font-medium text-white">+8801990423908</span>
                  </a>
                </div>
              </div>

               {/* Md. Atikullah Mithu */}
               <div className="bg-white/80 backdrop-blur shadow-xl p-6 text-center hover:shadow-2xl transition-shadow duration-300 ring-1 ring-gray-100 md:col-span-2 lg:col-span-1">
                <div className="w-48 h-64 md:w-56 md:h-72 mx-auto mb-4 rounded-xl overflow-hidden shadow-xl bg-white">
                  <Image
                    src="/mithu.jpg"
                    alt="Md. Atikullah Mithu"
                    width={256}
                    height={320}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Md. Atikullah Mithu</h4>
                <p className="text-emerald-600 font-semibold mb-3">Director (Head Of Sales)                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Oversees global placements and employer relations. Drives growth strategies across
                  the Middle East and Asia with a focus on ethical recruitment.
                </p>
                <div className="space-y-2.5">
                  <a 
                    href="mailto:mithu@gajipurgroup.com"
                    className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 bg-white hover:bg-emerald-50 border border-gray-200 hover:border-emerald-300 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md w-full"
                  >
                    <Mail className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-medium text-gray-700">mithu@gajipurgroup.com</span>
                  </a>
                  <a 
                    href="https://wa.me/8801819251370"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md w-full"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span className="text-sm font-medium text-white">+8801819251370</span>
                  </a>
                </div>
              </div>

               
              {/* Marziano Palli */}
              <div className="bg-white/80 backdrop-blur shadow-xl p-6 text-center hover:shadow-2xl transition-shadow duration-300 ring-1 ring-gray-100">
                <div className="w-48 h-64 md:w-56 md:h-72 mx-auto mb-4 rounded-xl overflow-hidden shadow-xl bg-white">
                  <Image
                    src="/Palli.jpg"
                    alt="Marziano Palli"
                    width={256}
                    height={320}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Marziano Palli</h4>
                <p className="text-emerald-600 font-semibold mb-3">Director Sales (Europe)</p>
                <p className="text-sm text-gray-600 mb-4">
                  Leads European market development and client partnerships. Experienced in cross-border
                  recruitment and compliance with EU labor standards.
                </p>
                <div className="space-y-2.5">
                  <a 
                    href="mailto:marzianopalli@gajipurgroup.com"
                    className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 bg-white hover:bg-emerald-50 border border-gray-200 hover:border-emerald-300 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md w-full"
                  >
                    <Mail className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-medium text-gray-700">marzianopalli@gajipurgroup.com</span>
                  </a>
                  <a 
                    href="https://wa.me/393428202845"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md w-full"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span className="text-sm font-medium text-white">+393428202845</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
