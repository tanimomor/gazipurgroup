import Hero from './components/Hero';
import { Users, Globe, Award, Star, Phone, Mail, MapPin, Target, Eye, Shield, CheckCircle, Heart, GraduationCap, Briefcase, FileCheck } from 'lucide-react';
import About from './components/About';
import Features from './components/Features';
import Image from 'next/image';
import Process from './components/Process';

export default function Home() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To bridge the gap between skilled Bangladeshi talent and global employment opportunities through comprehensive training and professional development.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description:
        'To become the leading manpower development organization in Bangladesh, recognized internationally for quality training and ethical recruitment practices.',
    },
    {
      icon: Heart,
      title: 'Our Values',
      description:
        'Excellence in training, integrity in service, commitment to success, and dedication to empowering individuals for global careers.',
    },
  ];

  const achievements = [
    'ISO 9001:2015 Certified Training Institute',
    'Government Registered Recruiting Agency',
    'Member of Bangladesh Association of International Recruiting Agencies (BAIRA)',
    'Partnerships with leading international employers',
    '95% job placement success rate',
    'Comprehensive pre-departure orientation programs',
  ];

  const services = [
    {
      id: 1,
      icon: 'GraduationCap',
      title: 'Training Programs',
      description:
        'Comprehensive skill development and certification aligned with international standards.'
    },
    {
      id: 2,
      icon: 'Briefcase',
      title: 'International Job Placement',
      description:
        'Job matching with reputable global employers across multiple industries.'
    },
    {
      id: 3,
      icon: 'Users',
      title: 'Career Counseling',
      description:
        'Personalized guidance to help you choose the right path and succeed abroad.'
    },
    {
      id: 4,
      icon: 'FileCheck',
      title: 'Compliance & Support',
      description:
        'End-to-end documentation, visa, and pre-departure assistance.'
    }
  ];

  const getIconComponent = (iconName: string) => {
    const icons = {
      Users,
      GraduationCap,
      Briefcase,
      FileCheck
    } as const;
    // @ts-ignore fallback for unknown icon names
    return icons[iconName as keyof typeof icons] || Users;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      <Features />

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive services designed to support your journey from training to international employment success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const IconComponent = getIconComponent(service.icon);
              return (
                <div key={service.id} className="p-6 text-center bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Service Process */}
          <Process />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
              Hear from our candidates who have achieved their dreams of working internationally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg animate-fade-in-up">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-green-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                &quot;THE GAZIPUR AIR INTERNATIONAL transformed my career completely. Their training 
                program prepared me perfectly for my IT role in Germany. The support throughout 
                the process was exceptional.&quot;
              </p>
              <div className="flex items-center">
                <Image
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                  alt="Rahman Ahmed"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-navy-900">Rahman Ahmed</h4>
                  <p className="text-gray-600 text-sm">Software Engineer, Germany</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg animate-fade-in-up animation-delay-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-green-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                &quot;Thanks to THE GAZIPUR AIR INTERNATIONAL, I&rsquo;m now working as a nurse in Canada. 
                The cultural orientation and language training made my transition smooth and successful.&quot;
              </p>
              <div className="flex items-center">
                <Image
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                  alt="Fatima Khatun"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-navy-900">Fatima Khatun</h4>
                  <p className="text-gray-600 text-sm">Registered Nurse, Canada</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg animate-fade-in-up animation-delay-600">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-green-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                &quot;The team at THE GAZIPUR AIR INTERNATIONAL went above and beyond to help me secure 
                my dream job in Australia. Their expertise in international recruitment is unmatched.&quot;
              </p>
              <div className="flex items-center">
                <Image
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                  alt="Karim Hassan"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-navy-900">Karim Hassan</h4>
                  <p className="text-gray-600 text-sm">Project Manager, Australia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4 animate-fade-in-up">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
              Ready to start your international career journey? Contact us today for a consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in-left">
              <form className="bg-white rounded-xl shadow-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="+880 1234-567890"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your workforce needs or career goals..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
                >
                  Send Message 📧
                </button>
              </form>
            </div>

            <div className="animate-fade-in-right">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-2">Phone / WhatsApp</h3>
                    <p className="text-gray-700">+8801819251370 (Md. Atikullah Mithu)</p>
                    <p className="text-gray-700">+880 1990-423908 (Md. Liton)</p>
                    <p className="text-gray-700">+393428202845 (Marziano Palli - Europe)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-2">Email</h3>
                    <p className="text-gray-700">mithu@gajipurgroup.com</p>
                    <p className="text-gray-700">liton@gajipurgroup.com</p>
                    <p className="text-gray-700">palli@gajpurgroup.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-2">Office Address</h3>
                    <p className="text-gray-700">
                      House#183, Road#02<br />
                      Baridhara DOHS<br />
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-navy-900 mb-4">Interview Options 🎯</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>Online interviews available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>Face-to-face interviews at our institute</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>Flexible scheduling available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}