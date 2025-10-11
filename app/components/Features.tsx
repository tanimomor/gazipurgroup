import { Target, Eye, Shield } from 'lucide-react';
import Image from 'next/image';

export default function Features() {
  return (
    <>
      {/* Header (matching About page style) */}
      <section id="features" className="py-20  bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-emerald-600">Facilities & Learning Experience</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our modern classrooms, hands-on labs, interactive learning approach, and supportive study resources — all designed to help you master real-world skills.
            </p>
          </div>
          {/* Modern Classroom Facilities - Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in-left">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-green-800" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-navy-900">
                  Modern Classroom Facilities
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                State-of-the-art classrooms equipped for engagement, collaboration, and hands-on learning.
                Every room is optimized for visibility, acoustics, and comfort, so you can focus deeply without distractions.
                From interactive screens to ergonomic seating, the environment accelerates retention and results.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-800 rounded-full"></div>
                  <span className="text-gray-700">State-of-the-art equipment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-800 rounded-full"></div>
                  <span className="text-gray-700">Professional learning environment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-800 rounded-full"></div>
                  <span className="text-gray-700">Industry-standard facilities</span>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <Image
                src="/modern_classroom.jpg"
                alt="Modern classroom facilities"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Electrical Training Lab - Image Left, Text Right */}
          <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 p-8">
                <div className="animate-fade-in-left order-2 lg:order-1">
                  <Image
                    src="/elecric_training_lab.jpg"
                    alt="Electrical training lab"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-2xl w-full h-96 object-cover"
                  />
                </div>
                
                <div className="animate-fade-in-right order-1 lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <Eye className="w-6 h-6 text-green-800" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-navy-900">
                      Electrical Training Lab
                    </h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Professional-grade electrical equipment, control panels, and supervised practice ensure you learn by doing.
                    You will master the fundamentals and advanced techniques with confidence in a safety-first environment.
                    Build a portfolio of real tasks that employers recognize and value from day one.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-800 rounded-full"></div>
                      <span className="text-gray-700">State-of-the-art equipment</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-800 rounded-full"></div>
                      <span className="text-gray-700">Professional learning environment</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-800 rounded-full"></div>
                      <span className="text-gray-700">Industry-standard facilities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Learning - Text Left, Image Right (bullets) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-green-800" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-navy-900">
                  Interactive Learning
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Learn in dynamic, discussion-led sessions guided by seasoned instructors who teach the way industry works.
                Expect hands-on challenges, peer collaboration, and coaching that turns theory into real skill.
                Every class is designed to keep you engaged, confident, and ready to deliver.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-800 rounded-full"></div>
                  <span className="text-gray-700">State-of-the-art equipment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-800 rounded-full"></div>
                  <span className="text-gray-700">Professional learning environment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-800 rounded-full"></div>
                  <span className="text-gray-700">Industry-standard facilities</span>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <Image
                src="/interactive_learning.jpeg"
                alt="Interactive learning"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second set (repurposed labels retained for layout) */}
      <section id="mission" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Recreation & Development - Image Left, Text Right (even index) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in-left">
              <Image
                src="/recreation_dev.jpeg"
                alt="Recreation and development"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div className="animate-fade-in-right">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-navy-900">
                  Recreation & Development
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Balance study with wellness and team-building activities that keep energy high and minds sharp.
                Purposeful breaks, community events, and guided recreation build resilience and leadership.
                You leave not just skilled, but confident and ready to thrive under pressure.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Wellness-focused activities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Collaborative team development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Community events & leadership</span>
                </div>
              </div>
            </div>
          </div>

          {/* Study & Research Facilities - Image Right, Text Left (odd index) */}
          <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 p-8">
                <div className="animate-fade-in-left">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <Eye className="w-6 h-6 text-green-800" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-navy-900">
                      Study & Research Facilities
                    </h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Quiet, well-equipped library and study zones help you focus longer and understand deeper.
                    Access curated materials, research support, and a calm atmosphere for serious preparation.
                    When it’s time to perform, you’ll be ready—with knowledge that sticks.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">Resource-rich library access</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">Quiet, focused study zones</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">Research support & guidance</span>
                    </div>
                  </div>
                </div>
                <div className="animate-fade-in-right">
                  <Image
                    src="/study_research.jpeg"
                    alt="Study and research facilities"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-2xl w-full h-96 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Final section - Image Left, Text Right (even index) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <Image
                src="/study_research.jpeg"
                alt="Advanced study support"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div className="animate-fade-in-right">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-navy-900">
                  Advanced Study Support
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Deep work thrives in focused spaces. Our library and study areas are built for clarity,
                comfort, and productivity so you can move from understanding to mastery.
                With the right environment, preparation becomes your advantage.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Modern resources for mastery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Focused, distraction-free spaces</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Guided study strategies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


