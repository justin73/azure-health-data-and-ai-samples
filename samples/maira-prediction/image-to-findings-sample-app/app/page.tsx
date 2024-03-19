'use client';

import Link from 'next/link';

import { usePageLayoutStyles } from './ui/payLayoutStyle';
import { Card } from '@fluentui/react-components';

export type ModelInferenceItem = {
  x_max: number;
  x_min: number;
  y_max: number;
  y_min: number;
};

export type ModelInferenceType = ModelInferenceItem[];

export default function Page() {
  const pageLayoutStyles = usePageLayoutStyles();

  return (
    <Card className={pageLayoutStyles.card}>
      <div>
        <div className="w-full">
          <div className="p-4">
            <p className="text-2xl">Medical image report generation</p>
          </div>
          <div className="px-4 py-4">
            <span>
              Generate a set of findings based on a medical image and an
              indication. Users can select the finding and see a corresponding
              overlay on the image highlighting the relevant anatomical region
              or abnormality.
            </span>
          </div>
        </div>
        <div className="mt-8 flex px-4">
          <div>
            <div className="draft-sub-title">Try it on your own image</div>
            <div className="image-drop-box"></div>
          </div>
          <div className="landing-separator"></div>
          <div id="image-gallery">
            <div className="draft-sub-title">
              Select an image from our gallery
            </div>
            <div id="image-gallery-content">
              <Link href="/samples">Sample Image</Link>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
