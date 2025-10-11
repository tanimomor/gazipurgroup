'use client';
import React, { useState } from 'react';
import { Card } from './ui/card';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { galleryImages } from '../data/mock';

type GalleryImage = {
  id: number | string;
  url: string;
  title: string;
  description?: string;
};

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-emerald-600">Facilities</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take a look at our modern training facilities and learning environments designed to provide the best educational experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(galleryImages as GalleryImage[]).map((image) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                {/* @ts-expect-error: Card is JS module without TS types */}
                <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={image.url}
                      alt={image.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
                      }}
                      onClick={() => setSelectedImage(image)}
                    />
                    {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium">View Details</span>
                    </div> */}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-600">{image.description}</p>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={(selectedImage ?? image).url}
                    alt={(selectedImage ?? image).title}
                    className="w-full h-96 object-cover rounded-lg"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
                    }}
                  />
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{(selectedImage ?? image).title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{(selectedImage ?? image).description}</p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">State-of-the-art equipment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">Professional learning environment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">Industry-standard facilities</span>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Facility Stats */}
        
      </div>
    </section>
  );
};


