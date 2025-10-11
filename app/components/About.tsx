import { CheckCircle, Eye, Shield, Target } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const achievements = [
    'Government Registered Recruiting Agency',
    'Member of Bangladesh Association of International Recruiting Agencies (BAIRA)',
    'Partnerships with leading international employers',
    '95% job placement success rate',
    'Comprehensive pre-departure orientation programs',
  ];

  return (
    <section id="about" className="pt-20 pb-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-emerald-600">THE GAZIPUR AIR INTERNATIONAL</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With over 15 years of dedicated service, we have established ourselves as a trusted partner in developing skilled professionals and facilitating  <br /> international employment opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-16">
          {/* Company Overview */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 h-full">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Leading Training &amp; Manpower Development</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                THE GAZIPUR AIR INTERNATIONAL stands at the forefront of Bangladesh&apos;s manpower development sector. Since our establishment, we have been committed to providing world-class training programs that prepare individuals for successful international careers.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our comprehensive approach combines technical skills training, language proficiency development, and professional preparation to ensure our graduates are ready to excel in competitive global markets.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Located in the heart of Dhaka at Banani, our modern facilities are equipped with state-of-the-art training equipment and staffed by experienced professionals dedicated to student success.
              </p>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 h-full">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        {/* <div className="grid md:grid-cols-3 gap-8">
          {[{ icon: Target, title: 'Our Mission', description: 'To bridge the gap between skilled Bangladeshi talent and global employment opportunities through comprehensive training and professional development.' }, { icon: Eye, title: 'Our Vision', description: 'To become the leading manpower development organization in Bangladesh, recognized internationally for quality training and ethical recruitment practices.' }, { icon: Shield, title: 'Our Values', description: 'Excellence in training, integrity in service, commitment to success, and dedication to empowering individuals for global careers.' }].map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="h-8 w-8 text-emerald-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div> */}
      </div>
    </section>
  );
}


