import { LucideIcon } from 'lucide-react';
import Image from 'next/image';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  images: { large: string; small1: string; small2: string };
}

// Left-aligned card: Text on left, Images on right
export function ServiceCardLeft({ icon: Icon, title, description, features, images }: ServiceCardProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
      {/* Text Content */}
      <div className="animate-fade-in-left">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
            <Icon className="w-6 h-6 text-emerald-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{title}</h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">{description}</p>
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Image Content */}
      <div className="animate-fade-in-right">
        <div className="grid grid-cols-3 gap-3 h-96">
          <div className="col-span-2 relative overflow-hidden rounded-xl shadow-2xl group">
            <Image src={images.large} alt={title} fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
          </div>
          <div className="col-span-1 flex flex-col gap-3">
            <div className="relative flex-1 overflow-hidden rounded-xl shadow-xl group">
              <Image src={images.small1} alt={title} fill className="object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 ease-out" />
            </div>
            <div className="relative flex-1 overflow-hidden rounded-xl shadow-xl group">
              <Image src={images.small2} alt={title} fill className="object-cover group-hover:scale-110 group-hover:-rotate-2 transition-all duration-700 ease-out" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Right-aligned card: Images on left, Text on right
export function ServiceCardRight({ icon: Icon, title, description, features, images }: ServiceCardProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Image Content */}
      <div className="animate-fade-in-left">
        <div className="grid grid-cols-3 gap-3 h-96">
          <div className="col-span-2 relative overflow-hidden rounded-xl shadow-2xl group">
            <Image src={images.large} alt={title} fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
          </div>
          <div className="col-span-1 flex flex-col gap-3">
            <div className="relative flex-1 overflow-hidden rounded-xl shadow-xl group">
              <Image src={images.small1} alt={title} fill className="object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 ease-out" />
            </div>
            <div className="relative flex-1 overflow-hidden rounded-xl shadow-xl group">
              <Image src={images.small2} alt={title} fill className="object-cover group-hover:scale-110 group-hover:-rotate-2 transition-all duration-700 ease-out" />
            </div>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="animate-fade-in-right">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
            <Icon className="w-6 h-6 text-emerald-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{title}</h2>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">{description}</p>
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
