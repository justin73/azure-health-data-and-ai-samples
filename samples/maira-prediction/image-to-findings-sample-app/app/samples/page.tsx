'use client';
import { useState } from 'react';
import { Button, Card, Input } from '@fluentui/react-components';
import { ImageReviewer } from '@/app/ui/ImageReviewer';
import { usePageLayoutStyles } from '@/app/ui/payLayoutStyle';
import { RESPONSE_PAYLOAD } from '@/app/mockData/data';
import { REPORT } from '@/app/ui/ImageReviewer';

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
  const [report, setReport] = useState<REPORT | null>(null); // State to store the generated reports

  const handleMouseEnter = (label: string) => {
    console.log('enter ---->', label);
    setActiveLabel(label);
  };

  const handleMouseLeave = () => {
    setActiveLabel(null);
    console.log('leave ---->');
  };

  const handleFetchData = () => {
    setReport(RESPONSE_PAYLOAD);
  };

  return (
    <Card className={pageLayoutStyles.card}>
      <h1>Generate Report</h1>
      <div className="flex flex-row">
        <div className="flex flex-1 flex-col">
          <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
            <ImageReviewer
              report={report}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              activeLabel={activeLabel}
            />
          </div>
          <Input
            placeholder="Enter your model endpoint"
            defaultValue="https://localhost:3000/api/generateReport"
          />
          <Button onClick={handleFetchData}>Click to generate report</Button>
        </div>
        <div className="flex-1">
          Results
          <ul>
            {report?.inference.result.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`list-item ${activeLabel === item.text ? 'active' : ''}`}
                  onMouseEnter={() => handleMouseEnter(item.text)}
                  onMouseLeave={handleMouseLeave}
                >
                  <p>
                    <span className="mr-2 rounded-md border border-gray-400 p-1">
                      {index + 1}
                    </span>
                    {item.text}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Card>
  );
}
