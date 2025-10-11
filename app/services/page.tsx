import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Services from '../components/Services';

export default function ServicesPage() {
  return (
    <div className="min-h-screen  mt-6">
      {/* Services Component */}
      <Services />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-emerald-100 mb-8">
            Contact us today to learn more about our services and how we can help you achieve your international career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/training-program"
              className="inline-flex items-center justify-center px-8 py-3 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors border-2 border-white"
            >
              View Training Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
