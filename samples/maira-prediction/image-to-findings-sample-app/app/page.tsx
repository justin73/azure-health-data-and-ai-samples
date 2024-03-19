'use client';

import Link from 'next/link';

import { usePageLayoutStyles } from './ui/payLayoutStyle';
import { Card } from '@fluentui/react-components';

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
  const pageLayoutStyles = usePageLayoutStyles();

  return (
    <Card className={pageLayoutStyles.card}>
      <div id="landing">
        <div>
          <div id="description">
            <div id="title">Medical image report generation</div>
            <div id="description-sub">
              Generate a set of findings based on a medical image and an
              indication. Users can select the finding and see a corresponding
              overlay on the image highlighting the relevant anatomical region
              or abnormality.
            </div>
          </div>
          <div id="select-image">
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
                {/* <SampleImages /> */}
                <Link href="/samples">Sample Image</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
