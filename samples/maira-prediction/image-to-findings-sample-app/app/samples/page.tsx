'use client';
import { useState } from 'react';
import { Button, Card } from '@fluentui/react-components';
import { ImageReviewer } from '@/app/ui/ImageReviewer';
import { usePageLayoutStyles } from '@/app/ui/payLayoutStyle';

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

  const [activeLabel, setActiveLabel] = useState<string | null>(null); // State to track active label
  const [reports, setReports] = useState<ModelInferenceType>([]); // State to store the generated reports

  const handleMouseEnter = (label: string) => {
    console.log('enter ---->', label);
    setActiveLabel(label);
  };

  const handleMouseLeave = () => {
    setActiveLabel(null);
    console.log('leave ---->');
  };

  const handleFetchData = () => {
    setReports(modelInference);
  };

  return (
    <Card className={pageLayoutStyles.card}>
      <div className="flex flex-row">
        <div className="flex flex-1 flex-col">
          <h1>Generate Report</h1>
          <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
            <ImageReviewer
              modelInference={reports}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              activeLabel={activeLabel}
            />
          </div>
          <Button onClick={handleFetchData}>Click to generate report</Button>
        </div>
        <div className="flex-1">
          Results
          <ul>
            {reports.map((item, index) => (
              <li
                key={index}
                className={`list-item ${activeLabel === item.label ? 'active' : ''}`}
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <p>{item.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
