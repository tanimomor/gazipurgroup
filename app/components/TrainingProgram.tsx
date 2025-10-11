'use client';
// @ts-nocheck
import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Clock, Award, BookOpen } from 'lucide-react';
import { trainingPrograms } from '../data/mock';

export const TrainingPrograms = () => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Technical':
        return 'bg-emerald-100 text-emerald-700';
      case 'Language':
        return 'bg-blue-100 text-blue-700';
      case 'Professional':
        return 'bg-amber-100 text-amber-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

//   const handleEnrollNow = (programTitle: string) => {
//     // Mock enrollment action
//     alert(`Enrollment initiated for: ${programTitle}. Please contact us for further details.`);
//   };

  return (
    <section id="programs" className="py-20 mt-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-emerald-600">Training Programs</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive training programs designed to equip you with the skills and certifications needed for successful international careers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {trainingPrograms.map((program: any) => (
            // @ts-expect-error JSX typing from JS module
            <Card key={program.id} className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-start justify-between mb-4">
                <Badge variant="outline" className={getCategoryColor(program.category)}>
                  {program.category}
                </Badge>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {program.duration}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {program.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {program.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm text-gray-700">{program.certification}</span>
                </div>
                @ts-expect-error JSX typing from JS module
                {/* <Button 
                  variant="default"
                  onClick={() => handleEnrollNow(program.title)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                >
                  Enroll Now
                </Button> */}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          {/* @ts-expect-error JSX typing from JS module */}
          <Card className="p-8 bg-emerald-50 border-emerald-200">
            <BookOpen className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Flexible Learning Options
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We offer flexible scheduling options including weekend classes, evening sessions, and intensive programs to accommodate your lifestyle and work commitments.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-emerald-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Practical Training</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Learning Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-600 mb-2">95%</div>
                <div className="text-sm text-gray-600">Job Placement Rate</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};