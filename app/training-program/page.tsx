import React from 'react';
import { TrainingPrograms } from '../components/TrainingProgram';
import { Gallery } from '../components/Gallery';

export default function TrainingProgramPage() {
  return (
    <main className="min-h-screen bg-white">
      <TrainingPrograms />
      <Gallery />
    </main>
  );
}


