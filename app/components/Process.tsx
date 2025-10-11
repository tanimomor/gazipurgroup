export default function Process() {
  return (
    <div className="mt-20">
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Our Process
        </h3>
        <p className="text-lg text-gray-600">
          A streamlined approach to get you from training to international employment
        </p>
      </div>

      <div className="relative">
        {/* horizontal connector line removed */}
        <div className="grid md:grid-cols-4 gap-8">
          <a href="#about" className="group text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg">
            <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
              1
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Assessment</h4>
            <p className="text-sm text-gray-600">Initial skills assessment and career counseling</p>
          </a>
          <a href="#mission" className="group text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg">
            <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
              2
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Training</h4>
            <p className="text-sm text-gray-600">Comprehensive skill development and certification</p>
          </a>
          <a href="#services" className="group text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg">
            <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
              3
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Placement</h4>
            <p className="text-sm text-gray-600">Job matching with international employers</p>
          </a>
          <a href="#contact" className="group text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg">
            <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
              4
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Support</h4>
            <p className="text-sm text-gray-600">Ongoing support and career development</p>
          </a>
        </div>
      </div>
    </div>
  );
}


