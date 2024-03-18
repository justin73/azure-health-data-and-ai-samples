'use client';

import { ImageReviewer } from '@/app/ui/ImageReviewer';

export type ModelInferenceItem = {
  x_max: number;
  x_min: number;
  y_max: number;
  y_min: number;
  label: string;
};

export type ModelInferenceType = ModelInferenceItem[];

const modelInference: ModelInferenceItem[] = [
  { x_max: 0.905, x_min: 0.545, y_max: 0.905, y_min: 0.365, label: 'Item 1' },
  { x_max: 0.745, x_min: 0.365, y_max: 0.665, y_min: 0.285, label: 'Item 2' },
  // Add more items as needed
];

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <ImageReviewer modelInference={modelInference} />
        </div>
      </div>
    </main>
  );
}
