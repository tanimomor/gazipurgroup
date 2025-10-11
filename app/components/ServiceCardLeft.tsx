import { LucideIcon } from 'lucide-react';
import ServiceCardImage from './ServiceCardImage';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  images: { large: string; small1: string; small2: string };
  isHovered: boolean;
}

export default function ServiceCardLeft({ icon: Icon, title, description, features, images, isHovered }: ServiceCardProps) {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">
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
        <ServiceCardImage images={images} title={title} isHovered={isHovered} />
      </div>
    </div>
  );
}
